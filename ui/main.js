console.log('Loaded!');

var element = document.getElementById ('main-text');
element.innerHTML = 'hi this is changed by the javascript file';

//move the image
var img = document.getElementById('madi');
function moveLeft () {
    
}
img.onClick = function() {
    var interval = setInterval(moveleft,100);
    img.style.marginleft = '200px';
};