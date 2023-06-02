// console.log("jjj")

let headerImg = document.getElementById("imgd");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let ind =0;
let headImg =[
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/PARAFA2023.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Pro-Staff-V14-BUY-Now.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Joma%20offer.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/osaka-ezone.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/ArcSaber11-1.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/speed2022.jpg"
];
let data = "https://www.google.com/";

headerImg.setAttribute("src", headImg[ind]);

btn1.addEventListener("click",function(){
    ind--;
    if(ind === -1){
        ind=headImg.length-1;
    }
    headerImg.setAttribute("src", headImg[ind]); 
})

btn2.addEventListener("click",function(){
    ind++;
    if(ind === headImg.length){
        ind=0;
    }
    headerImg.setAttribute("src", headImg[ind]);
})




