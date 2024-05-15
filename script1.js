document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000);
    }

    const fcurrency = document.getElementById("fcurrency");
    const button = document.getElementById("button");
    const buttoncontent = document.getElementById("buttoncontent");

    button.addEventListener("click", function getCurrency() {
    buttoncontent.innerHTML = fcurrency.value;
    });
});