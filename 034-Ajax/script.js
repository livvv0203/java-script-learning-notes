'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/* Old School one = XMLHttpRequest */

const getCountryData = function (country) {

  const request = new XMLHttpRequest();
  // From public-apis - REST countries
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  // send a request, the request will fetch data in the background
  request.send();

  // To wait for data arrival, once arrived, callback function will be called
  request.addEventListener('load', function () {
    // console.log(this.responseText); // this is the request
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
            <img class="country__img" src=${data.flags.svg} />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
                ).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
                <p class="country__row"><span>💰</span>${
                data.currencies.name
                }</p>
            </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

// Will be in diff order each time on fetching
// Couple ajax call at the same time 
getCountryData('portugal');

getCountryData('usa');

getCountryData('china');


