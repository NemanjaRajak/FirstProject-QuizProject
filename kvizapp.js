//DOM varibales 

var firstButton = document.getElementById("prvo");
var secondButton = document.getElementById("drugo");
var thirdButton = document.getElementById("trece");
var fourthButton = document.getElementById("cetvrto");


//Functions

function disablebutton() {
firstButton.disabled = true;
secondButton.disabled = true; 
thirdButton.disabled = true; 
fourthButton.disabled = true;

}

function refreshPage(){
    window.location.reload();
} 

//BUTTON FUNCTION 

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
this.innerHTML = "Correct";
disablebutton();
};

fourthButton.onclick = function () {
this.style.backgroundColor = "red";
this.innerHTML = "Wrong!";
disablebutton();
};



