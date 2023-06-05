let showcart = document.querySelector(".showcart")
let cartdata = JSON.parse(localStorage.getItem("cart")) || [];

if(cartdata.length < 1 ){
  showcart.textContent = "0"
}else{
  for(let i=0;i<cartdata.length;i++){
    showcart.textContent = i+1
  }
}

// top main hero slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// new slider
var splide = new Splide( '.splide', {
  type    : 'loop',
  perPage : 8,
  autoplay: true,
} );

splide.mount();