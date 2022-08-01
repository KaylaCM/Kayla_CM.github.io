/* .js files add interaction to your website */

var displayScript = document.getElementById("nameReturned");
var nameBtn = document.getElementById("nameBtn");

if (nameBtn) {
  nameBtn.addEventListener("click", generateScript);
}

function generateScript() {
  var name = document.getElementById("name").value;
  displayScript.innerHTML = "Hello, " + name + " this webpage on the ecological footprint will give you more information on what it is and why it is so important.";
}
