const para = document.querySelector("p");
para.innerHTML = para.innerHTML.split(".").map((el)=>{
    return el+"</p><p>";
}).join(" ");