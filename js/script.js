const popup = document.getElementById("popup"); 

const popupIMG = document.getElementById("popupIMG"); 

const close = document.querySelector(".close"); 

document.querySelectorAll(".planes").forEach(img => { 

img.addEventListener("click", () => { 

popupIMG.src = img.src; 

popup.style.display = "flex"; 

}); 

}); 

close.addEventListener("click", () => { 

popup.style.display = "none"; 

}); 

popup.addEventListener("click", (event) => { 

if (event.target === popup) { 

popup.style.display = "none"; 

} 

}); 

document.addEventListener("keydown", (event) => { 

if (event.key === "Escape") { 

popup.style.display = "none"; 

} 

}); 