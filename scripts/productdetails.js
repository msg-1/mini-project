let product = JSON.parse(localStorage.getItem("product")) || [] ;

let cont = document.querySelector(".container")
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let showTotalProduct = document.querySelector(".show");


function display(data){
  cont.innerHTML = null;
  for(let i=0; i<data.length; i++){
    let card = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("src",data[i].imageLink) 
    let des = document.createElement("p")
    des.innerText = `${data[i].brand}  ${data[i].model}`
    let price = document.createElement("h4")
    price.innerText = data[i].price
    card.append(img,des,price)
    cont.append(card)
    showTotalProduct.textContent = i+1

    des.addEventListener("click",()=>{
      product.push(data[i])
      localStorage.setItem("product",JSON.stringify(product))
    })
  }

}

display(product)

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
