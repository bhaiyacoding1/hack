document.querySelector("#open").addEventListener("click",()=>{
    // console.log("jyy");
    document.querySelector(".mobile-nav").style.right = "0";
    document.querySelector(".hero-section").style.zIndex = "4";
})
document.querySelector("#close").addEventListener("click", () => {
    // console.log("by");
    document.querySelector(".mobile-nav").style.right = "-100%";
    document.querySelector(".hero-section").style.zIndex = "5";


})