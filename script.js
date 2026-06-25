console.log("Hello world!")
console.log("Running script.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");

/***Variables***/
let userName;
let age;
let order = []
/***Main***/

/***Functions***/

function getFormInput() {
let userName = (NAME_FIELD.value);
OUTPUT.innerHTML = "<p>Hi "+userName+"</p>";
let age = Number(AGE_FIELD.value);
OUTPUT.innerHTML += "<p>You are "+age+" years old</p>";
const CHOOSE_FIELD = document.getElementById("chooseField");
let chocolateArray = ["Banana and Natella Crepe", "Banana and caramal Crepe", "Lemon and Sugar Crepe", "Ham, Cheese and Spinach Crepe", "Ham and Cheese and egg Crepe" ]
let choice = CHOOSE_FIELD.value;
OUTPUT.innerHTML = "You have ordered: "+chocolateArray[choice]+"<br>";
const MONEY_FIELD = document.getElementById("moneyField");
pocketMoney = Number (MONEY_FIELD.value);
OUTPUT.innerHTML += "<p>You have "+pocketMoney+" dollars to spend</p>";
}


