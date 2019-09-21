window.onload = function() {
   var userName = whatIsYourName()
   printToTheDOM( userName )
}

function whatIsYourName() {
   return userName = prompt("What is your name?")
}

function printToTheDOM( userName ) {
   var e = document.getElementById("textGoesHere")
   var f = document.createElement("p")
   f.innerText = "Hi, " + userName + " it is nice to meet you!"
   e.appendChild( f )
}