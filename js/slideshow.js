/* ==========================================================
   MIREK CZERNEK PHOTOGRAPHY
   slideshow.js
========================================================== */

class HeroSlideshow {

    constructor() {

        this.slides = document.querySelectorAll(".slide");

        this.current = 0;

        this.delay = 7000;

        this.timer = null;

        this.preload();

        this.start();

        this.visibilityHandler();

    }

    /* ==========================================
       PRELOAD
    ========================================== */

    preload() {

        this.slides.forEach(slide => {

            const bg = slide.style.backgroundImage;

            const url = bg
                .replace('url("', '')
                .replace("url('", '')
                .replace('")', '')
                .replace("')", '');

            if (!url) return;

            const img = new Image();

            img.src = url;

        });

    }

    /* ==========================================
       START
    ========================================== */

    start() {

        this.timer = setInterval(() => {

            this.next();

        }, this.delay);

    }

    stop() {

        clearInterval(this.timer);

    }

    restart() {

        this.stop();

        this.start();

    }

    /* ==========================================
       NEXT
    ========================================== */

    next() {

        this.slides[this.current].classList.remove("active");

        this.current++;

        if (this.current >= this.slides.length) {

            this.current = 0;

        }

        this.slides[this.current].classList.add("active");

    }

    /* ==========================================
       TAB VISIBILITY
    ========================================== */

    visibilityHandler() {

        document.addEventListener("visibilitychange", () => {

            if (document.hidden) {

                this.stop();

            }

            else {

                this.restart();

            }

        });

    }

}

document.addEventListener("DOMContentLoaded", () => {

    new HeroSlideshow();

});