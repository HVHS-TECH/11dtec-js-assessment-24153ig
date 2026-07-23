console.log("Hello world!")
console.log("Running script.js")

/***Consts that stay the same***/
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const OUTPUT = document.getElementById("costomerName");

/***My Variables***/
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

/***Functions***/

/***Funtion that works out the total cost of the users order***/
function total() {
const OUTPUT = document.getElementById("total");
let total1 = 0;
for (let i = 0; i<order.length; i++){
total1 +=order[i];
}
OUTPUT.innerHTML = "<p>Total: $"+total1+" </p>";
}
total()

/***This is the function that gets the input the user submitted (Their name and amount of money they have) and displays it on the recepit***/
function getFormInput() {

const OUTPUT = document.getElementById("spaceForJavaScriptFormOutput");
//Setting the variables
userName = (NAME_FIELD.value);
const MONEY_FIELD = document.getElementById("moneyField");
pocketMoney = Number (MONEY_FIELD.value);

let total = 0;
for (let i = 0; i<order.length; i++){
total +=order[i];}

if (pocketMoney<total){
let notEnough = total-pocketMoney
OUTPUT.innerHTML += "<p>You do not have enough money, you need $" + notEnough +" more</p>";
return;
}

//Receipt
OUTPUT.innerHTML = "<h2>Receipt</h2><p>Hi "+userName+"<br><br/>Cash Given: $"+pocketMoney+"</p><p>Your Items:</p>";

//Displays what the user ordered on the receipt
if (berriesQuantity>0){
OUTPUT.innerHTML += "<p>Berries x"+berriesQuantity+" </p>";
}
if (creamQuantity>0){
OUTPUT.innerHTML += "<p>Cream x"+creamQuantity+" </p>";
}
if (mmQuantity>0){
OUTPUT.innerHTML += "<p>M&Ms x"+mmQuantity+" </p>";
}
if (eggQuantity>0){
OUTPUT.innerHTML += "<p>Ham, Cheese and Egg x"+eggQuantity+"</p>";
}
if (spinachQuantity>0){
OUTPUT.innerHTML += "<p>Ham, Cheese and Spinach x"+spinachQuantity+"</p>";
}
if (lemonQuantity>0){
OUTPUT.innerHTML += "<p>Lemon and Sugar x"+lemonQuantity+" </p>";
}
if (caremalQuantity>0){
OUTPUT.innerHTML += "<p>Banana and caramal x"+caremalQuantity+"</p>";
}
if (natellaQuantity>0){
OUTPUT.innerHTML += "<p>Banana and Nutella x"+natellaQuantity+" </p>";
}

//shows the order total cost in the receipt
function totalCosts() {
let total = 0;
for (let i = 0; i<order.length; i++){
total +=order[i];
}


console.log("Total:" + total )
OUTPUT.innerHTML += "<p>Total: $"+total+" </p>";
//Shows the user how much change they get
if (pocketMoney>=total){
Answer = pocketMoney-total  
OUTPUT.innerHTML += "<p>Change: $" + Answer +" </p>";
}
//tells the user they do not have enough money for their order if they do not and tells them how much more they need
else{
let notEnough = total-pocketMoney
OUTPUT.innerHTML += "<p>You do not have enough money, you need $" + notEnough +" more</p>";

}

}
totalCosts()

//makes the order section disapper when the user clicks on submit
document.getElementById("orderSection").style.display="none";
//makes the order again button appear
document.getElementById("orderAgain").style.display="block";

}

//when the order again button is pressed it will revert back to the order station
function orderAgain(){
//calls for clear list
clearList();
//makes the order station reappear
document.getElementById("orderSection").style.display="block";
//makes the order again bottion disappear
document.getElementById("orderAgain").style.display="none";
}

/***The function that makes the quantity of each item the user has ordered revert back to 0 and emptys the order array***/
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
//calls for the total and order update function
total ()
orderUpdate()
}

/***This function updates the order everytime a new item is added***/
function orderUpdate(){
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "";
//This is what will be displayed when they add to order
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

/***Berries Add to order button Function***/
function addToList() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//adds on to the quantity and order array
berriesQuantity++;
order.push(3.00);
//calls for the order update and total function
orderUpdate()
total()
}

/***Cream Add to order button Function***/
function addToListCream() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//adds on to the quantity and order array
creamQuantity++;
order.push(3.00);
//calls for the order update and total function
orderUpdate()
total()
}

/***M&Ms Add to order button Function***/
function addToListmm() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//adds on to the quantity and order array
mmQuantity++;
order.push(3.00);
//calls for the order update and total function
orderUpdate()
total()
}

/***Ham, cheese and egg add to order button Function***/
function addToListCrepe5() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//adds on to the quantity and order array
eggQuantity++;
order.push(5.00);
//calls for the order update and total function
orderUpdate()
total()
}

/***Ham, cheese and spinach add to order button Function***/
function addToListCrepe4() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//adds on to the quantity and order array
spinachQuantity++;
order.push(5.00);
//calls for the order update and total function
orderUpdate()
total()
}

/***Lemon and sugar add to order button Function***/
function addToListCrepe3() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//adds on to the quantity and order array
lemonQuantity++;
order.push(5.00);
//calls for the order update and total function
orderUpdate()
total()
}

/***Banana and caremal add to order button Function***/
function addToListCrepe2() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//adds on to the quantity and order array
caremalQuantity++;
order.push(5.00);
//calls for the order update and total function
orderUpdate()
total()
}

/***Natella and banana add to order button Function***/
function addToListCrepe1() {
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
//adds on to the quantity and order array
natellaQuantity++;
order.push(5.00);
//calls for the order update and total function
orderUpdate()
console.log(order);
total()
}













