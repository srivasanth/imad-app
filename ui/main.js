console.log('Loaded!');

var element = document.getElementById ('main-text');
element.innerHTML = 'hi this is changed by the javascript file';

//move the image
var img = document.getElementById('madi');
img.onClick = function() {
    img.style.marginleft = '200px';
};