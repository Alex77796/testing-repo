// //type: null, undefined, boolean, string, number, symbol, object

// //Приведення типів
// // false: false, NaN, undefined, 0, null, ""

menu.onclick = function myFunction(){
    let x = document.getElementById("myTopnav");
  
    if(x.className === "topnav"){
      x.className += " responsive";
    }else{
      x.className = "topnav";
    }
  }
  