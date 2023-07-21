// Напишите функцию именную, которая при нажатии кнопки выводит в блок див на странице значения из переменной A.

// Напишите простой калькулятор из 4 выражений + - * / для этого сделайте 4 кнопки и поле ввода, затем при
//  вводе каждого числа и после при 
// нажатии на кнопку должна выполнится одна из функций, в зависимости от того какую кнопку мы нажали


let e=document.querySelector("#in")
let button=document.querySelector("#s")
let di=document.querySelector("#tex")
button.onclick=function(){
  di.innerHTML=e.value
}


let n1=document.querySelector("#n1")
let n2=document.querySelector("#n2")
let div=document.querySelector("#text")
let a=document.querySelector("#p")
let b=document.querySelector("#m")
let c=document.querySelector("#u")
let d=document.querySelector("#d")
a.onclick=function(){
 div.value=Number(n1.value)+Number(n2.value)
 div.innerHTML=div.value
    
}

b.onclick=function(){
    div.value=Number(n1.value)-Number(n2.value)
    div.innerHTML=div.value
       
   }

   c.onclick=function(){
    div.value=Number(n1.value)*Number(n2.value)
    div.innerHTML=div.value
       
   }

   d.onclick=function(){
    div.value=Number(n1.value)/Number(n2.value)
    div.innerHTML=div.value
       
   }

