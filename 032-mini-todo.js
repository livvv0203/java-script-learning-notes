"user strict";

window.addEventListener("load", () => {
  const input = document.querySelector(".input");
  const btnAdd = document.querySelector(".btn-add");
  const taskList = document.querySelector("ul");

  btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    const listTextContent = input.value;
    input.value = "";

    const newListElement = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    newListElement.textContent = listTextContent;
    taskList.appendChild(newListElement);
    newListElement.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(newListElement);
      console.log('Deleting', newListElement.textContent);
    });

  });
});

const btnTry = document.querySelector('.btn-try');
const l = document.querySelector('ul');
const date = new Date() + '';

// On testing purpose 
btnTry.addEventListener('click', function() {

    const html = `
        <li>${date}</li>
        <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            perferendis mollitia odio? Assumenda et minus doloremque, voluptas
            alias dicta corporis saepe enim ab illum laborum sequi perferendis rem
            repellendus aliquid.
        </li>
    `;

    l.insertAdjacentHTML('beforeend', html);


});










