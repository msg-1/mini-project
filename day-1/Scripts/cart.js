let LS = JSON.parse(localStorage.getItem("Bookmark"))||[];

let box = document.getElementById("box");

display(LS);

function display(data){
    box.innerHTML="";
    data.forEach(function(el){
        let div = document.createElement("div");

        let nameImg = document.createElement("div")
        nameImg.style.flexDirection="column"
 
        let productImg = document.createElement("img");
        productImg.setAttribute("src", el.image) ;
 
        let name = document.createElement("h3");
        name.innerText=el.name;
         let  price = document.createElement("div");
         price.innerText="₹"+el.price;
 
         let quantity = document.createElement("div");
         quantity.className = "quantity"
         let but1 = document.createElement("button");
         but1.innerText = "-"
         but1.className = "but"
         but1.addEventListener("click",function(){quantityy(el,-1)})
         let but2 = document.createElement("button");
         but2.innerText = "+"
         but2.className = "but"
         but2.addEventListener("click",function(){quantityy(el,1)})
         let p = document.createElement("p");
         p.innerText = el.count;
         quantity.append(but1,p,but2)
 
         let total = document.createElement("div");
         total.innerText="₹" + Number(el.count)*Number(el.price);
 
         let remove = document.createElement("div");
         remove.innerText="Remove";
         remove.id = "remove"
         remove.style.cursor = "pointer"
 
         nameImg.append(productImg,name);
 
         
         box.append(nameImg,price,quantity,total,remove);

 
         remove.addEventListener("click",function(){
             alert("Are You Sure")
              LS = LS.filter((e)=>{
                 if(e.id !== el.id){
                     return e;
                 }
             })
             localStorage.setItem("Bookmark",JSON.stringify(LS));
             display(LS)
             
         })
         
     })

    }
    function quantityy(el,val){
        for(let i=0; i<LS.length; i++)
        {
            let ele = LS[i];
            let c = ele.count
            if(ele.id===el.id)
            {
                if(c===1&&val===-1)
                {
                    return;
                }
                ele.count = ele.count+val;
                LS[i] = ele;
                localStorage.setItem("Bookmark",JSON.stringify(LS));
                display(LS)
                return;
            }
        }
    }