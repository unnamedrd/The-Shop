let closeBtn = document.querySelector('#closeButton');
let shopBtn = document.querySelector('#cart')
let sidebar = document.querySelector('.sidebar')


closeBtn.addEventListener("click", function(){
    console.log("this works")
    sidebar.classList.toggle('showSidebar')
})

shopBtn.addEventListener("click", function(){
    console.log("this works too")
    sidebar.classList.toggle('showSidebar')
})