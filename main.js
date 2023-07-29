let pic=document.querySelector("#tx")
let email=document.querySelector("#email")
let cell=document.querySelector("#cell")
let id=document.querySelector("#id")
let gender=document.querySelector("#gender")
fetch('https://randomuser.me/api')
.then(function(resp){
  return resp.json();

}).then(function(data){
  console.log(data);
pic.innerHTML+=data.results[0].name.first
  pic.innerHTML+='<img src=${data.results[0].picture.large} />'
  email.innerHTML+=data.results[0].email
  cell.innerHTML+=data.results[0].cell
  gender.innerHTML+=data.results[0].gender

  
})