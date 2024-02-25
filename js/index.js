document.querySelector("#open").addEventListener("click",()=>{
    // console.log("jyy");
    document.querySelector(".mobile-nav").style.right = "0";
    // document.querySelector(".humber-manu").style.display = "none";
})
document.querySelector("#close").addEventListener("click", () => {
    // console.log("by");
    document.querySelector(".mobile-nav").style.right = "-100%";
    // document.querySelector(".humber-manu").style.display = "inline";


})