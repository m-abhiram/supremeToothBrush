localStorage.setItem("cartItems","[]");
localStorage.setItem("total",0.00);

let buyNow = document.querySelector(".buyNow")
buyNow.addEventListener("click",()=>{
  setTimeout(()=>{
    buyNow.innerHTML = "Success!!";
    document.querySelector(".successDiv").style.display="block";
  },2000);
});

let closeSuccess = document.getElementById("closeSuccess");
closeSuccess.addEventListener("click",()=>{
  document.querySelector(".successDiv").style.display="none";
  console.log("close click")
});

let closeCart = document.getElementById("closeCart");
closeCart.addEventListener("click",()=>{
  document.querySelector(".showCart").style.display="none";
  console.log("close click");
  document.querySelector(".itemList").innerHTML="";
});


let addToCart = document.querySelector(".addToCart")
addToCart.addEventListener("click",()=>{
  document.querySelector(".showCart").style.display="block";
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  obj = {name : "Supreme Tooth Brush",price : 299.99};
  cartItems.push(obj);
  localStorage.setItem("cartItems",JSON.stringify(cartItems));
  updateCart();
  document.querySelector(".total").innerHTML = "<h1>Total amount is : <h1>" + localStorage.getItem("total")
});



function updateCart(){
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let total = 0;
  for (let i in cartItems){
    console.log("pp")
    const cart=document.querySelector(".itemList")
    const template = document.getElementById("cart-template");
    const content= template.content.cloneNode(true);
    cart.prepend(content);
    document.getElementById("itemNameTemplate").innerHTML = "Item : " + cartItems[i].name;
    document.getElementById("itemPriceTemplate").innerHTML = "Price : " + cartItems[i].price;
    total = total + parseFloat(cartItems[i].price);
  }
  localStorage.setItem("total",total);
}

