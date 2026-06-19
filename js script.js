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