var wDiv = document.getElementById('wrapper');
wDiv.style.backgroundColor = "red";

var liElem = document.getElementsByTagName('li');
liElem[1].innerHTML = "Changed";

var ptag = document.createElement('p');
ptag.innerHTML = "New Text";
document.body.appendChild(ptag);

var entry = document.createElement('li');
entry.innerHTML = "new list item";
document.getElementById('list').appen2dChild(entry);

var myBtn = document.getElementById('myButton');
myBtn.addEventListener("click", function(){
  console.log("button was clicked");
});
