const args = new URLSearchParams(window.location.search);
const parse = new DOMParser();
var subject=args.get("subject");
var message=args.get("message");

function onload(){
    if (subject !== null && message !== null) {
        OnSubmit();
    }
}

function OnSubmit(){
    Blog = document.getElementById("BLOG");
    var newHTML = "<post><div><h3>" + subject + "</h3>\n<p>" + message +"</p></div></post>";
    Blog.innerHTML += (parse.parseFromString(newHTML, "text/html").body.innerHTML);
}