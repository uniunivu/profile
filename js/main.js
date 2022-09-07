
// -----------點圖片出現大圖------------

var library1 = document.getElementById("library1");
var library2 = document.getElementById("library2");
var library3 = document.getElementById("library3");
var outline = document.getElementById("outline");
var showimg = document.getElementById("showimg");


library1.addEventListener('click', open);

function open(){
    
    showimg.firstChild.src = library1.src;
    outline.style.display = "block";
    console.log("ok");

    outline.onclick = function() {
        outline.style.display = "none";
        console.log("close");
    };

}
library2.addEventListener('click', open2);

function open2(){
    
    showimg.firstChild.src = library2.src;
    outline.style.display = "block";
    console.log("ok");

    outline.onclick = function() {
        outline.style.display = "none";
        console.log("close");
    };

}
library3.addEventListener('click', open3);

function open3(){
    
    showimg.firstChild.src = library3.src;
    outline.style.display = "block";
    console.log("ok");

    outline.onclick = function() {
        outline.style.display = "none";
        console.log("close");
    };

}
