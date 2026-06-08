const cards = document.querySelectorAll(".image-card");

function filterImages(category){

cards.forEach(card=>{

if(category==="all"){
card.style.display="block";
}
else{
card.style.display=
card.classList.contains(category)
? "block"
: "none";
}

});

}

function searchImages(){

const input=document
.getElementById("searchInput")
.value
.toLowerCase();

cards.forEach(card=>{

const text=card.textContent.toLowerCase();

if(text.includes(input)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}

const images=document.querySelectorAll(".image-card img");

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const close=document.querySelector(".close");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

close.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){
lightbox.style.display="none";
}

});

document.getElementById("topBtn").onclick=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

};
