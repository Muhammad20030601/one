// Создать кнопку button 1, которая будет запускать функцию, при которой элементу div с классом element будет задаваться 
// ширина и высота (размеры произвольные)
// Добавить 3 дополнительных класса и написать функцию при нажатии на кнопку эти 3 класса будут присваиваться к 1 
// элементу (элемент произвольный)
// Написать функцию, которая при клике по кнопке будет удалять любой из 3 классов, что были присвоены во 2 задаче

let bt=document.querySelector("#cl")
let res=document.querySelector("div")
bt.onclick=function(){
  res.classList.toggle("emmet")

}

let bt1=document.querySelector("#cl2")
let p=document.querySelector("p")
bt1.onclick=function(){
  p.classList="color size back"
}

let bdel=document.querySelector("#del")
bdel.onclick=function(){
  p.classList.remove("color")
}