let showcart = document.querySelector(".showcart")




// if(cart.length < 1 ){
//   showcart.textContent = "0"
// }else{
//   for(let i=0;i<cart.length;i++){
//     showcart.textContent = i+1
//   }
// }
let cart = localStorage.getItem("cart")

if(!cart){
 cart =[]
}else{
  cart = JSON.parse(cart)
}


let product = JSON.parse(localStorage.getItem("product")) || [] ;

let cont = document.querySelector(".container")
let showTotalProduct = document.querySelector(".show");

// console.log(product.brand)

let image = document.querySelector(".left >img");

image.setAttribute("src",product.imageLink)

let product_head = document.querySelector(".product-head")

product_head.textContent = `${product.brand} ${product.model}`.toUpperCase()

let product_name = document.querySelector(".product-name")

product_name.textContent = `${product.brand} ${product.model}`

let product_price = document.querySelector(".product-price")

product_price.textContent = product.price

let btn = document.querySelector(".add-cart")

// btn.addEventListener("click",()=>{
//   // cart.push(product)
//   console.log(cart)
// })
console.log(Array.isArray(cart))




//-------- search function -----

const searching = ()=>{
let search = document.getElementById("search").value.toUpperCase();
let cont = document.querySelector(".container")
let card = cont.getElementsByTagName("div")

for(let i=0; i<card.length; i++){
  let des = card[i].getElementsByTagName("p")[0];

  if(des){
    let textvalue = des.textContent || des.innerHTML

    if(textvalue.toUpperCase().indexOf(search) > -1){
      card[i].style.display = "";
    }else{
      card[i].style.display = "none";
    }
  }
}
}




