"use strict";

class Workout {
  // Fields
  date = new Date();
  id = (Date.now() + "").slice(-10); // Current timestamp
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}
    `;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = "running";

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60); // km/h
    return this.speed;
  }
}

//////////////////////////////////////////////
// APPLICATION

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence"); // Steps per minute
const inputElevation = document.querySelector(".form__input--elevation");

class App {
  // Private field
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 13;

  constructor() {
    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Submit Event
    form.addEventListener("submit", this._newWorkout.bind(this)); // this keyword pointed to obj form, use bind to change
    // Toggle Form options
    inputType.addEventListener("change", this._toggleElevationField);
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Could not get your position.");
        }
      );
    }
  }

  _loadMap(position) {
    /* Using Geolocation API */

    // success callback
    console.log(position);
    // Takes from the obj- position' property named latitude and assign it to a local variable latitude
    const { latitude } = position.coords; // unpack the property from an object
    const { longitude } = position.coords;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}.`);
    // Link to my current location
    console.log(`https://www.google.com/maps/@${latitude},${longitude},13z`);

    const coords = [latitude, longitude];

    // Using Leaflet library
    this.#map = L.map("map").setView(coords, this.#mapZoomLevel); // entry point

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords)
      .addTo(this.#map)
      .bindPopup("My Current Location")
      .openPopup();

    // Handling clicks on map
    this.#map.on("click", this._showForm.bind(this));

    // Render markers in local storage
    this.#workouts.forEach(workout => {
        this._renderWorkoutMarker(workout);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE; // Copy mapE to glaobal variable
    // Show Form on left
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _hideForm() {
    // Empty Input
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";
    form.style.display = "none"; // hide immediately first
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    // Helper functions
    const validateInput = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp)); // return true if every num is positive

    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

    e.preventDefault();
    // Get data from the form
    const type = inputType.value; // running or cycling
    const distance = +inputDistance.value; // convert to num
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng; // get variable lat and lng
    let workout; // the new workout obj

    // If running obj, create running
    if (type === "running") {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        !validateInput(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert("Input has to be positive numbers! - running");
      // Otherwise, create running obj
      workout = new Running([lat, lng], distance, duration, cadence);
      this.#workouts.push(workout); // add the new workout obj to arr
    }

    // If cycling, create cycling
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      // Check data validation
      if (
        !validateInput(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert("Input has to be positive numbers! - cycling");

      // Otherwise, create cycling obj
      workout = new Cycling([lat, lng], distance, duration, elevation);
      this.#workouts.push(workout);
    }

    // Render workout as marker on map
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + clear input field
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  // Render workout marker function
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "🚴🏻‍♂️"} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id=${workout.id}>
        <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
                <span class="workout__icon">${
                  workout.type === "running" ? "🏃‍♂️" : "🚴🏻‍♂️"
                }</span>
                <span class="workout__value">${workout.distance}</span>
                <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${workout.duration}</span>
                <span class="workout__unit">min</span>  
            </div>
    `;

    if (workout.type === "running") {
      html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
        </div>
    </li>
        `;
    }

    if (workout.type === "cycling") {
      html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
        `;
    }
    form.insertAdjacentHTML("afterend", html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest(".workout"); // click to select the workout element in list

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      (work) => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
        animate: true,
        pan: {
            duration: 1,
        }
    });

    // use public interface
    // workout.click();
  }

  _setLocalStorage() {
    // key value store - convert obj to string
    // value is stored as string in the workout key
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    // parson string back to obj
    const data = JSON.parse(localStorage.getItem('workouts')); // got a big string originally without parsing

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
        this._renderWorkout(work);
        // this._renderWorkoutMarker(work); // Map is not yet created and loaded
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload(); // refresh
  }
}

const app = new App();


