// const myHeading=document.querySelector('h1');
// myHeading.textContent="Hello World!";

// let myVariable="Chocolate"
// if (myVariable==="Chocolate"){
//   alert("Yay,i love chocolate ice-cream");
// }else{
//   alert("Aww, but chocolate is my favorite....")
// }

// let myVariable= document.querySelector('h1');
// alert("Hello World!");

// This is function's example

// function multiply(num1,num2){
//   let result = num1 * num2;
//   return result;
// }

// Adding event by dom manipulation
// document.querySelector('html').addEventListener('click',function(){
//   alert("Hey! Stop Clicking too many tims unnecsesry!");
// });

// Adding the event making variable
// let myHTML= document.querySelector('html');
// myHTML.addEventListener('click',function(){
//   alert("Hey!, I am pavan yadav and nice to meet you!")
// });

// Adding the event without using the function and using the arrow function.

// document.querySelector('html').addEventListener('click',() => {
//   alert("Hey! Stop Clicking too many tims unnecsesry!");
// });

//  By adding event in img to change the image when user clicks on img.
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "/Images/firefox.jpeg") {
    myImage.setAttribute("src", "firefox.jpeg");
  } else {
    myImage.setAttribute("src", "firefox.jpeg");
  }
};

// Adding an event that show your name dynamicly on the webpage
// First select the object
let myButton = document.querySelector("button");
// Adding an event when user clicks on button
myButton.onclick = () => {
  setUserName();
};
// Selecting the heading object
let myHeading = document.querySelector("h1");
// Receving value from user
function setUserName() {
  const myName = prompt("Enter the name");
  localStorage.setItem("name", myName);
  myHeading.textContent =
    "Mozilla is user freindly and versetile to use, ${myName} ";
}
//  So in this code webpage verify wheter the name is stored or not if not then go to setusername() function else go to localstorage and retrive the name and then change the heading by adding the name
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent =
    "Mozilla is user freindly and versetile to use,${storedName}";
}
// sometimes when you don't use value or leave it blank then server takes it as null to avoid this firstly it will  check wether user enterd the value or not if not then it will go to setusername function else if name is set then in localstorage the name will be stored and it will show it's changes in  heading too by clicking on button tag.
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is user freindly and versetile to use, ${myName}`;
  }
}
