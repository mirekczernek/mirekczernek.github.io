window.addEventListener("DOMContentLoaded", () => {

    // Zvýraznění aktivní položky menu
    document.querySelectorAll(".nav a").forEach(a => {
        if (a.pathname === location.pathname) {
            a.style.color = "#fff";
            a.style.fontWeight = "bold";
        }
    });

    // Slideshow
    const hero = document.getElementById("heroImage");
    if (!hero) return;

    const slides = [
        "img/hero/slide1.jpg",
        "img/hero/slide2.jpg",
        "img/hero/slide3.jpg"
    ];

    let current = 0;

    setInterval(() => {

        hero.style.opacity = 0;

        setTimeout(() => {

            current = (current + 1) % slides.length;
            hero.src = slides[current];
            hero.style.opacity = 1;

        }, 400);

    }, 4000);

});