document.addEventListener("DOMContentLoaded", () => {

    const img1 = document.getElementById("heroImage1");
    const img2 = document.getElementById("heroImage2");

    if (!img1 || !img2) return;

    const images = [
        "img/hero/slide1.jpg",
        "img/hero/slide2.jpg",
        "img/hero/slide3.jpg"
    ];

    let current = 0;
    let active = img1;
    let hidden = img2;

    function nextSlide() {

        current = (current + 1) % images.length;

        hidden.src = images[current];

        hidden.style.animation = "none";
        hidden.offsetHeight;
        hidden.style.animation = "heroZoom 10s linear forwards";

        hidden.classList.add("active");
        active.classList.remove("active");

        const temp = active;
        active = hidden;
        hidden = temp;
    }

    img1.src = images[0];
    img2.src = images[1];

    img1.classList.add("active");
    img2.classList.remove("active");

    img1.style.animation = "heroZoom 10s linear forwards";

    setInterval(nextSlide, 6000);

});