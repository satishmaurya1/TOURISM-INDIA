let searchbtn = document.getElementById("search-btn")
let loginbtn = document.getElementById("login-btn")
let searchbar = document.querySelector(".search-bar-container")
let loginform = document.querySelector(".login-form-container")
let closeform = document.getElementById("form-close")
let menubar = document.getElementById("menu-bar")
let navbar = document.querySelector(".navbar")
let videoBtn= document.querySelectorAll(".vid-btn")


window.onscroll=()=>{
    searchbtn.classList.remove("fa-times")
    searchbar.classList.remove("active")
}

searchbtn.addEventListener('click',()=>{
    searchbtn.classList.toggle("fa-times")
    searchbar.classList.toggle("active")
})

loginbtn.addEventListener('click',()=>{
    loginform.classList.toggle("active")
})

closeform.addEventListener('click',()=>{
    loginform.classList.remove("active")
})

menubar.addEventListener('click',()=>{
    menubar.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})


videoBtn.forEach(btn=>{

    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src=src

    })
})
