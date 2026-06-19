console.log("Hello world!")
console.log("Running script.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/***Variables***/
let userName;
let money;
let order = []
/***Main***/

/***Functions***/
function orderStation {
const AGE_FIELD = document.getElementById("ageField");
age = Number(AGE_FIELD.value);
OUTPUT.innerHTML = "<p>You are "+age+" years old</p>";
}


