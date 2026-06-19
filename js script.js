// ======================================
// LOADING SCREEN
// ======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },500);

        },1500);

    }

});

// ======================================
// TYPING EFFECT
// ======================================

const typingText =
document.getElementById("typing-text");

if(typingText){

const message =
"Freshly Baked Happiness Daily";

let i = 0;

function typeWriter(){

    if(i < message.length){

        typingText.innerHTML +=
        message.charAt(i);

        i++;

        setTimeout(typeWriter,100);

    }

}

typeWriter();

}

// ======================================
// DARK MODE
// ======================================

const darkBtn =
document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}

// ======================================
// BACK TO TOP
// ======================================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}

// ======================================
// PRODUCT SEARCH
// ======================================

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter =
searchInput.value.toLowerCase();

let cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

let text =
card.textContent.toLowerCase();

card.style.display =
text.includes(filter)
? "block"
: "none";

});

});

}

// ======================================
// LIGHTBOX
// ======================================

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

if(lightbox){

const images =
document.querySelectorAll(".product-card img");

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

// ======================================
// NOTIFICATION
// ======================================

const notification =
document.getElementById("notification");

if(notification){

setTimeout(()=>{

notification.classList.add("show");

},2000);

setTimeout(()=>{

notification.classList.remove("show");

},6000);

}

// ======================================
// SCROLL ANIMATION
// ======================================

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

sections.forEach(section=>{

observer.observe(section);

});