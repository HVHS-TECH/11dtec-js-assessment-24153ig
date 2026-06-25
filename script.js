console.log("Hello world!")
console.log("Running script.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField")

/***Variables***/
let userName = String (NAME_FIELD.value);
let age;
let order = []
/***Main***/

function Order() {

}

/***Functions***/
function getFormInput() {
const AGE_FIELD = document.getElementById("nameField");
userName = Number(NAME_FIELD.value);
OUTPUT.innerHTML = "<p>Hi"+userName+"</p>";
const AGE_FIELD = document.getElementById("ageField");
age = Number(AGE_FIELD.value);
OUTPUT.innerHTML = "<p>You are "+age+" years old</p>";
}


