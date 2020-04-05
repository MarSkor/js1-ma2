// question 1
const myFunctionExpression = function () {
  console.log("Martine Skorbakk");
};

// question 2
const clickBtn = document.querySelector(".btn");
function callBackClick() {
  console.log("I was clicked");
}
clickBtn.addEventListener("click", callBackClick);

// question 3
const inputFirstName = document.querySelector("#firstName");
function keyWasPressed(event) {
  console.log(event.target);
}
inputFirstName.addEventListener("keydown", keyWasPressed);

// question 4
const addClassToButton = document.querySelector("button");
function addingClass() {
  addClassToButton.classList.add("hover");
}
addClassToButton.addEventListener("mouseover", addingClass);

// question 5
const btnToDog = document.querySelector("[data-animal='dog']");
function removeClass() {
  btnToDog.classList.remove("hover");
}
btnToDog.addEventListener("mouseout", removeClass);

// question 6
const mouseOverLoop = document.querySelectorAll("li");
for (let i = 0; i < mouseOverLoop.length; i++) {
  console.log(mouseOverLoop[i]);
  mouseOverLoop[i].addEventListener("mouseover", hoverOver);
}
function hoverOver(e) {
  console.log(e.target.getAttribute("data-animal"));
}

// question 7
const animal = "cow";
switch (animal) {
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

// question 8
sheep.forEach(function (sheeps) {
  console.log(sheeps);
});

// question 9
function logHello() {
  console.log("hello");

  if (counter === 5) {
    clearInterval(helloTimer);
  }

  counter++;
}

let counter = 0;

const helloTimer = setInterval(logHello, 500);

// question 10
const textContainer = document.querySelector("div");
function updateText() {
  textContainer.innerHTML = "Text updated";
}

setTimeout(updateText, 2000);
