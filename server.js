var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var  articles = {
'article-one' : {
title : 'Article one | vasanth',
heading: 'Article one',
date: 'serp 5 2017',
content:` <p>
This is the content of the first paragraph and 
the content of my article article one .
</p>
<p>
This is the content of the first paragraph and 
the content of my article.
</p>
<p>
This is the content of the first paragraph and 
the content of my article.
</p>
</div>
    `
},
'article-two' : {
title : 'Article Three | vasanth',
heading: 'Article three',
date: 'serp 5 2018',
content:` <p>
 the content of the first paragraph and 
the content of my article.
</p>
<p>
this is content of article two . This is the content of the Second paragraph  article two and 
the content of my article.
</p>
<p>
This is the content of the first paragraph and 
the content of my article.
</p>
</div>
    `
},
'article-three' : {
title : 'Article Three | vasanth',
heading: 'Article one',
date: 'serp 5 2017',
content:` <p>
This is the content of the ARTICLE THREE first paragraph and 
the content of my article.
</p>
<p>
This is the content of the Third Article article and 
the content of my article.
</p>
<p>
This is the content of the first paragraph and 
the content of my article.
</p>
</div>
    `
}
};
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = `<html>
<head>
    <link rel="stylesheet" href="/ui/style.css">
<title>${title}</title></head>
<body>
   <div class="container"> 
   <div> <a href="/">Home</a></div>
       
     <hr>
    
<h2> This is heading of paragraph one </h2>
<p> This is a paragraph with  article one  </p>
<h3>
   ${heading}                                          
</h3>
<div> ${date} </div>
<div>
  ${content}
</div>
</div>
</body>

</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
