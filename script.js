console.log("Hello world!")
console.log("Running script.js")

const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const OUTPUT = document.getElementById("costomerName");
/***Variables***/
let userName ="";
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
function total() {
const OUTPUT = document.getElementById("total");
let total1 = 0;
for (let i = 0; i<order.length; i++){
total1 +=order[i];
}
OUTPUT.innerHTML = "<p>Total: $"+total1+" </p>";
}
total()

function getFormInput() {
const OUTPUT = document.getElementById("spaceForJavaScriptFormOutput");
userName = (NAME_FIELD.value);
const MONEY_FIELD = document.getElementById("moneyField");
pocketMoney = Number (MONEY_FIELD.value);
if(pocketMoney<total){
    let notEnough = total-pocketMoney
OUTPUT.innerHTML += "<p>You do not have enough money, you need $" + notEnough +" more</p>";
}
else{
OUTPUT.innerHTML = "<h2>Receipt</h2><p>Hi "+userName+"<br><br/>Cash Given: $"+pocketMoney+"</p><p>Your Items:</p>";

if (berriesQuantity>0){
OUTPUT.innerHTML += "<p>Berries x"+berriesQuantity+" - $"+ berriesQuantity * 3+"</p>";
}
if (creamQuantity>0){
OUTPUT.innerHTML += "<p>Cream x"+creamQuantity+" - $"+ creamQuantity * 3+"</p>";
}
if (mmQuantity>0){
OUTPUT.innerHTML += "<p>M&Ms x"+mmQuantity+" - $"+ mmQuantity * 3+"</p>";
}
if (eggQuantity>0){
OUTPUT.innerHTML += "<p>Ham, Cheese and Egg x"+eggQuantity+" - $"+ eggQuantity * 5+"</p>";
}
if (spinachQuantity>0){
OUTPUT.innerHTML += "<p>Ham, Cheese and Spinach x"+spinachQuantity+" - $"+ spinachQuantity * 5+"</p>";
}
if (lemonQuantity>0){
OUTPUT.innerHTML += "<p>Lemon and Sugar x"+lemonQuantity+" - $"+ lemonQuantity * 5+"</p>";
}
if (caremalQuantity>0){
OUTPUT.innerHTML += "<p>Banana and caramal x"+caremalQuantity+" - $"+ caremalQuantity * 5+"</p>";
}
if (natellaQuantity>0){
OUTPUT.innerHTML += "<p>Banana and Nutella x"+natellaQuantity+" - $"+ natellaQuantity * 5+"</p>";
}
function totalCosts() {
let total = 0;
for (let i = 0; i<order.length; i++){
total +=order[i];
}
console.log("Total:" + total )
OUTPUT.innerHTML += "<p>Total: $"+total+" </p>";
}
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

document.getElementById("orderSection").style.display="none";
document.getElementById("orderAgain").style.display="block";

}

function orderAgain(){
clearList();
document.getElementById("orderSection").style.display="block";
document.getElementById("orderAgain").style.display="none";
}

function clearList() {
order = [] 
natellaQuantity =0;
caremalQuantity =0;
lemonQuantity =0;
spinachQuantity =0;
eggQuantity =0;
berriesQuantity = 0;
creamQuantity =0;
mmQuantity =0;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
document.getElementById("spaceForJavaScriptFormOutput").innerHTML = "";
OUTPUT.innerHTML = "";
total ()
orderUpdate()
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
if (eggQuantity>0){
OUTPUT.innerHTML += "<p>Ham, Cheese and Egg x"+eggQuantity+" - $"+ eggQuantity * 5+"</p>";
}
if (spinachQuantity>0){
OUTPUT.innerHTML += "<p>Ham, Cheese and Spinach x"+spinachQuantity+" - $"+ spinachQuantity * 5+"</p>";
}
if (lemonQuantity>0){
OUTPUT.innerHTML += "<p>Lemon and Sugar x"+lemonQuantity+" - $"+ lemonQuantity * 5+"</p>";
}
if (caremalQuantity>0){
OUTPUT.innerHTML += "<p>Banana and caramal x"+caremalQuantity+" - $"+ caremalQuantity * 5+"</p>";
}
if (natellaQuantity>0){
OUTPUT.innerHTML += "<p>Banana and Nutella x"+natellaQuantity+" - $"+ natellaQuantity * 5+"</p>";
}
}

function addToList() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
berriesQuantity++;
order.push(3.00);
orderUpdate()
total()
}

function addToListCream() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
creamQuantity++;
order.push(3.00);
orderUpdate()
total()
}

function addToListmm() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
mmQuantity++;
order.push(3.00);
orderUpdate()
total()
}

function addToListCrepe5() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
eggQuantity++;
order.push(5.00);
orderUpdate()
total()
}

function addToListCrepe4() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
spinachQuantity++;
order.push(5.00);
orderUpdate()
total()
}

function addToListCrepe3() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
lemonQuantity++;
order.push(5.00);
orderUpdate()
total()
}

function addToListCrepe2() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
caremalQuantity++;
order.push(5.00);
orderUpdate()
total()
}

function addToListCrepe1() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
natellaQuantity++;
order.push(5.00);
orderUpdate()
console.log(order);
total()
}













