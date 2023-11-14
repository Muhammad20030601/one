
let comments = [];

let com = document.querySelector("#commit");
let polya = document.querySelector("#polyacom");
let sub = document.querySelector("#sub");


sub.onclick = function() {
  let dobin = com.value;
  comments.push(dobin);
  polya.innerHTML += `<p>${dobin} <button class="delete">X</button></p>`;
  let delbut = document.querySelectorAll(".delete");
  com.value = "";


  delbut.forEach(function(button) {
    button.onclick = function() {
      let comment = button.parentNode;
      let index = Array.from(polya.children).indexOf(comment);
      comments.splice(index, 1);
      comment.remove();
    };
  });
};

let dob=document.querySelector(".dov")
let com3=document.querySelector("#com")
dob.onclick=function(){
com3.style.display='block'
}

let img=document.querySelector(".texts")
let con=document.querySelector('.contakt')
let cot=document.querySelector(".text4")
let te=document.querySelector(".images")
let su=document.querySelector(".conten")
su.onclick=function(){
    img.style.display="block"
    te.style.display="block"

}
con.onclick=function(){
    cot.style.display='block'
}