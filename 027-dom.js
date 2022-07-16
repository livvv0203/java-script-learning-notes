'user strict';

/* DOM - interface between all js code and the browser */
console.log(document.documentElement); // select the entire html

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for fun.';
message.innerHTML = 'We also use cookies for analytics.<button>Add</button>';

// document.querySelector('body').prepend(message); // first child
document.querySelector('body').append(message); // last child, moved

// Delete ele
document.querySelector('button').addEventListener('click', function() {
    message.remove();
});

// style
message.style.backgroundColor = 'yellow';
message.style.width = '80%';
message.style.height = '200px';

// document.documentElement.style.setProperty(); // passing tag and content 

// attributes
console.log(message.className);

// DOM
document.addEventListener('DOMContentLoaded' , function(e) {
    console.log("loaded", e);
});

window.addEventListener('load', function(e) {
    console.log("Page fully loaded..", e);
})

window.addEventListener('beforeunload', function(e) {
    e.preventDefault();

    e.returnValue='Leaving???';
})

