console.log("Hello world!")
console.log("Running script.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/***Variables***/
let userName = String (NAME_FIELD.value);
let age;
let order = []
/***Main***/

/***Functions***/
function getFormInput() {
const NAME_FIELD = document.getElementById("nameField");
userName = Number(NAME_FIELD.value);
OUTPUT.innerHTML = "<p>Hi"+userName+"</p>";
const AGE_FIELD = document.getElementById("ageField");
age = Number(AGE_FIELD.value);
OUTPUT.innerHTML = "<p>You are "+age+" years old</p>";
}

function Order() {
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

OUTPUT.innerHTML += "<p>Hi " + userName + "</p>";
OUTPUT.innerHTML += "<p>As of " + year + " you are "+ age + " years old</p>";
console.log("Hi "+ userName)
console.log("As of "+ year + " you are "+ age + " years old")


}
