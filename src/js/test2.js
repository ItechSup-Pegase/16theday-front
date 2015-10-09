var source = document.querySelector("#template").innerHTML ; 
var template = Handlebars.compile(source);  
var html = template(data);
document.querySelector("body").innerHTML = html;