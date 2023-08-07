document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const body = document.body;
    const switchInput = document.getElementById("switch");
    const arrow = document.querySelector(".arrow");

    //hamberger menu open/close
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("menu_open");
        if (menu.classList.contains("menu_open")) {
            document.body.style.overflow = "hidden";
            body.classList.add("active");
            body.classList.remove("not-active");
        } else {
            body.classList.add("not-active");
            body.classList.remove("active");
            setTimeout(function () {
                document.body.style.overflow = "visible";
            }, 1000);
        }
    });

    //hamburger menu open/close when a section is selected
    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            menu.classList.remove("menu_open");
            body.classList.add("not-active");
            body.classList.remove("active");
            setTimeout(function () {
                document.body.style.overflow = "visible";
            }, 1000);
        });
    });

    //arrow fade
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 1.5) {
            arrow.classList.add("fade");
        } else {
            arrow.classList.remove("fade");
        }
    });

    //day-night scroll
    switchInput.addEventListener("click", function () {
        if (this.checked) {
            body.classList.add("day");
        } else {
            body.classList.remove("day");
        }
    });

    //ScrollReveal initialization
    ScrollReveal().reveal(".reveal", {
        distance: "100px",
        duration: 1500,
        easing: "cubic-bezier(.215, .61, .355, 1)",
        interval: 600,
    });

    //intro text animation
    const typeElement = document.getElementById("type");
    const introString = "Hi! I'm Cate";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < introString.length) {
            typeElement.innerHTML += introString.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
