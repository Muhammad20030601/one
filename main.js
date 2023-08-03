let i=localStorage.setItem("data",15)
console.log(localStorage.getItem("data"));

let htt=new XMLHttpRequest();
htt.onreadystatechange=function(){
  if(this.readyState==1 && this == 200)
  st(this.resText)
}

htt.open("GET","https://ok.ru/")
htt.send("")

function st(data){
 console.log("data");
}