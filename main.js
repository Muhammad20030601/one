let a = new Set();
let b=1
a.add("'e' 'r' 'i' 'k' 't' 'h' 'e' 'b' 'e' 's' 't'" )

console.log(a)


let bt=document.querySelector("#bt")
let inp=document.querySelector("#in")
bt.onclick=function(){
  console.log(inp.value)
}


let bt2=document.querySelector("#bt2")
let ot=document.querySelector("#otvet")
bt2.onclick=function(){ 
let i=new Set(["Ne pravilno","Pravilno"])
if(inp.value==7){ 
ot.innerHTML=i.has("Pravilno")
}else{ 
  ot.innerHTML=('false')  
}
}
let pr=document.querySelector("#z3")
pr.onclick=function(){ 
let d=[1,2,3,4,5,6]
for(let key of d){
  document.querySelector("#p3").innerHTML=d
}

}
