let bt=document.querySelector("#go")
let nam=document.querySelector("#name")
let sur=document.querySelector("#surname")
let ot=document.querySelector("#otvet")
let pass=document.querySelector("#pass")

bt.onclick=function() {
if(nam.value=="" || sur.value==""){ 
ot.innerHTML="Введите имя и фамилю"

}

else if(pass.value==""){
    ot.innerHTML="Введите пароль"
}
else{
    alert("Привет  "+nam.value + " ваш пароль  "+"*****")
    window.location="js/g.html"
}
}

