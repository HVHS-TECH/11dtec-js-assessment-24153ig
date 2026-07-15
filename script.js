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

function getFormInput() {
const OUTPUT = document.getElementById("spaceForJavaScriptFormOutput");
let userName = (NAME_FIELD.value);
OUTPUT.innerHTML = "<h2>Receipt</h2><p>Hi "+userName+"</p>";
const MONEY_FIELD = document.getElementById("moneyField");
pocketMoney = Number (MONEY_FIELD.value);
function totalCosts() {
let total = 0;
for (let i = 0; i<order.length; i++){
total +=order[i];
}
console.log("Total:" + total )
OUTPUT.innerHTML += "<p>Total: $"+total+" </p>";

if (pocketMoney>=total){
    
}
Answer = pocketMoney-total  
OUTPUT.innerHTML += "<p>Change: $" + Answer +" </p>";
}
totalCosts()

}

function addToList() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Berries - $3</p>";
order.push(3.00);
}

function addToListCream() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Cream - $3</p>";
order.push(3.00);
}

function addToListmm() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>M&Ms - $3</p>";
order.push(3.00);
}

function addToListCrepe5() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Ham and Cheese and egg Crepe - $5</p>";
order.push(5.00);
}

function addToListCrepe4() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Ham, Cheese and Spinach Crepe - $5</p>";
order.push(5.00);
}

function addToListCrepe3() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Lemon and Sugar Crepe - $5</p>";
order.push(5.00);
}

function addToListCrepe2() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Banana and Caramel Crepe - $5</p>";
order.push(5.00);
}

function addToListCrepe1() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<p>Banana and Nutella Crepe - $5</p>";
order.push(5.00);
console.log(order);
}












