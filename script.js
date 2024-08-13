// const openBtn = document.querySelector(".open-icon")
// const closeBtn = document.querySelector(".close-icon")
// const block = document.querySelector(".main-content")

// openBtn.addEventListener("click", function () {
//     block.classList.toggle("hover");
// });

// closeBtn.addEventListener("click", function () {
//     block.classList.toggle("hover");
// }); 
var sidebar = document.getElementById('sidebar');
var menuBtn = document.querySelector('.menu-btn');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let span = document.getElementById('nav-text')
var w = localStorage.getItem('width');

if (w === '200px') {
    sidebar.style.width = '200px';
    div1.innerHTML = '<a href="home.html" class="dropdown-btn"style="width: 30px;"><img src="svg/home-1-svgrepo-com.svg" />Home</a>';
    div2.innerHTML = '<a href="about.html" class="dropdown-btn"style="width: 30px;"><img src="svg/about-svgrepo-com.svg" />About</a>';
    div3.innerHTML = '<a href="support.html" class="dropdown-btn"style="width: 30px;"><img src="svg/contact-book-svgrepo-com.svg" />Services</a>';
    div4.innerHTML = '<a href="contact.html" class="dropdown-btn"style="width: 30px;"><img src="svg/support-svgrepo-com.svg" />Contact</a>';
    menuBtn.style.right = '48px'
    span.innerText = '☰ Menu'
}

function toggleSidebar() {
    if (sidebar.style.width === '200px') {
        newFunction();
        div1.innerHTML = '<a href="home.html" class="dropdown-btn"><img src="svg/home-1-svgrepo-com.svg" style="width: 30px;" /></a>';
        div2.innerHTML = '<a href="about.html" class="dropdown-btn"><img src="svg/about-svgrepo-com.svg" style="width: 30px;"/></a>';
        div3.innerHTML = '<a href="support.html" class="dropdown-btn"><img src="svg/contact-book-svgrepo-com.svg" style="width: 30px;"/></a>';
        div4.innerHTML = '<a href="contact.html" class="dropdown-btn"><img src="svg/support-svgrepo-com.svg" style="width: 30px;"/></a>';
        span.innerText = '☰'
        menuBtn.style.right = '8px'
        localStorage.setItem('width', '70px');
    } else {
        sidebar.style.width = '200px';
        div1.innerHTML = '<a href="home.html" class="dropdown-btn"><img src="svg/home-1-svgrepo-com.svg" style="width: 30px;" />Home</a>';
        div2.innerHTML = '<a href="about.html" class="dropdown-btn"><img src="svg/about-svgrepo-com.svg" style="width: 30px;" />About</a>';
        div3.innerHTML = '<a href="support.html" class="dropdown-btn"><img src="svg/contact-book-svgrepo-com.svg" />Services</a>';
        div4.innerHTML = '<a href="contact.html" class="dropdown-btn"><img src="svg/support-svgrepo-com.svg" />Contact</a>';
        menuBtn.style.right = '48px'
        setTimeout(() => {
            span.innerText = '☰ Menu'
        }, 150);
        localStorage.setItem('width', '200px');
    }

    function newFunction() {
        sidebar.style.width = '70px';
    }
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;


