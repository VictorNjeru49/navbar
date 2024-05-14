const navLink= document.getElementById("navLink");
const menu= document.getElementById("menu");

// console.log(menu);

menu.addEventListener("click", ()=>{
    navLink.classList.toggle("active");
    console.log("clicked")
})

// const left = document.getElementById("controls");
// function controls(){
//     console.log("clicked");
// }