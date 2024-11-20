function clickChange(){
    var div=document.getElementById("txtBox")
    div.innerHTML="<h1> Mernstack </h1>"
       

}
function  geth1(){
    var first=document.querySelector('h1');
    var div=document.getElementById("txt")
    div.textContent= first.textContent;

}
var div=document.getElementById('clock');
function showtime(){
var date=new Date()
var h=date.getHours()
var m=date.getMinutes()
var s=date.getSeconds()
div.textContent= h + ":" + m +":" + s ;
}
showtime()
setInterval(showtime,1000)

function replace_txt(){
    var h=document.getElementById("hello")
    h.innerText="Welcome to elevation Academy"
}
function click_hide(){
    var hide=document.getElementById("hide")
    hide.innerText=""
}