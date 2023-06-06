let array = ['https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Joma%20offer.jpg','https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/osaka-ezone.jpg','https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/PARAFA2023.jpg','https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Pro-Staff-V14-BUY-Now.jpg','https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/ArcSaber11-1.jpg'];

let nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", function (){
    let presentInp = document.querySelector("#banner>img").scr;
    let presentIndx;
    for(let i = 0;i<array.length;i++){
        if(array[i] == presentInp){
            presentIndx = i;
            break;
        }
    }

    if(presentIndx>= array.length){
        presentIndx -= array.length;
    }

    document.querySelector("#banner>img").setAttribute("src", array[presentIndx]);

})