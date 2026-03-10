let cart=[]
let total=0

function showPage(page){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))
document.getElementById(page).classList.add("active")
window.scrollTo(0,0)
}

function toggleCart(){
document.getElementById("cartSidebar").classList.toggle("open")
}

function openProduct(name,price){
showPage("product")
document.getElementById("productTitle").innerText=name
document.getElementById("productPrice").innerText="$"+price
document.getElementById("detailCartBtn").onclick=function(e){
addToCart(e,name,price)
}
}

function addToCart(e,name,price){
if(e)e.stopPropagation()
cart.push({name,price})
total+=price
document.getElementById("cartCount").innerText=cart.length
renderCart()
}

function renderCart(){
let list=document.getElementById("cartItems")
list.innerHTML=""
cart.forEach(p=>{
let li=document.createElement("li")
li.innerText=p.name+" - $"+p.price
list.appendChild(li)
})
document.getElementById("cartTotal").innerText="$"+total
}