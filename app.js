const hamburger=document.querySelector("#hamburger")
const menu=document.querySelector("#menu")
const change=document.querySelector("#change")
const body=document.querySelector("body")
const hlinks=document.querySelector("#hLink")
hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})
hlinks.array.forEach(link=> {
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    
})
})
moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
  })