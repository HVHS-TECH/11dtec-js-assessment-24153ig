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
order.push(3.00);
console.log(order);
}

function addToListCream() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Cream - $3</p>";
order.push(3.00);
console.log(order);
}

function addToListmm() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>M&Ms - $3</p>";
order.push(3.00);
console.log(order);
}

function addToListCrepe5() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Ham and Cheese and egg Crepe - $5</p>";
order.push(5.00);
console.log(order);
}

function addToListCrepe4() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Ham, Cheese and Spinach Crepe - $5</p>";
order.push(5.00);
console.log(order);
}

function addToListCrepe3() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Lemon and Sugar Crepe - $5</p>";
order.push(5.00);
console.log(order);
}

function addToListCrepe2() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Banana and Caramel Crepe - $5</p>";
order.push(5.00);
console.log(order);
}

function addToListCrepe1() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Banana and Nutella Crepe - $5</p>";
order.push(5.00);
console.log(order);
}


function getFormInput() {
const OUTPUT = document.getElementById("spaceForJavaScriptFormOutput");
let userName = (NAME_FIELD.value);
OUTPUT.innerHTML = "<p>Hi "+userName+"</p>";
const MONEY_FIELD = document.getElementById("moneyField");
pocketMoney = Number (MONEY_FIELD.value);
OUTPUT.innerHTML += "<p>You have "+pocketMoney+" dollars to spend</p>";
}

function receipt() {
    
}






