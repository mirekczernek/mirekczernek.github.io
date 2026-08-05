document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.querySelector(".gallery");

    if (!gallery) return;
    if (typeof galerie === "undefined") return;

    const folder = gallery.dataset.folder;

    // Pole obrázků pro lightbox
    window.galleryImages = galerie.map(file => `img/${folder}/${file}`);
    window.currentImage = 0;

    galerie.forEach((file, index) => {

        const link = document.createElement("a");

        link.href = "#";
        link.dataset.index = index;

        const img = document.createElement("img");

        img.src = `img/${folder}/${file}`;
        img.alt = "";

        link.appendChild(img);

        gallery.appendChild(link);

    });

});