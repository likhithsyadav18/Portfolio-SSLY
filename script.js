//Roles in about section
var typed = new Typed(".text", {
    strings: ["CS Grad at ASU", "System Engineer at TCS", "IT Undergrad at JNTU-V"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})



// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");


// switch between about buttons 

const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});



// portfolio fillter 

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});


// Initialize swiperjs 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
  });



//   skill Progress bar 

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})


function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}


let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}


// side progress bar 

let calcScrollValueUp = ()=>{
    let scrollProgress = document.getElementById("progressUp");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

let calcScrollValueDown = ()=>{
    let scrollProgress = document.getElementById("progressDown");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos < calcHeight-100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = calcHeight;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${100-scrollValue}%,#e6006d ${100-scrollValue}%)`;
};

function onScrollAndLoad() {
    calcScrollValueUp();
    calcScrollValueDown();
}

window.onscroll = onScrollAndLoad;
window.onload = onScrollAndLoad;

// Progress Bar counter

let boxes = document.querySelectorAll(".skill-containerBox");

const first_skill_line = document.querySelector(".skill-containerBox:first-child");
let skillsPlayedLine = false;

window.addEventListener("scroll",()=>{
    if(!skillsPlayedLine)
    load_bars();
})

    function load_bars(){
        if(!hasReached(first_skill_line))return;
        skillsPlayedLine = true;
        boxes.forEach(box => {
            let line = box.querySelector(".level");
            let increasing_percentage = box.querySelector(".increasing_percentage");
            let total_percentage = box.querySelector(".total_percentage");
            
            let p = 0;
            let my_interval = setInterval(() => {
                p++;
                line.style.width = p + "%";
                increasing_percentage.innerHTML = p + "%";
                if(increasing_percentage.innerHTML == total_percentage.innerHTML){
                    clearInterval(my_interval);
                }
            }, 25);
        });
    }

// active menu 

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// scroll reveal

ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:500
    //reset: true
});


ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info,.contact-icons', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills, .contact-list', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });

