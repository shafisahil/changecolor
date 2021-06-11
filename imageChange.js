const image = document.querySelectorAll(".imgch");
image.forEach(img => {
    img.addEventListener("CLICK") =>{
  removeActiveClasses() 
  imgch.classList.add("active")     
    
})
function removeActiveClasses(){
    image.forEach(img =>{
        img.classList.remove('active')
    } )
}}