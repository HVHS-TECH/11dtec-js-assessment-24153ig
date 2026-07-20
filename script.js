console.log("Hello world!")
console.log("Running script.js")

const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");

/***Variables***/
let userName;
let age;
let order = []
let natellaQuantity =0;
let caremalQuantity =0;
let lemonQuantity =0;
let spinachQuantity =0;
let eggQuantity =0;
let berriesQuantity = 0;
let creamQuantity =0;
let mmQuantity =0;
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
Answer = pocketMoney-total  
OUTPUT.innerHTML += "<p>Change: $" + Answer +" </p>";
}
else{
let notEnough = total-pocketMoney
OUTPUT.innerHTML += "<p>You do not have enough money, you need $" + notEnough +" more</p>";
}

}
totalCosts()

}



function clearList() {
order = [] 
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "";
total = 0;
}

function orderUpdate(){
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "";
if (berriesQuantity>0){
OUTPUT.innerHTML += "<p>Berries x"+berriesQuantity+" - $"+ berriesQuantity * 3+"</p>";
}
if (creamQuantity>0){
OUTPUT.innerHTML += "<p>Cream x"+creamQuantity+" - $"+ creamQuantity * 3+"</p>";
}
if (mmQuantity>0){
OUTPUT.innerHTML += "<p>M&Ms x"+mmQuantity+" - $"+ mmQuantity * 3+"</p>";
}
}

function addToList() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
berriesQuantity++;
order.push(3.00);
orderUpdate()
}

function addToListCream() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
creamQuantity++;
order.push(3.00);
orderUpdate()
}

function addToListmm() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
mmQuantity++;
order.push(3.00);
orderUpdate()
}

function addToListCrepe5() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
berriesQuantity++;
order.push(5.00);
OUTPUT.innerHTML = "";
if (berriesQuantity>0){
OUTPUT.innerHTML += "<p>Berries x"+berriesQuantity+" - $"+ berriesQuantity * 3+"</p>";
}
}

function addToListCrepe4() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
berriesQuantity++;
order.push(5.00);
OUTPUT.innerHTML = "";
if (berriesQuantity>0){
OUTPUT.innerHTML += "<p>Berries x"+berriesQuantity+" - $"+ berriesQuantity * 3+"</p>";
}
}

function addToListCrepe3() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
berriesQuantity++;
order.push(5.00);
OUTPUT.innerHTML = "";
if (berriesQuantity>0){
OUTPUT.innerHTML += "<p>Berries x"+berriesQuantity+" - $"+ berriesQuantity * 3+"</p>";
}
}

function addToListCrepe2() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
berriesQuantity++;
order.push(5.00);
OUTPUT.innerHTML = "";
if (berriesQuantity>0){
OUTPUT.innerHTML += "<p>Berries x"+berriesQuantity+" - $"+ berriesQuantity * 3+"</p>";
}
}

function addToListCrepe1() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
berriesQuantity++;
order.push(5.00);
OUTPUT.innerHTML = "";
if (berriesQuantity>0){
OUTPUT.innerHTML += "<p>Berries x"+berriesQuantity+" - $"+ berriesQuantity * 3+"</p>";
}
console.log(order);
}












