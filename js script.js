// ========================================
// PRODUCT SEARCH FUNCTION
// ========================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card");

        cards.forEach(function (card) {

            let text = card.textContent.toLowerCase();

            if (text.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ========================================
// LIGHTBOX IMAGE GALLERY
// ========================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {

    const images = document.querySelectorAll(".product-card img");

    images.forEach(function (img) {

        img.addEventListener("click", function () {

            lightbox.style.display = "block";

            lightboxImg.src = img.src;

        });

    });

    lightbox.addEventListener("click", function () {

        lightbox.style.display = "none";

    });

}

// ========================================
// ENQUIRY FORM VALIDATION
// ========================================

function validateForm() {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let details = document.getElementById("details");

    if (!name || !email || !details) {
        return true;
    }

    if (name.value.trim() === "") {

        alert("Please enter your name.");
        return false;

    }

    if (email.value.trim() === "") {

        alert("Please enter your email.");
        return false;

    }

    if (details.value.trim() === "") {

        alert("Please enter your order details.");
        return false;

    }

    alert("Form submitted successfully!");

    return true;

}

// ========================================
// WELCOME MESSAGE
// ========================================

window.addEventListener("load", function () {

    console.log("Golden Crust Bakery Website Loaded Successfully");

});