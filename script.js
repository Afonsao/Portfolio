let count = 1;
document.getElementById("radio__one").checked = true;

setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count > 2){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
    
}