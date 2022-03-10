const img = document.querySelector(".img-main");

// get imgs create an array with key and value of key 
let images = [
    {"src": "pics/1.jpg"},
    {"src": "pics/2.jpg"},
    {"src": "pics/3.jpg"},
    {"src": "pics/4.jpg"},
    {"src": "pics/5.jpg"},
    {"src": "pics/6.jpg"},
    {"src": "pics/7.jpg"},
];

// create function for loading image
function loadImage() {
    let src = img.getAttribute("src");
    let imageInfo = images[Math.floor(Math.random() * images.length)];
    while(src === imageInfo.src){
        imageInfo = images[Math.floor(Math.random() * images.length)];
    }

    img.setAttribute("src", imageInfo.src);
    img.setAttribute("alt", imageInfo.alt);

}

// on click "listen for click "
img.addEventListener("click", () => {
    loadImage();
});

document.body.addEventListener("keydown", e => {
    if(e.key === " "){
        loadImage();
    }
});

// call function 
loadImage();