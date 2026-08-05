document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.querySelector(".gallery");

    if (!gallery) return;

    // Vytvoření lightboxu
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";

    lightbox.innerHTML = `
        <span id="lightboxClose">&times;</span>

        <button id="prevImage" class="lightboxArrow">&#10094;</button>

        <img id="lightboxImage" src="" alt="">

        <button id="nextImage" class="lightboxArrow">&#10095;</button>

        <div id="lightboxCounter"></div>
    `;

    document.body.appendChild(lightbox);

    const image = document.getElementById("lightboxImage");
    const close = document.getElementById("lightboxClose");
    const prev = document.getElementById("prevImage");
    const next = document.getElementById("nextImage");
    const counter = document.getElementById("lightboxCounter");

    function showImage(index){

        window.currentImage = index;

        image.classList.add("fade");

        setTimeout(()=>{

            image.src = window.galleryImages[index];

            counter.textContent =
                `${index + 1} / ${window.galleryImages.length}`;

            image.classList.remove("fade");

        },150);

    }

    gallery.addEventListener("click",(e)=>{

        const link = e.target.closest("a");

        if(!link) return;

        e.preventDefault();

        lightbox.classList.add("active");

        showImage(Number(link.dataset.index));

    });

    close.onclick=()=>{

        lightbox.classList.remove("active");

    };

    next.onclick=()=>{

        showImage(
            (window.currentImage+1)%window.galleryImages.length
        );

    };

    prev.onclick=()=>{

        showImage(
            (window.currentImage-1+window.galleryImages.length)
            %window.galleryImages.length
        );

    };

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("active")) return;

        if(e.key==="Escape")
            lightbox.classList.remove("active");

        if(e.key==="ArrowRight")
            next.click();

        if(e.key==="ArrowLeft")
            prev.click();

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.classList.remove("active");

        }

    });

});