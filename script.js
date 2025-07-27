function getcart(){
    return JSON.parse(localStorage.getItem)
}

function setcart(cart){
    localStorage.setItem("cart", JSON.stringify(cart))
}