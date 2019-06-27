//DOM varibales 

//HISTORY QUESTION 1

var firstButton = document.getElementById("prvo");
var secondButton = document.getElementById("drugo");
var thirdButton = document.getElementById("trece");
var fourthButton = document.getElementById("cetvrto");

//HISTROY QUESTION 2 

var fButton = document.getElementById("first");
var sButton = document.getElementById("second");
var tButton = document.getElementById("third");
var foButton = document.getElementById("fourth");


//Function Disable 

function disablebutton() {
firstButton.disabled = true;
secondButton.disabled = true; 
thirdButton.disabled = true; 
fourthButton.disabled = true;
fButton.disabled = true;
sButton.disabled = true; 
tButton.disabled = true; 
foButton.disabled = true;

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

//BUTTON FUNCTION HISTORY 2

fButton.onclick = function () {
this.style.backgroundColor = "red";
this.innerHTML = "Wrong!";
disablebutton();
};
    
sButton.onclick = function () {
this.style.backgroundColor = "red";
this.innerHTML = "Wrong!";
disablebutton();
    
};
    
tButton.onclick = function () {
this.style.backgroundColor = "red";
this.innerHTML = "Wrong!";
disablebutton();
};
    
foButton.onclick = function () {
this.style.backgroundColor = "green";
this.innerHTML = "Correct!";
disablebutton();
};

