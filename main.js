// // //type: null, undefined, boolean, string, number, symbol, object

// // //Приведення типів
// // // false: false, NaN, undefined, 0, null, ""

// class Sunsign {
//   constructor(name, callback) {
//     this.sunName = name;
//     this.callBack = callback;
//   }
//   getData() {
//     this.callBack(this.sunName);
//   }
// }

// hideSign();
// function getHoroscope(target) {
//   let url =
//     "http://sandipbgt.com/theastrologer/api/horoscope/" + target + "/today/";

//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       let info = [];
//       let element = {};
//       let myResponse = JSON.parse(this.responseText);
//       console.dir(myResponse);
//       let sunName = document.getElementById("sName");
//       sunName.innerText = myResponse.sunsign;
//       element.sunSignName = myResponse.sunsign;
//       let Horoscope = document.getElementById("descript");
//       Horoscope.innerText = myResponse.horoscope;
//       element.horoscope = myResponse.horoscope;
//       info.push(element);
//       let infoData = JSON.stringify(info);
//       let storageData = localStorage.getItem("sunsign");
//       if (storageData) {
//         let strdata = JSON.parse(storageData);
//         strdata.push(element);
//         let data = JSON.stringify(strdata);
//         localStorage.setItem("sunsign", data);
//       } else {
//         localStorage.setItem("sunsign", infoData);
//       }
//       showSign();
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }
// function clickedSign(sign) {
//   let sunsign = new Sunsign(sign, getHoroscope);
//   sunsign.getData();
// }

// function showSign() {
//   let elem = document.getElementById("signDescription");
//   elem.style.display = "block";
//   let elem2 = document.getElementById("signWrap");
//   elem2.style.display = "none";
// }

// function hideSign() {
//   let elem = document.getElementById("signDescription");
//   elem.style.display = "none";
//   let elem2 = document.getElementById("signWrap");
//   elem2.style.display = "block";
// }

// // localStorage.setItem("weather", "The weather is very good!");
// // let b = localStorage.getItem("user");
// // console.dir(b);

// class Sunsign {
//   constructor (name, callBack){
//     this.sunName = name;
//     this.callback = callBack;
//   }
//   getData(){
//     this.callback(this.sunName);
//   }
// }

// function getHoroscope(target){
//   let url = "http://sandipbgt.com/theastrologer/api/horoscope/" + target + "/today/";

//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//       let info = [];
//       let element = {};
//       let myResponse = JSON.parse(this.responseText);
// console.dir(myResponse);
// let sunName = document.getElementById("sName");
// sunName.innerText = myResponse.sunsign;
// element.sunSignName = myResponse.sunsign;
// let Horoscope = document.getElementById("descript");
// Horoscope.innerText = myResponse.horoscope;
// element.horoscope = myResponse.horoscope;
// info.push(element);
//     }
//   }
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }

// function clickedSign(){
//   let sunsign = new Sunsign(sign, getHoroscope);
//   sunsign.getData();
// }

// window.onload = function (){
//   if(localStorage.getItem("bgcolor") !== null){
//     var color = localStorage.getItem("bgcolor");
//     document.getElementsByTagName("body")[0].style.background = color;
//   }
//   document.getElementById("red").onclick = function(){
//     document.getElementsByTagName("body")[0].style.background = "red";
//     localStorage.setItem("bgcolor", "red");
//   }
//   document.getElementById("green").onclick = function(){
//     document.getElementsByTagName("body")[0].style.background = "green";
//     localStorage.setItem("bgcolor", "green");
//   }
// }
// let fullName = document.getElementById("fullname");
// let email = document.getElementById("email");
// let password = document.getElementById("passord");
// let confirmpass = document.getElementById("confirmpass");

// let fullName = document.getElementById("fullname").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let confirmpass = document.getElementById("confirmpass").value;

//   localStorage.setItem("name", fullName.value);
// localStorage.setItem("email", email.value);
// localStorage.setItem("pw", password.value);
// localStorage.setItem("confirmpass", confirmpass.value);

// function register() {
//   let allUsers = [];
//   let user = {};

//   if (
//     password === confirmpass &&
//     fullName !== "" &&
//     email !== "" &&
//     password !== "" &&
//     confirmpass !== ""
//   ) {
//     user.name = fullName;
//     user.email = email;
//     user.password = password;
//     allUsers.push(user);
//     console.log(allUsers);
//     localStorage.setItem("allusers");
//     location.href = "https://www.instagram.com/_p.a.l.a.s_/";
//     ////
//   } else {
//     let err = document.getElementById("error");
//     err.style.display = "block";
//   }
// }

// function go() {
//   location.href = "http://127.0.0.1:5500/registr/indextwo.html";
// }
/////////////////////////////////////////////////////////////
function check() {
  let storedName = localStorage.getItem("fullname");
  let storedPw = localStorage.getItem("password");

  let userName = document.getElementById("name");
  let userPw = document.getElementById("pw");

  if (userName.value !== storedName || userPw.value !== storedPw) {
    alert("ERROR");
  } else {
    alert("You are loged in.");
  }
}
let name = document.getElementById("name");
let email = document.getElementById("email");
let pw = document.getElementById("pw");
let confirmpass = document.getElementById("confirmpass");

function store() {
  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("pw", pw.value);
  localStorage.setItem("confirmpass", confirmpass.value);
}

function check() {
  let storedName = localStorage.getItem("name");
  let storedEmail = localStorage.getItem("email");
  let storedPw = localStorage.getItem("pw");
  let storedConfirmpass = localStorage.getItem("confirmpass");

  let userName = document.getElementById("userName");
  let userPw = document.getElementById("userPw");

  if (userName.value === storedName && userPw.value === storedPw) {
    window.location.href = "https://www.w3schools.com";
  } else {
    alert("ERROR");
  }
}
