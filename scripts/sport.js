let shoesArray = [
  // Nike
  {
    id : 1,
    brand: "NIKE",
    model: "Air Max 90",
    color: "Black/White",
    price: 129.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9355f630-53c7-4567-89b4-a788c93171ea/air-zoom-gt-jump-basketball-shoes-22QS5F.png"
  },
  {
    id : 2,
    brand: "NIKE",
    model: "Air Jordan 1",
    color: "Red/Black",
    price: 159.99,
    imageLink: "https://assets.ajio.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a2a6a/-473Wx593H-469034008-black-MODEL.jpg"
  },
  {
    id : 3,
    brand: "NIKE",
    model: "React Infinity Run",
    color: "Blue/Green",
    price: 139.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png"
  },
  {
    id : 4,
    brand: "NIKE",
    model: "React Infinity Run",
    color: "Blue/Green",
    price: 139.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a162ca4b-a442-4182-bfa0-4be07063e623/air-max-alpha-trainer-5-training-shoes-x8Jzj6.png"
  },
  {
    id : 5,
    brand: "NIKE",
    model: "Air Jordan 1",
    color: "Red/Black",
    price: 159.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/87d7e901-4d08-4456-9d62-07e821aff45b/air-max-90-futura-shoes-x9msLm.png"
  },
  {
    id : 6,
    brand: "NIKE",
    model: "Air Max 90",
    color: "Black/White",
    price: 129.99,
    imageLink: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/69c8c4e4-7895-4c6b-a2b6-bdb9f6828f86/renew-in-season-tr-12-training-shoes-5h0cKQ.png"
  },
  // Puma
  {
    id : 7,
    brand: "PUMA",
    model: "Suede Classic",
    color: "Black/White",
    price: 69.99,
    imageLink: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/195202/03/sv01/fnd/IND/fmt/png/Erupter-Men's-Running-Shoes"
  },
  {
    id : 8,
    brand: "PUMA",
    model: "Clyde Court",
    color: "Purple/Yellow",
    price: 119.99,
    imageLink: "https://i8.amplience.net/s/scvl/117239_243484_SET/2?fmt=auto&$webPdpProduct$"
  },
  {
    id : 9,
    brand: "PUMA",
    model: "RS-X",
    color: "White/Red",
    price: 99.99,
    imageLink: "https://www.tradeinn.com/f/13783/137835778/puma-mirage-tech-%CE%A0%CF%81%CE%BF%CF%80%CE%BF%CE%BD%CE%B7%CF%84%CE%AD%CF%82.jpg"
  },
  {
    id : 10,
    brand: "PUMA",
    model: "RS-X",
    color: "White/Red",
    price: 99.99,
    imageLink: "https://cdn.shopify.com/s/files/1/0262/1574/3576/products/image_0c188859-ece6-4b72-8c34-5476e18e9e1e_1200x1200.webp?v=1657057795"
  },
  {
    id : 11,
    brand: "PUMA",
    model: "Suede Classic",
    color: "Black/White",
    price: 69.99,
    imageLink: "https://di2ponv0v5otw.cloudfront.net/posts/2022/12/16/639c7ba74bd760628e96b414/m_639c7bc9acf462d13519456a.jpg"
  },
  // Adidas
  {
    id : 12,
    brand: "ADIDAS",
    model: "Ultraboost",
    color: "Grey/White",
    price: 179.99,
    imageLink: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/SUPERSTAR_SHOES_Black_EG4959_01_standard.jpg"
  },
  {
    id : 13,
    brand: "ADIDAS",
    model: "Stan Smith",
    color: "White/Green",
    price: 79.99,
    imageLink: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4d31131033b54e67b045ab2f017c6cda_9366/Superstar_Shoes_White_FU7714_01_standard.jpg"
  },
  {
    id : 14,
    brand: "ADIDAS",
    model: "NMD R1",
    color: "Black/Red",
    price: 129.99,
    imageLink: "https://assets.adidas.com/images/w_600,f_auto,q_auto/641ca1a4fe0643068371aef900c3a51e_9366/Ultrabounce_Shoes_White_HP5771_01_standard.jpg"
  },
  {id : 15,
    brand: "ADIDAS",
    model: "NMD R1",
    color: "Black/Red",
    price: 129.99,
    imageLink: "https://cdn.shopify.com/s/files/1/2031/6995/products/GV8270_6_grande.jpg?v=1646760541"
  },
  {
    id : 16,
    brand: "ADIDAS",
    model: "Stan Smith",
    color: "Black/Red",
    price: 129.99,
    imageLink: "https://static.footshop.com/668716-full_product/193171.jpg"
  },
  // Reebok
  {
    id : 17,
    brand: "REEBOK",
    model: "Classic Leather",
    color: "White",
    price: 79.99,
    imageLink: "https://imagescdn.reebok.in/img/app/product/7/768941-8841748.jpg?auto=format&w=309"
  },
  {
    brand: "REEBOK",
    model: "Nano X",
    color: "Black/Blue",
    price: 119.99,
    imageLink: "https://img.tatacliq.com/images/i7/437Wx649H/MP000000008877586_437Wx649H_202102220200111.jpeg"
  },
  {
    brand: "REEBOK",
    model: "Club C 85",
    color: "White/Gum",
    price: 89.99,
    imageLink: "https://imagescdn.reebok.in/img/app/product/8/815017-9729277.jpg?auto=format"
  },
  {
    brand: "REEBOK",
    model: "Nano X",
    color: "Black/Blue",
    price: 119.99,
    imageLink: "https://cdn.shopclues.com/images1/thumbnails/110886/320/320/151053581-110886706-1602144488.jpg"
  },
  // New Balance
  { 
    brand: "NEW BALANCE",
    model: "574",
    color: "Grey/White",
    price: 89.99,
    imageLink: "https://www.nbshoes-india.com/images/newbalance-india/Indigo_Grey_Men_s_New_Balance_327_Sneake-India-069154.jpg"
  },
  {
  brand: "NEW BALANCE",
  model: "990v5",
  color: "Navy/Grey",
  price: 174.99,
  imageLink: "https://cdn.shopify.com/s/files/1/0816/4881/products/fc42c099c13e31ab0bbf34f58f5f3148_2048x2048_4a7226ed-6dba-4a0f-ae07-8e3a3374f882_1024x1024.webp?v=1676327347"
},
{
  brand: "NEW BALANCE",
  model: "Fresh Foam 1080v11",
  color: "Black/White",
  price: 149.99,
  imageLink: "https://thefoschini.vtexassets.com/arquivos/ids/54063234-800-800?v=638190020211600000&width=800&height=800&aspect=true"
},
{
  brand: "NEW BALANCE",
  model: "FuelCell Echo",
  color: "Blue/Red",
  price: 119.99,
  imageLink: "https://thefoschini.vtexassets.com/arquivos/ids/55034543-800-800?v=638195099578930000&width=800&height=800&aspect=true"
},
{
  brand: "NEW BALANCE",
  model: "997H",
  color: "Grey/Green",
  price: 109.99,
  imageLink: "https://www.nbshoes-india.com/images/newbalance-india/Dark_Red_Men_s_New_Balance_574_Legacy_Sn-India-158367.jpg"
},
// badminton 
{
  brand: "Yonex",
  model: "Voltric Z-Force II",
  racketWeight: "3U",
  stringTension: "24-35 lbs",
  price: 209.99,
  imageLink: "https://m.media-amazon.com/images/I/617ZfMzNgyL._AC_UF1000,1000_QL80_.jpg"
},
{
  brand: "Victor",
  model: "Brave Axe 1",
  racketWeight: "3U",
  stringTension: "24-30 lbs",
  price: 189.99,
  imageLink: "https://m.media-amazon.com/images/I/31LtZQ7pNDL._AC_SR300,300.jpg"
},
{
  brand: "Li-Ning",
  model: "Aeronaut 9000C",
  racketWeight: "3U",
  stringTension: "24-30 lbs",
  price: 179.99,
  imageLink: "https://www.pdhsports.com/files/uk/imagelibrary/Top%2010%20Badminton/2022/RBYO25298~CherrySunburst99Pro4U_P1.jpg"
},
{
  brand: "Apacs",
  model: "Lethal 66",
  racketWeight: "3U",
  stringTension: "24-30 lbs",
  price: 99.99,
  imageLink: "https://i.pinimg.com/236x/bd/e4/54/bde45400e33a1c769ee925a285014f07.jpg"
},
{
  brand: "Victor",
  model: "Brave Sword 12",
  racketWeight: "3U",
  stringTension: "24-30 lbs",
  price: 189.99,
  imageLink: "https://m.media-amazon.com/images/I/31LtZQ7pNDL._AC_SR300,300.jpg"
},
{
  brand: "Yonex",
  model: "Duora 10",
  racketWeight: "3U",
  stringTension: "24-30 lbs",
  price: 199.99,
  imageLink: "https://www.sportsuncle.com/image/cache/catalog/images/lining/rackets/ws72-blk-gold-1200x1200.jpg"
},
{
  brand: "Apacs",
  model: "Lethal 96",
  racketWeight: "3U",
  stringTension: "24-30 lbs",
  price: 99.99,
  imageLink: "https://i.pinimg.com/236x/bd/e4/54/bde45400e33a1c769ee925a285014f07.jpg"
},
{
  brand: "Victor",
  model: "Brave Sword 19",
  racketWeight: "3U",
  stringTension: "24-29 lbs",
  price: 159.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/BB166298.jpg"
},
{
  brand: "Yonex",
  model: "Nanoflare 700",
  racketWeight: "4U",
  stringTension: "20-27 lbs",
  price: 209.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXNF001AGEFR.jpg"
},
{
  brand: "Li-Ning",
  model: "Windstorm 79",
  racketWeight: "4U",
  stringTension: "24-30 lbs",
  price: 129.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXNF001FLGN.jpg"
},
{
  brand: "Apacs",
  model: "Feather Weight 59",
  racketWeight: "4U",
  stringTension: "24-30 lbs",
  price: 99.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXAX88DTGECMGO.jpg"
},

{
  brand: "Yonex",
  model: "Voltric Z-Force",
  racketWeight: "3U",
  stringTension: "24-30 lbs",
  price: 219.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXNF001FLGO.jpg"
},
// shuttelcock
{
  brand: "Yonex",
  model: "AS-30",
  speed: "Medium",
  price: 24.99,
  imageLink: "https://5.imimg.com/data5/HT/YK/PC/SELLER-22616927/aero-speed-3-badminton-shuttlecock.jpg"
},
{
  brand: "Victor",
  model: "Gold Feather",
  speed: "Fast",
  price: 19.99,
  imageLink: "https://www.ycsports.com/image/cache/data/Yonex/AS20-yy-badminton-shuttlecock-light-speed-eather-victor-shuttlecocks-aeroplane-rsl-duck-ball-AS-20-enlan.jpg_640x640-1-640x700.jpg"
},
{
  brand: "Li-Ning",
  model: "A+60",
  speed: "Medium",
  price: 16.99,
  imageLink: "https://cdn.shopify.com/s/files/1/0020/9407/1890/products/c2e76205-a28a-4b7a-9b94-3ec74aa7d7ff_2048x2048.jpg?v=1601305779"
},
{
  brand: "RSL",
  model: "Tourney No. 3",
  speed: "Slow",
  price: 14.99,
  imageLink: "https://5.imimg.com/data5/KW/IG/MY-19880050/a-500x500.jpg"
},
{
  brand: "Yonex",
  model: "Aerosensa 50",
  speed: "Medium",
  price: 21.99,
  imageLink: "https://cdn.shopify.com/s/files/1/0293/4669/3204/products/2061.jpg?v=1669173599"
}
,
{
  brand: "Victor",
  model: "Gold Feather",
  speed: "Fast",
  price: 19.99,
  imageLink: "https://m.media-amazon.com/images/I/6187bQjjEJL.jpg"
}
,
{
  brand: "RSL",
  model: "Tourney No. 3",
  speed: "Slow",
  price: 14.99,
  imageLink: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41hErtUssNL.jpg"
},
// kit bag
{
  brand: "Nike",
  model: "Club Team",
  color: "Black",
  price: 49.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXSUNR2215BKNEON.jpg"
},
{
  brand: "Adidas",
  model: "Tiro Duffel Bag",
  color: "Navy",
  price: 39.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXSUNR2225BKROY.jpg"
},
{
  brand: "Puma",
  model: "Evercat Contender 3.0",
  color: "Red",
  price: 29.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXSUNR2225BKSBL.jpg"
},
{
  brand: "Under Armour",
  model: "Undeniable 4.0",
  color: "Grey",
  price: 59.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNKB22831WGR.jpg"
},
{
  brand: "Nike",
  model: "Brasilia Medium",
  color: "Pink",
  price: 44.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNBK22431NYPNK.jpg"
},
// badminton T-shirts
{
  brand: "Yonex",
  model: "Dry-Comfy",
  color: "Red",
  size: "M",
  price: 29.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTSM2402BG.jpg"
},
{
  brand: "Victor",
  model: "Tech-Dry",
  color: "Blue",
  size: "L",
  price: 24.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTSM2402VI.jpg"
},
{
  brand: "Li-Ning",
  model: "Cool-Tech",
  color: "Yellow",
  size: "S",
  price: 19.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTSM2402BO.jpg"
},
{
  brand: "Adidas",
  model: "Climacool",
  color: "Black",
  size: "XL",
  price: 34.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTSM2402WH.jpg"
},
{
  brand: "Li-Ning",
  model: "Cool-Tech",
  color: "Yellow",
  size: "S",
  price: 19.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTSM2402JB.jpg"
},
{
  brand: "Yonex",
  model: "Power-Tech",
  color: "Green",
  size: "M",
  price: 26.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTSM2402TR.jpg"
},
{
  brand: "Victor",
  model: "Tech-Dry",
  color: "Blue",
  size: "L",
  price: 24.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTSM2402BC.jpg"
},
{
  brand: "Adidas",
  model: "Climacool",
  color: "Black",
  size: "XL",
  price: 34.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS2462RR.jpg"
},
{
  brand: "Adidas",
  model: "Climacool",
  color: "Black",
  size: "XL",
  price: 34.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS2462DN.jpg"
},
{
  brand: "Adidas",
  model: "Climacool",
  color: "Black",
  size: "XL",
  price: 34.99,
  imageLink: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNTS2462DP.jpg"
},
]

let showcart = document.querySelector(".showcart")
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length < 1 ){
  showcart.textContent = "0"
}else{
  for(let i=0;i<cart.length;i++){
    showcart.textContent = i+1
  }
}

  let cont = document.querySelector(".container")
  
  let showTotalProduct = document.querySelector(".show");
  let filter = document.getElementById("filter")


filter.addEventListener("change",()=>{

  if(filter.value === ""){
    display(shoesArray)
  }else{
    if(filter.value == "assending"){
      nArray = shoesArray.sort((a,b)=>{
       return a.price - b.price
      })
      display(nArray)
    }else if(filter.value == "descening"){
      shoesArray = shoesArray.sort((a,b)=>{
       return b.price - a.price
      })
      display(shoesArray)
    }
  }

})

let product = JSON.parse(localStorage.getItem("product")) || []

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

      card.addEventListener("click",()=>{
        localStorage.setItem("product",JSON.stringify(data[i]))
        window.location.assign("productdetails.html")
      })
    }

  }
  
display(shoesArray)

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
