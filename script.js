//active header sticky
const header = document.querySelector("header"); 
window.addEventListener("scroll", ()=>{ 
    header.classList.toggle("sticky", window, scrolly > 80)

})