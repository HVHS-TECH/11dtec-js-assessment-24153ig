console.log("Hello world!")
console.log("Running script.js")

const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");

/***Variables***/
let userName;
let age;
let order = []
/***Main***/

/***Functions***/

function addToList() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Berries - $3</p>";
order.push("3.00");
}

function addToListCream() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Cream - $3</p>";
order.push("3.00");
}

function addToListmm() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>M&Ms - $3</p>";
order.push("3.00");
}

function addToListCrepe5() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Ham and Cheese and egg Crepe - $5</p>";
order.push("5.00");
}

function addToListCrepe4() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Ham, Cheese and Spinach Crepe - $5</p>";
order.push("5.00");
}

function addToListCrepe3() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Lemon and Sugar Crepe - $5</p>";
order.push("5.00");
}

function addToListCrepe2() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Banana and Caramel Crepe - $5</p>";
order.push("5.00");
}

function addToListCrepe1() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Banana and Nutella Crepe - $5</p>";
order.push("5.00");
}


function getFormInput() {
const OUTPUT = document.getElementById("spaceForJavaScriptFormOutput");
let userName = (NAME_FIELD.value);
OUTPUT.innerHTML = "<p>Hi "+userName+"</p>";
let age = Number(AGE_FIELD.value);
OUTPUT.innerHTML += "<p>You are "+age+" years old</p>";
let crepe = ["Banana and Nutella Crepe", "Banana and Caramel Crepe", "Lemon and Sugar Crepe", "Ham, cheese and Spinach Crepe", "Ham Cheese and Egg Crepe"
]
let price = 5;
const CHOOSE_FIELD = document.getElementById("chooseField");
let chocolateArray = ["undefined","Banana and Natella Crepe", "Banana and caramal Crepe", "Lemon and Sugar Crepe", "Ham, Cheese and Spinach Crepe", "Ham and Cheese and egg Crepe" ]
let choice = CHOOSE_FIELD.value;
OUTPUT.innerHTML += "You have ordered: "+chocolateArray[choice]+"<br>";
const MONEY_FIELD = document.getElementById("moneyField");
pocketMoney = Number (MONEY_FIELD.value);
OUTPUT.innerHTML += "<p>You have "+pocketMoney+" dollars to spend</p>";
}






