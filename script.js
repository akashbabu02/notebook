//selecting popupbox,popupoverlay,button
var popuplay=document.querySelector(".popuplay")
var popbox=document.querySelector(".popbox")
var addpop=document.getElementById("add-pop")
addpop.addEventListener("click",function(){

    popuplay.style.display="block"
    popbox.style.display="block"

})
var cancelbook=document.getElementById("cancel book")
cancelbook.addEventListener("click",function(event){
    event.preventDefault()
    popuplay.style.display="none"
    popbox.style.display="none"
})
// select container,addbook,title,author,description
var container=document.querySelector(".content")
var addbook=document.getElementById("add book")
var booktitle=document.querySelector(".book-titile-input")
var bookauthor=document.querySelector(".book-Author-input")
var des=document.getElementById("book-des")

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${des.value} </p>
    <button onclick="deletebook()">  Delete</button>`
    container.append(div)
})
function deletebook(){
    event.target.parentElement.remove()
}
