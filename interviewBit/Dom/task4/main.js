const app = document.querySelector(".todo");
app.addEventListener("click",(e)=>{
    if(e.target && e.target.classList.contains("item")){
        console.log("you Clicked on :"+e.target.innerText);
    }
});