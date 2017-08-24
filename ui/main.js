//counter code
var button = document.getElementById('counter');
button.oncllick = function(){
  
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
      if (request.readystate === XMLHttpRequest.DONE) {
          if (request.status===200){
              var counter = request.responseText;
              var span = document.getElementById('count');
  sapn.innerHTML = counter.toString();
   
          }
      }
      
  }; 
  
    request.open('GET', 'http://srivasanth200.imad.hasura-app.io/counter,true');
    reques.send(null);
 
};