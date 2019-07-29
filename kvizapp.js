//DOM varibales 

//HISTORY QUESTION 1

var firstButton = document.getElementById("prvo");
var secondButton = document.getElementById("drugo");
var thirdButton = document.getElementById("trece");
var fourthButton = document.getElementById("cetvrto");


//GEOGRAPHY QUESTION 1 

var num1Button = document.getElementById("num1");
var num2Button = document.getElementById("num2");
var num3Button = document.getElementById("num3");
var num4Button = document.getElementById("num4");

//CULTURE QUESTION 1
var numero1Button = document.getElementById("numero1");
var numero2Button = document.getElementById("numero2");
var numero3Button = document.getElementById("numero3");
var numero4Button = document.getElementById("numero4");

//OSTALO QUESTION 1

var number1Button = document.getElementById("number1");
var number2Button = document.getElementById("number2");
var number3Button = document.getElementById("number3");
var number4Button = document.getElementById("number4");



//Function Disable 

function disablebutton() {
firstButton.disabled = true;
secondButton.disabled = true; 
thirdButton.disabled = true; 
fourthButton.disabled = true;
num1Button.disabled = true;
num2Button.disabled = true; 
num3Button.disabled = true;
num4Button.disabled = true;
numero1Button.disabled = true;
numero2Button.disabled = true;
numero3Button.disabled = true;
numero4Button.disabled = true;
number1Button.disabled = true;
number2Button.disabled = true;
number3Button.disabled = true;
number4Button.disabled = true;

}

//Function Refresh

function refreshPage(){
    window.location.reload();
} 

//BUTTON FUNCTION HISTORY 1  

firstButton.onclick = function () {
this.style.backgroundColor = "red";
this.innerHTML = "Wrong!";
disablebutton();
};

secondButton.onclick = function () {
this.style.backgroundColor = "red";
this.innerHTML = "Wrong!";
disablebutton();

};

thirdButton.onclick = function () {
this.style.backgroundColor = "green";
this.innerHTML = "Correct!";
disablebutton();
};

fourthButton.onclick = function () {
this.style.backgroundColor = "red";
this.innerHTML = "Wrong!";
disablebutton();
};



//BUTTON FUNCTION GEOGRAPHY 1

num1Button.onclick = function() {

    this.style.backgroundColor = "red";
    this.innerHTML = "Wrong!"; 
    disablebutton();

};

num2Button.onclick = function() {

    this.style.backgroundColor = "red";
    this.innerHTML = "Wrong!"; 
    disablebutton();

};

num3Button.onclick = function() {

    this.style.backgroundColor = "green";
    this.innerHTML = "Correct!"; 
    disablebutton();

};

num4Button.onclick = function() {

    this.style.backgroundColor = "red";
    this.innerHTML = "Wrong!"; 
    disablebutton();

};

//BUTTON FUNCTION CULTURE 1

numero1Button.onclick = function() {

    this.style.backgroundColor = "green";
    this.innerHTML = "Correct!"; 
    disablebutton();

};
numero2Button.onclick = function() {

    this.style.backgroundColor = "red";
    this.innerHTML = "Wrong!"; 
    disablebutton();

};
numero3Button.onclick = function() {

    this.style.backgroundColor = "red";
    this.innerHTML = "Wrong!"; 
    disablebutton();

};
numero4Button.onclick = function() {

    this.style.backgroundColor = "red";
    this.innerHTML = "Wrong!"; 
    disablebutton();

};

//BUTTON FUNCTION OSTALO 1

number1Button.onclick = function() {

    this.style.backgroundColor = "red";
    this.innerHTML = "Wrong!"; 
    disablebutton();

};

number2Button.onclick = function() {

    this.style.backgroundColor = "red";
    this.innerHTML = "Wrong!"; 
    disablebutton();

};

number3Button.onclick = function() {

    this.style.backgroundColor = "red";
    this.innerHTML = "Wrong!"; 
    disablebutton();

};

number4Button.onclick = function() {

    this.style.backgroundColor = "green";
    this.innerHTML = "Correct!"; 
    disablebutton();

};
