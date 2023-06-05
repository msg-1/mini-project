

let image=document.querySelector("#image");
let prevButton=document.querySelector("#Prev");
let nextButton=document.querySelector("#Next");

let currentImage=0;
let imagesArr=[
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/speed2022.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/PARAFA2023.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Pro-Staff-V14-BUY-Now.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Joma%20offer.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/osaka-ezone.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/ArcSaber11-1.jpg",

];

image.setAttribute("src",imagesArr[currentImage])

nextButton.addEventListener("click", function(){
    currentImage++;
    if(currentImage>=imagesArr.length){
        currentImage=0;
    }
    image.setAttribute("src",imagesArr[currentImage])

})

prevButton.addEventListener("click", function(){
    currentImage--;
    if(currentImage < 0){
        currentImage=imagesArr.length-1;
    }
    image.setAttribute("src",imagesArr[currentImage])

})

