let para = document.querySelector("p");
para.innerHTML = para.innerHTML
.split(" ")
.map((word)=>{
    return word.length>8
    ?`<span style="background-color:yellow">${word}</span>`:word
})
.join(" ");
