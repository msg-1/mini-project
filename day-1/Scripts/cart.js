let LS = JSON.parse(localStorage.getItem("Bookmark"))||[];
function refresh(){
    // let LS = JSON.parse(localStorage.getItem("Bookmark"))||[];
}

let box = document.getElementById("cont");

display(LS);

function display(data){
    box.innerHTML="";
    for(let i=0; i<data.length; i++){
        let div = document.createElement("div");

       let nameImg = document.createElement("div")
       nameImg.style.flexDirection="column"

       let productImg = document.createElement("img");
       productImg.setAttribute("src", data[i].image) ;

       let name = document.createElement("h3");
       name.innerText=data[i].name;
        let  price = document.createElement("div");
        price.innerText=data[i].price;

        let quantity = document.createElement("div");
        let count=1;
        quantity.innerText=count;

        let total = document.createElement("div");
        total.innerText=data[i].price;

        let remove = document.createElement("div");
        remove.innerText="Remove";
        remove.style.color="red";

        nameImg.append(productImg,name);

        
        box.append(nameImg,price,quantity,total,remove);
        

        // box.append(div);

        remove.addEventListener("click",function(){
            alert("Are You Sure")
             LS = LS.filter((e)=>{
                if(e.id !== data[i].id){
                    return e;
                }
            })
            display(LS);
            refresh();
            localStorage.setItem("Bookmark",JSON.stringify(LS));
            
        })
        
    };
}