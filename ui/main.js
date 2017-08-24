//counter code
var button = document.getElementById('counter');
button.oncllick = function(){
  
  
  
  //render the variable in the correct span
  counter = counter +1;
  var span = document.getElementById('count');
  sapn.innerHTML = counter.toString();
   
    
};