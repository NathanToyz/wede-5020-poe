const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter =
searchInput.value.toLowerCase();

let cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

let text =
card.textContent.toLowerCase();

if(text.includes(filter)){
card.style.display="block";
}

else{
card.style.display="none";
}

});

});

} 
const images =
document.querySelectorAll("img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

if(lightbox){

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="block";

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

}