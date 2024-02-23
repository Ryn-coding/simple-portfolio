// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main-container'),
//     smooth: true
// });

function textAnim() {
    var typed = new Typed('#meta', {
        strings: ['PHP Web Developer.', 'EC Engineer.'],
        typeSpeed: 70,
        loop: true
    });
}
textAnim();

var tl = gsap.timeline()

function section1Anim() {
    tl.to(".first .fleft", {
        x: -30,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
            trigger: ".first",
            // markers: true,
            start: "20% top",
            end: "50% top",
            scrub: .3
        }
    })
    tl.to(".first .rleft", {
        x: 30,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
            trigger: ".first",
            // markers: true,
            start: "bottom center",
            end: "140% center",
            scrub: .3
        }
    })
    tl.from("#contact", {
        x: -100,
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: "#contact",
            // markers: true,
            start: "top 90%",
            end: "top center",
            scrub: 0.5
        }
    })
}
section1Anim();

function navbar() {
    let navdiv = document.querySelector("nav .right")
    let nav = document.querySelector("nav");
    let originalNavBgColor = nav.style.background;

    let dropdown = document.querySelector(".dropdown")
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("active");
        navdiv.classList.toggle("active");
        nav.classList.toggle("navbg");

        if (navdiv.classList.contains("active")) {
            nav.style.background = "#836FFF";
        }
        else if (window.scrollY > 35) {
            nav.style.background = "#836FFF";
        } else {
            nav.style.background = originalNavBgColor;
        }

    })
    gsap.to("nav", {
        backgroundColor: "#836FFF",
        scrollTrigger: {
            trigger: "nav",
            scroller: "body",
            scrub: 0.1,
            // markers: true,
            start: "top -30px",
            end: "top 10px"

        }
    })


}

navbar();