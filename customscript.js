const navLinks = document.querySelectorAll("nav a")
const navTextCopy = document.getElementById("nav_big_text")
var nameCopy = document.getElementById("big_name")



nameCopy.classList.add("big_name_active")

// Hover effect, big text 
for (let i=0; i<navLinks.length; i++){
  navLinks[i].addEventListener("mouseover",function(){
    let navLinkText = this.textContent
    navTextCopy.textContent = navLinkText
    navTextCopy.classList.add("big_text_active")

    nameCopy.classList.remove("big_name_active")
  })
  
  navLinks[i].addEventListener("mouseout",function(){

    let navLinkText = this.textContent
    navTextCopy.textContent = navLinkText; 
    navTextCopy.classList.remove("big_text_active")

    nameCopy.classList.add("big_name_active")
  })
}