document.querySelector('#prime')
document.querySelectorAll('div')
document.getElementById('#prime')
document.getElementsByClassName('jumeaux')
document.getElementsByTagName('div')

// var name = function () {}
// const name = () => {}

let Prime = document.querySelector('#prime');
const changeColor = () => {
  if ( Prime.style.backgroundColor == "red") {
    Prime.style.backgroundColor = "blue";
  }
  else {
    Prime.style.backgroundColor = "red";

  }
}
document.querySelector("#prime").addEventListener("click", changeColor);
let Jumeaux = document.querySelectorAll(".jumeaux")
const test = (e) => {
  if ( e.target.style.backgroundColor == "blue") {
     e.target.style.backgroundColor = "yellow";
   }
   else {
     e.target.style.backgroundColor = "blue";

   }
}

for(i=0; i < document.querySelectorAll('.jumeaux').length;i++) {
  document.querySelectorAll('.jumeaux')[`${i}`].addEventListener("click",test)
}

let Third = document.querySelector('.third')
const changeColor2 = () => {
     if ( Third.style.backgroundColor == "pink") {
      Third.style.backgroundColor = "blue";
    }
    else {
      Third.style.backgroundColor = "pink";

    }
  }
  document.querySelector(".third").addEventListener("click", changeColor2);

//  autre façon d'écrire
//document.querySelector("#prime").["style"].backgroundColor == "red"
