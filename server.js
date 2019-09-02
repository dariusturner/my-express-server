
const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: dariusot731@gmail.com");
});

app.get("/about", function(req, res){
  res.send("<h1>Hi, my name is Darius Turner!</h1><p>I am a full stack developer looking to better my skills to become a master in the development.</p>")
});

app.get("/hobbies", function(req, res){
  res.send("<h3>My Hobbies</h3><ul><li>Coding</li><li>Learning</li><li>Movies</li><li>Cruises</li></ul>");
});

app.listen(3000, function() {
  console.log("Server has started on port 3000");
});
