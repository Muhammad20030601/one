let inp=document.querySelector('.inp')
let but=document.querySelector('.send')
let div=document.querySelector('div')
but.onclick=function(){
 let com1 = inp.value;
 div.innerHTML=com1
};

/*let happy=prompt('Как тебя зовут?');
if(happy=="Muhammad"){
  alert("Привет "+happy)
}
else{
    alert('NotFound')
}*/

let num=prompt('Что больше 100 или 50')
if(num==100){ 
alert("Molodes")
console.log(num);
}
else{
    alert("Как так можеть быт подумай ещё!!!!!")
}