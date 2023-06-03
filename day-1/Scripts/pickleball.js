let data =[
    {
        image :"https://storage.sg.content-cdn.io/cdn-cgi/image/width=270,height=270,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GARFWPP11.jpg",
        name:"Gamma Fushion",
        price :"8199",
        discount:"25% OFF",
    },
    {
        image :"https://storage.sg.content-cdn.io/cdn-cgi/image/width=270,height=270,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GARDPP10.jpg",
        name:"Gamma Dart",
        price :7399,
        discount:"25% OFF"
    } 
    ,{
        image :"https://storage.sg.content-cdn.io/cdn-cgi/image/width=270,height=270,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GARFPPP10.jpg",
        name:"Gamma Fushion",
        price :6399,
        discount:"25% OFF"
    }, {
        image :"https://storage.sg.content-cdn.io/cdn-cgi/image/width=270,height=270,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GARMPP11.jpg",
        name:"Gamma Micron",
        price :7299,
        discount:"25% OFF"
    } ,
    {
        image :"https://storage.sg.content-cdn.io/cdn-cgi/image/width=270,height=270,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GAROPP10.jpg",
        name:"Gamma Odyssey",
        price :5499,
        discount:"25% OFF"
    } ,
    {
        image :"https://storage.sg.content-cdn.io/cdn-cgi/image/width=270,height=270,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GARQPP10.jpg",
        name:"Gamma Quest",
        price :4899,
        discount:"30% OFF"
    } ,
    {
        image :"https://storage.sg.content-cdn.io/cdn-cgi/image/width=270,height=270,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GARGMPP14.jpg",
        name:"Gamma Mirage",
        price : 9799,
        discount:"20% OFF"
    } 
    ,{
        image :"https://storage.sg.content-cdn.io/cdn-cgi/image/width=270,height=270,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GARGSPP10.jpg",
        name:"Gamma Shard",
        price :11599,
        discount:"15% OFF"
    } ,
    {
        image :"https://storage.sg.content-cdn.io/cdn-cgi/image/width=270,height=270,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/GACGOP3.jpg",
        name:"Gamma Photon",
        price :1999,
        discount:"25% OFF"
    } 
   
];

let product = document.getElementById("productData");
let filter = document.getElementById("filter");

filter.addEventListener("change",function(){
    console.log("hii")
    // event.preventDefault();
    if(filter.value === "Price Low to High"){
        let filterd = data.sort((a,b)=>{
           return a.price - b.price;
        })

        display(filterd);
    }
    else if(filter.value === "Price High to Low"){
        let filterd = data.sort((a,b)=>{
           return b.price - a.price;
        })

        display(filterd);
    }
    else if(filter.value === "Discount"){
        let filterd = data.sort((a,b)=>{
            if(a.discount < b.discount){
                return 1;
            }else if(a.discount > b.discount){
                return -1;
            }else{
                return 0;
            }
        })
        display(filterd);
    }
   
    
})

display(data)


function display(data){
    product.innerHTML="";
    for(let i=0;i<data.length; i++){
        let div = document.createElement("div");
    
        let imageD= document.createElement("img");
        imageD.setAttribute("src",data[i].image);
    
        let name= document.createElement("h2");
        name.innerText = data[i].name;
        let price= document.createElement("p");
        price.innerText= data[i].price;
        let discount= document.createElement("p");
        discount.innerText = data[i].discount;
        discount.style.color="red";
    
        div.append(imageD,name,price,discount);
    
        product.append(div);
    }
}