let data=[
    {
        name:"BABOLAT SATELITE ORIGIN POWER BADMINTON RACKET (BLUE/WHITE, UNSTRUNG)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/BB191362.jpg",
        price:"₹5,999",
        discount:"50% OFF",
        id:"bad-1.html",
        rate:"5999"
    },
    {
        name:"BABOLAT XFEEL ESSENTIAL BADMINTON RACKET (BLUE/GREY, UNSTRUNG)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=780,height=780,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/BB189543.jpg",
        price:"₹7,749",
        discount:"50% OFF",
        id:"bad-2.html",
        rate:"7749"
    },
    {
        name:"Babolat Satelite Touch Badminton Racket (Pink, Unstrung)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/BB166316.jpg",
        price:"₹5,499",
        discount:"50% OFF",
        id:"bad-3.html",
        rate:"5499"
    },
    {
        name:"Babolat Xfeel Lite Badminton Racket (Dark Grey, Unstrung)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/BB189548.jpg",
        price:"₹7,749",
        discount:"50% OFF",
        id:"bad-4.html",
        rate:"7749"
    },
    {
        name:"YONEX GR-303I BADMINTON RACKET (DARK RED, STRUNG)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=780,height=780,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXBDRCGR303IDRD.jpg",
        price:"₹599",
        discount:"25% OFF",
        id:"bad-5.html",
        rate:"599"
    },
    {
        name:"YONEX GR-303I Badminton Racket (Deep Blue, Strung)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXBDRCGR303IDBL.jpg",
        price:"₹599",
        discount:"25% OFF",
        id:"bad-6.html",
        rate:"599"
    },
    {
        name:"YONEX VOLTRIC LITE 25I BADMINTON RACKET (BLUE, UNSTRUNG, WITHOUT COVER)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=780,height=780,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YVVTLT25IBLWCV.jpg",
        price:"₹1,499",
        discount:"50% OFF",
        id:"bad-7.html",
        rate:"1499"
    },
    {
        name:"YONEX ARCSABER 7 TOUR BADMINTON RACKET (GREY/YELLOW, STRUNG)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=780,height=780,quality=75,format=auto/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXARC7TGEGRY.jpg",
        price:"₹7,149",
        discount:"35% OFF",
        id:"bad-8.html",
        rate:"7149"
    },
    {
        name:"Yonex Astrox 100 Tour Badminton Racket (Kurenai, Strung)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXAX100TGEKRNI.jpg",
        price:"₹8,199",
        discount:"35% OFF",
        id:"bad-9.html",
        rate:"8199"
    },
    {
        name:"Yonex Astrox 88D Tour Badminton Racket (Camel Gold, Strung)",
        image:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YXAX88DTGECMGO.jpg",
        price:"₹7,799",
        discount:"35% OFF",
        id:"bad-10.html",
        rate:"7799"
    }
]
let parent=document.getElementById("display")

function display(data){
    display.innerHTML="";
    for (let i=0;i<data.length;i++){
        let card=document.createElement("div")
        
        let link=document.createElement("a")
        link.setAttribute("href",data[i].id)
        let image=document.createElement("img")
        image.setAttribute("src",data[i].image)

        let line=document.createElement("hr")

        let h2=document.createElement("h2")
        h2.innerText=data[i].name;

        let price=document.createElement("p")
        price.innerText=data[i].price;

        let dis=document.createElement("p")
        dis.innerText=data[i].discount

        link.append(image,line,h2,price,dis);
        card.append(link)
        parent.append(card)
    }
}
display(data)

let count=JSON.parse(localStorage.getItem("cart-list"));
document.getElementById("cart-count").innerText=count.length