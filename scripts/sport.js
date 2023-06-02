let shoesArray = [
  // Nike
  {
    brand: "Nike",
    model: "Air Max 90",
    color: "Black/White",
    price: 129.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9355f630-53c7-4567-89b4-a788c93171ea/air-zoom-gt-jump-basketball-shoes-22QS5F.png"
  },
  {
    brand: "Nike",
    model: "Air Jordan 1",
    color: "Red/Black",
    price: 159.99,
    imageLink: "https://assets.ajio.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a2a6a/-473Wx593H-469034008-black-MODEL.jpg"
  },
  {
    brand: "Nike",
    model: "React Infinity Run",
    color: "Blue/Green",
    price: 139.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png"
  },
  {
    brand: "Nike",
    model: "React Infinity Run",
    color: "Blue/Green",
    price: 139.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a162ca4b-a442-4182-bfa0-4be07063e623/air-max-alpha-trainer-5-training-shoes-x8Jzj6.png"
  },
  {
    brand: "Nike",
    model: "Air Jordan 1",
    color: "Red/Black",
    price: 159.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/87d7e901-4d08-4456-9d62-07e821aff45b/air-max-90-futura-shoes-x9msLm.png"
  },
  {
    brand: "Nike",
    model: "Air Max 90",
    color: "Black/White",
    price: 129.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/69c8c4e4-7895-4c6b-a2b6-bdb9f6828f86/renew-in-season-tr-12-training-shoes-5h0cKQ.png"
  },
  // Puma
  {
    brand: "Puma",
    model: "Suede Classic",
    color: "Black/White",
    price: 69.99,
    imageLink: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/195202/03/sv01/fnd/IND/fmt/png/Erupter-Men's-Running-Shoes"
  },
  {
    brand: "Puma",
    model: "Clyde Court",
    color: "Purple/Yellow",
    price: 119.99,
    imageLink: "https://i8.amplience.net/s/scvl/117239_243484_SET/2?fmt=auto&$webPdpProduct$"
  },
  {
    brand: "Puma",
    model: "RS-X",
    color: "White/Red",
    price: 99.99,
    imageLink: "https://www.tradeinn.com/f/13783/137835778/puma-mirage-tech-%CE%A0%CF%81%CE%BF%CF%80%CE%BF%CE%BD%CE%B7%CF%84%CE%AD%CF%82.jpg"
  },
  {
    brand: "Puma",
    model: "RS-X",
    color: "White/Red",
    price: 99.99,
    imageLink: "https://cdn.shopify.com/s/files/1/0262/1574/3576/products/image_0c188859-ece6-4b72-8c34-5476e18e9e1e_1200x1200.webp?v=1657057795"
  },
  {
    brand: "Puma",
    model: "Suede Classic",
    color: "Black/White",
    price: 69.99,
    imageLink: "https://di2ponv0v5otw.cloudfront.net/posts/2022/12/16/639c7ba74bd760628e96b414/m_639c7bc9acf462d13519456a.jpg"
  },
  // Adidas
  {
    brand: "Adidas",
    model: "Ultraboost",
    color: "Grey/White",
    price: 179.99,
    imageLink: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/SUPERSTAR_SHOES_Black_EG4959_01_standard.jpg"
  },
  {
    brand: "Adidas",
    model: "Stan Smith",
    color: "White/Green",
    price: 79.99,
    imageLink: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4d31131033b54e67b045ab2f017c6cda_9366/Superstar_Shoes_White_FU7714_01_standard.jpg"
  },
  {
    brand: "Adidas",
    model: "NMD R1",
    color: "Black/Red",
    price: 129.99,
    imageLink: "https://assets.adidas.com/images/w_600,f_auto,q_auto/641ca1a4fe0643068371aef900c3a51e_9366/Ultrabounce_Shoes_White_HP5771_01_standard.jpg"
  },
  {
    brand: "Adidas",
    model: "NMD R1",
    color: "Black/Red",
    price: 129.99,
    imageLink: "https://cdn.shopify.com/s/files/1/2031/6995/products/GV8270_6_grande.jpg?v=1646760541"
  },
  {
    brand: "Adidas",
    model: "Stan Smith",
    color: "Black/Red",
    price: 129.99,
    imageLink: "https://static.footshop.com/668716-full_product/193171.jpg"
  },
  // Reebok
  {
    brand: "Reebok",
    model: "Classic Leather",
    color: "White",
    price: 79.99,
    imageLink: "https://imagescdn.reebok.in/img/app/product/7/768941-8841748.jpg?auto=format&w=309"
  },
  {
    brand: "Reebok",
    model: "Nano X",
    color: "Black/Blue",
    price: 119.99,
    imageLink: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008877586_437Wx649H_202102220200111.jpeg"
  },
  {
    brand: "Reebok",
    model: "Club C 85",
    color: "White/Gum",
    price: 89.99,
    imageLink: "https://imagescdn.reebok.in/img/app/product/8/815017-9729277.jpg?auto=format"
  },
  {
    brand: "Reebok",
    model: "Nano X",
    color: "Black/Blue",
    price: 119.99,
    imageLink: "https://cdn.shopclues.com/images1/thumbnails/110886/320/320/151053581-110886706-1602144488.jpg"
  },
  // New Balance
  { 
    brand: "New Balance",
    model: "574",
    color: "Grey/White",
    price: 89.99,
    imageLink: "https://www.nbshoes-india.com/images/newbalance-india/Indigo_Grey_Men_s_New_Balance_327_Sneake-India-069154.jpg"
  },
  {
  brand: "New Balance",
  model: "990v5",
  color: "Navy/Grey",
  price: 174.99,
  imageLink: "https://cdn.shopify.com/s/files/1/0816/4881/products/fc42c099c13e31ab0bbf34f58f5f3148_2048x2048_4a7226ed-6dba-4a0f-ae07-8e3a3374f882_1024x1024.webp?v=1676327347"
},
{
  brand: "New Balance",
  model: "Fresh Foam 1080v11",
  color: "Black/White",
  price: 149.99,
  imageLink: "https://thefoschini.vtexassets.com/arquivos/ids/54063234-800-800?v=638190020211600000&width=800&height=800&aspect=true"
},
{
  brand: "New Balance",
  model: "FuelCell Echo",
  color: "Blue/Red",
  price: 119.99,
  imageLink: "https://thefoschini.vtexassets.com/arquivos/ids/55034543-800-800?v=638195099578930000&width=800&height=800&aspect=true"
},
{
  brand: "New Balance",
  model: "997H",
  color: "Grey/Green",
  price: 109.99,
  imageLink: "https://www.nbshoes-india.com/images/newbalance-india/Dark_Red_Men_s_New_Balance_574_Legacy_Sn-India-158367.jpg"
}
]

  let cont = document.querySelector(".container")
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let showTotalProduct = document.querySelector(".show");

  let display = (data)=>{
    cont.innerHTML = null;
    for(let i=0; i<data.length; i++){
      let card = document.createElement("div")
      let img = document.createElement("img")
      img.setAttribute("src",data[i].imageLink) 
      let des = document.createElement("p")
      des.innerText = data[i].brand + data[i].model
      let price = document.createElement("p")
      price.innerText = data[i].price
      card.append(img,des,price)
      cont.append(card)
    }

  }
console.log("hello")
  
display(shoesArray)