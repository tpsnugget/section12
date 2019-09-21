window.onload = function() {
   var isEvenInput = getIsEvenInput()
   var booleanAnswer = isEven( isEvenInput )
   printIsEvenToDOM( booleanAnswer )

   var factorialAns = factorial( isEvenInput )
   printFactorialAnsToDOM( factorialAns )

   var userStr = getUserStr()
   userStr = convertKebabToSnake( userStr )
   printSnakeToDOM( userStr )
}

function getIsEvenInput() {
   return isEvenInput = prompt("Enter a number")
}

function isEven( num ) {
   num = Number(num)
   if ( num % 2 === 0) { return true }
   else { return false }
}

function printIsEvenToDOM( ans ) {
   var e = document.getElementById("textGoesHere")
   var f = document.createElement("p")
   if ( ans ) { f.innerText = "You entered an even number" }
   else { f.innerText = "You entered an odd number" }
   e.appendChild( f )
}

function factorial( num ) {
   num = Number(num)
   var factorialAns = num

   if ( num === 0 ) { return 1 }

   for ( var i = num; i > 1; i-- ) {
      factorialAns = factorialAns * ( i - 1 )
   }
   return factorialAns
}

function printFactorialAnsToDOM( ans ) {
   var e = document.getElementById("textGoesHere")
   var f = document.createElement("p")
   f.innerText = "The answer to the factorial problem is " + ans
   e.appendChild( f )
}

function getUserStr() {
   var userStr = prompt("Enter a kebab case string (use - )")
   return userStr
}

function convertKebabToSnake( str ) {

   var newStr = ""

   for ( var i = 0; i < str.length; i++ ) {
      if ( str[i] === "-" ) {
         newStr += "_"
      }
      else {
         newStr += str[i]
      }
   }

   return newStr
}

function printSnakeToDOM( str ) {
   var e = document.getElementById("textGoesHere")
   var f = document.createElement("p")
   f.innerText = "The Snake Case is: " + str
   e.appendChild( f )
}