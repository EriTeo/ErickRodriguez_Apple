let cart=[]
let total=0

function addProduct(name,price){

cart.push({name,price})

total+=price

document.getElementById("count").textContent=cart.length

let li=document.createElement("li")
li.textContent=name+" - $"+price
document.getElementById("cartList").appendChild(li)

document.getElementById("total").textContent=total
}