document.cookie = "isAdmin=false";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkCookie() {
    let isAdmin = getCookie("isAdmin");
    if (isAdmin === "true") {
        alert("Yay! You logged in. This is typically where a Flag would be!");
      } else {
        alert("You must be an admin to log in to the admin panel.")
      }
}