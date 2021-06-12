const image = document.querySelectorAll(".imgch");
image.forEach(imgch => {
    imgch.addEventListener("click", () =>{
  removeActiveClasses() 
  imgch.classList.add("active")     
    })   
})
function removeActiveClasses(){
    image.forEach(imgch =>{
        imgch.classList.remove('active')
    } ) 
}