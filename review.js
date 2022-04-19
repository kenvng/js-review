/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
// let review
// 2.) Change the value of this variable
// review = 1
// 3.) Change the data type of this variable
review = "ken"
// console.log(review)
// console.log(typeof(review))
// 4.) Create another variable and the one from above to concatenate
let review2 = "ken2" + review
// console.log(review2)
// 5.) Use any of the variables above or create new ones and print using string interpolation
let newOne = "Hello"
// console.log(`${newOne} ${review}`) // interpolation
// console.log(newOne + " " +review)
// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
// let myName = "Sabrina"
// console.log(myName.charAt(4))

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// Unicode, formally the Unicode Standard, is an information technology standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems.
// console.log("Ken".charCodeAt(2)) // return the value in UTF-16 format

// Using fromCharCode() - make it readable for us :). You'll see!
// console.log(String.fromCharCode(72, 101, 108, 108, 111)) // Translate UTF-16 code to readable letter

// Take your first and last name and concat()
// console.log("Ken".concat(" Nguyen"))

// Create a string and make it return true using startsWith()
// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat'));
// // expected output: true

// console.log(str1.startsWith('Sat', 3));
// expected output: false


// // Now use any variable with endsWith() and return false
// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best', 17));
// // expected output: true

// const str2 = 'Is this a question';

// console.log(str2.endsWith('?'));
// // expected output: false


// Finish the following sentence. Use includes() and return true.
// const ozgur = 'Once upon a time Ozgur looked up at the Moon, ' + "and said: 'it was amazing'"
// console.log(ozgur.includes("said"))


// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
// console.log(joshHadALittleLambOopsCow.indexOf('cow'))  // the index of "cow" is 149


// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
// console.log(vanessa.lastIndexOf('Vanessa')) // Vanessa is on index 39

// console.log(vanessa)
// console.log(vanessa.substring(0, vanessa.lastIndexOf('Vanessa')) + vanessa.substring(vanessa.lastIndexOf('Vanessa') + 7))
// console.log(vanessa.substring(0, vanessa.lastIndexOf('Vanessa')))
// vanessa.substring(vanessa.lastIndexOf('Vanessa') + 7)

// console.log(vanessa.split('Vanessa'))
// console.log(vanessa.split('Vanessa', ''))

// const remove = vanessa.slice(39, 46)

// console.log(remove)
// console.log(vanessa.replace(remove, ''))
// console.log(vanessa)

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

// console.log(animals.lastIndexOf('Tiger'));
// expected output: 1



// Can we use length for strings? I don't know, you tell me.
// const noWeCantTeo = "but did you try it out though?"
// console.log(noWeCantTeo.length) // The string length is 30 characters long



// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
// const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
// console.log(replaceGokuWithVegeta.replace('Goku', 'my ex'))



// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
// const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
// console.log(joshIsLookingForWifey.search('wifey 2'))


// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
// const pizzaSentence = "pizza, other half of pizza"
// console.log(pizzaSentence.slice(7))


// Now using the pizza sentence, return only pizza (before the comma)
// const pizzaSentence = "pizza, other half of pizza"
// console.log(pizzaSentence.slice(0,5))


// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"

// console.log(splitTheBill.split(', '))
// console.log(splitTheBill.replace("and ", "").replace(/[,]\s/g, " ").split(" "));
// console.log(splitTheBill.replace(/and /, "").replace(/[,]\s/g, "").split(''));

// console.log(splitTheBill.replace('and').split(' '))

// console.log(splitTheBill.split(' '))
// splitTheBill.split(' ')

// const str = 'one two three four';

// const withoutLast2Words = str.split(' ').slice(0, -2).join(' ');
// console.log(withoutLast2Words); // 👉️ 'one two'





// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
// console.log(splitTheBill.split(''))


// Use this toLowerCase()
// const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."



// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out.
// console.log(angry.toLowerCase())

// toUpperCase()
// const jahlunSaidToPutSomeRespectToHisName = "jahlun"
// console.log(angry.toUpperCase())


// substring()
// on the chopping block...

// Returns "ell"
// const basicGreeting = "Hello World"
// console.log(basicGreeting.substring(1,4))


// Returns "JavaScript"
// const ohReally = "JavaScript Substring"
// console.log(ohReally.substring(0,10))


// Returns aol.com
// const aslDays = "xXteoWuzHereXx@aol.com"
// console.log(aslDays.substring(aslDays.indexOf('@' +1)))
// console.log(aslDays.substring(aslDays.indexOf('a')))



// trim()
// let varTrim = ' This '
// console.log(varTrim)
// console.log(varTrim.trim())
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.


// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

// console.log(a < b)
// console.log(c > b)
// console.log(d === d)
// console.log(d != a)
// console.log(a < 15)
// console.log(a + b === c)
// console.log(c > b === a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
  for (let i = 1; i < 11; i++) {
    // console.log(`I am having a headache!`)
  }

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
// let teo = "Teo"
for (let i = 1; i < 21; i++) {
  // console.log(`${teo} is spinning twenty times!`)
}


// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let i = 0
while(i < 20) {
  i++
// console.log(`I am sorry.`)
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 
// for (variable in object) {
//   statement
// }

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clotes',
  thing3: 'gaming console'
}
for(const property in whateverQueenBeySaid) {
  // console.log(`${property}: ${whateverQueenBeySaid[property]}`);
  // console.log(`${property}`)
}
// OUTPUT //
// thing1: shoes
// thing2: clotes
// thing3: gaming console

// OUTPUT //
// thing1
// thing2
// thing3



// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for(const index in lana) {
  // console.log(`${index}`)
}


// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
for(const element of tia) {
  // console.log(element);
}



// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
// perscholas.forEach(element => console.log(element));
perscholas.forEach(function(element) {
  const adNew = "PS"
  // console.log(element + adNew)
})





// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

// push(element0)
// push(element0, element1)
// push(element0, element1, /* ... ,*/ elementN)

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


// pop()
// The pop() method removes the last element from an array and returns that element.This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());
// // expected output: "tomato"

// console.log(plants);
// // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// plants.pop();

// console.log(plants);
// // expected output: Array ["broccoli", "cauliflower", "cabbage"]


// unshift()
// Array.prototype.unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));
// // expected output: 5

// console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


// shift()
// Array.prototype.shift()
// The shift() method removes the first element from an array and returns that removed element.This method changes the length of the array.

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
// // expected output: Array [2, 3]

// console.log(firstElement);
// // expected output: 1



// concat()
// Array.prototype.concat()
// The concat() method is used to merge two or more arrays.This method does not change the existing arrays, but instead returns a new array.

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]



// splice()
// Array.prototype.splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and / or adding new elements in place.To access part of an array without modifying it, see slice().

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]



// slice()
// Array.prototype.slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end(end not included) where start and end represent the index of items in that array.The original array will not be modified.

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// includes()
// // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// indexOf()
// // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// length
// // The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.



const fruits = ['apple', 'banana', 'orange']

// Print banana
// console.log(fruits[1])


// Let's turn it up a notch. I won't tell you what array methods to use. 


// JOIN() METHOD //  Joining all into a string and sepepage them with space (' ') or commas and space (', ') or nothing at all ('')
// Join all the elements of the array into a string separated by a space.
// console.log(fruits.join(' '))

// // SAME THING BUT USING  FUNCTION
// function func() {
//   // let fruits = ['apple', 'banana', 'orange'];  // do not need this line since fruits array already created outside the function (ABOVE) ^^^
  // console.log(fruits.join(' '));
// }
// func();

//////////////////////////////////////////////////////////////////////////

// POP() METHOD // removing the last element from an array
// Remove orange
// console.log(fruits.pop()) // display the last item that pop() method removes
fruits.pop(), 
// console.log(fruits) // use pop() method to remove last item in the array and then display the array without the last item removed

// USING FRUNCTION //
// function func() {
//   // const fruits = ['apple', 'banana', 'orange']
//   // console.log(fruits.pop()) // display the removing item/value
//   // console.log(fruits)
//   fruits.pop(), console.log(fruits)

// }
// func()

//////////////////////////////////////////////////////////////////////////

// PUSH() METHOD //  Adding one or more elements to the end of an array
// Add strawberry, kiwi, and grapes at the end
// // console.log(fruits.push('apple', 'banana', 'orange'))  // add elements to an array and display only the length of elements in an array
fruits.push('strawberry', 'kiwi', 'grapes'), 
// console.log(fruits) // add elements to an array and display the whole array

// USING FRUNCTION //
// function func() {
//   fruits.push('apple', 'banana', 'orange')
//   console.log(fruits)
// }
// func()

/////////////////////////////////////////////////////////////////////////

// SHIFT() METHOD // Removing the first element from an array
// Remove apple
// console.log(fruits.shift())
// console.log(fruits)

// USING FRUNCTION //
// function func() {
//   fruits.shift()
//   console.log(fruits)
// }
// func()

/////////////////////////////////////////////////////////////////////////

// UNSHIFT() METHOD // Adding one or more elements at the beginning of an array
// Add mango at the beginning of the array
fruits.unshift('mango')
// console.log(fruits)

// USING FRUNCTION //
// function func() {
//   fruits.unshift('mango')
//   console.log(fruits)
// }
// func()

/////////////////////////////////////////////////////////////////////////

// REFERENCE /////////////////////////////////////
//  //
//////////////////////////////////////////////////


// SPLICE() METHOD // Adding or removing element or elements in an array
// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, 'lemon', 'grapefruit')
// console.log(fruits)
// OR //


// EXAMPLE //
// let colors = ['red', 'green', 'blue'];
// colors.splice(2, 0, 'purple');
// console.log(colors); // ["red", "green", "purple", "blue"]

// let colors = ['red', 'green', 'blue'];
// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors);
// colors.splice(0, 2,); // starting at the index 2 and remove the rest.
// console.log(colors);
// // ["red", "yellow", "pink", "green", "purple", "blue"]


// USING FRUNCTION //
// function func() {
//   fruits.unshift('mango')
//   console.log(fruits)
// }
// func()

////////////////////////////////////////////////////////////////////////

// Remove banana and strawberry
// fruits.splice(3, 2)
// console.log(fruits)

// OR //

fruits.splice(fruits.indexOf('banana'), 2)
// console.log(fruits)


///////////////////////////////////////////////////////////////////////

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ['guava', 'lyche', 'durian']
const fruitsBasket = fruits.concat(exoticFruits)
// console.log(fruitsBasket)




// Print the last two exotic fruits without altering the newly concatenated array.
// console.log(fruitsBasket.slice(-2))


///////////////////////////////////////////////////////////////////////////


// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsMessy.sort()
// console.log(monalissaIsMessy)

/////////////////////////////////////////////////////////////////////////////////

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
// console.log(mirrorMirrorOnTheWall)
const reversed =  mirrorMirrorOnTheWall.reverse()
// console.log('reversed:', reversed)


///////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
// ===== HIGHER ORDER METHODS ===== // NEED ATTENTION (SELF NOTE)
//////////////////////////////////////
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :)
// const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
// const arrRafael = RafaelNoBadWords.split(' ')
// console.log(arrRafael)
// console.log(arrRafael.filter(arrRafael => arrRafael.indexOf('badword')))
// console.log(arrRafael.join(' '))

// NEED ATTENTION (SELF NOTE)  ARROW FUNCTION =>
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
const arrayRafael = RafaelNoBadWords.split(" ")
// console.log(arrayRafael)
// console.log(arrayRafael.filter(arrayRafael => arrayRafael.indexOf('badword')).join(" "))

/////////////////////
// REDUCE() METHOD // NEED ATTENTION (SELF NOTE)
// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const totalNumber = numbersToAddUp.reduce(
  (previousValue, currentValue) => (previousValue + currentValue))
//   // console.log(previousValue)
//   // console.log(currentValue)
//   console.log(totalNumber)


// const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
// const totalNumber = numbersToAddUp.reduce(
//   (previousValue, currentValue) => { return previousValue + currentValue }, 'this is a string')
// // console.log(previousValue)
// // console.log(currentValue)
// console.log(totalNumber)

//////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////
// ===== SPREAD OPERATOR ===== // 
/////////////////////////////////
// Create a variable and assign a value of a copied array using the spread operator
// const num = [1, 2, 3]

// console.log(num)
// console.log(numbersToAddUp)  // FOR SELF - REFERENCE PURPOSE
const newArr = [...numbersToAddUp]
// console.log(newArr)
// console.log(...newArr)   // this will remove everything but texts


//////////////////////////////////////////////////////////////////////////////////

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const arr1 = ['one', 'two']
const arr2 = ['three', 'four']
let arr3 = [...arr1, ...arr2]
// console.log(arr3)

///////////////////////////////////////////////////////////////////////////////////

// Using the variable with the newly connected arrays, use spread operator to add something at the end.

arr3 = [...arr3, 'six']
// console.log(arr3)

///////////////////////////////////////////////////////////////////////////////////

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
arr3 = ['zero', ...arr3]
// console.log(arr3)


///////////////////////////////////////////////////////////////////////////////////
////////////////////////
// ===== ACCESS ===== //
////////////////////////

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [                                          // donutShop[1]
    ['orange', 'applecrumble'],              // donutShop[1][0]
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], 
        ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
// console.log('Here\'s your ' + donutShop[1][0][1] + ' donut, Anthony.  That\'s ll be $1.99.')

////////////////////////////////////////////////////////////////////////////////////////

// Tosi wants ihatethis. :) Print!
// console.log(donutShop[2][0][0][1][0] + ' is actually our most popular flavor, surpisingly.')




////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// ================================================= //
//                     IF/ELSE                       //
// ================================================= //
///////////////////////////////////////////////////////

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'




const teo = "person"
const gender = "male"
const food = "hungry"
if(teo === "person") {
  // console.log("Teo is a person!")
  if(gender === "male") {
    // console.log("You got this right!")
  }
  else {
    // console.log('Wrong, Teo is going to remove you from the class.')
  }
    if(food === "hungry") {
      // console.log("Let\'s by Teo tacos!")
      if(food !== "hungry") {
        // console.log("He doesn\'t need to eat.")
      }
      else {
        // console.log("If Teo is not hungry, am I hungry?")
      }
    }
}
else {
  // console.log("Teo is not a person!")
}





// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// Please see above for answer ^^^
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
// please see above for answer ^^^

////////////////////////////////////////////////////////////

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

let gustavo = 'coolest'

if(gustavo === 'coolest') {
  // console.log('You got that right!')
}
else {
  // console.log('James wants to argue.  He says he\'s the best')
}


///////////////////////////////////////////////////////
// ================================================= //
//                     FUNCTIONS                     //
// ================================================= //
///////////////////////////////////////////////////////

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'am/sir!'

// let = sayGreeting = function() {
//   console.log('Hello, ma\'am!')
// }
// sayGreeting()


// ????????????????????????????????????????????????????????????
// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
// let str = function('This is my (STRING)') {
//   console.log(str)
//   str.replace('(STRING)', '(Don\'t place with me haha.)')
//   console.log(str)
// }
// str()
// ???????????????????????????????????????????????????????????

// function toAparameter(some_string) {
//   console.log("This is my" + some_string);
// };
// let some_string = "any string";
// toAparameter(some_string);

function str(replacement) {
  console.log(`This is my ${replacement}`)
}
let replacement = "Dont\'t play with me haha."
// str(replacement)



// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add(one, two, three) {
  console.log(`${one}, ${two}, ${three}`)
}
// add('1', '2', '3')


// Order matters example
// function printName(firstName, lastName) {
//     // concatenation
//     console.log("Hi my name is " + firstName + ' ' + lastName)  // concatenation
//
//     // interpolation with template literals
//     console.log(`Hi my name is ${firstName} ${lastName}`)  // interpolation
// }
// printName('Teo', 'Marcelo')

//

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts

function fightClub(name) {
  if (name === 'Teo') {
    return 'You do not talk about Fight Club.'
  }
  else if (name === 'Manara') {
    return 'YOU DO NOT TALK ABOUT FIGHT CLUB.'
  }
  else if (name === 'Liv') {
    return 'If someone yells "Stop!", goes limp, taps out, the fight is over.'
  }
  else if (name === 'Devin') {
    return 'Only two guys to a fight.'
  }
  else {
    return 'No shrits'
  }
}
// console.log(fightClub('Teo'))
// console.log(fightClub('Namara'))
// console.log(fightClub('Liv'))
// console.log(fightClub('Devin'))
// console.log(fightClub('Ken'))



// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello() {
  console.log("hello");
  (function () {
    console.log('Goodbye')
  })()
}
hello()


// OR


// ARROW FUNCTION WITH NESTED FUNCTION
// function hello() {
//   console.log("Hello")
//   return () => {
//     console.log("Goodbye")
//   }
// }
// hello()
//   ()

// console.log(hello())

// function hello() {
//   console.log("hello");
//   (function () {
//     console.log('Goodbye')
//   })()
// }
// hello()

/////////////
// EXAMPLE //
// function declaration - RETURN
function sayAge() {
  return 'I am 99 years old!'
}

// console.log(sayAge())

// Assigning age with the function sayAge()
const age = sayAge()
// console.log(age)



// Create a function expression with your first name as the variable and then print your first and last name
let firstName = function() {
  return 'firstName' 
}
// console.log('Ken', 'Nguyen')



// Create an arrow function that accepts a number and have it return that number doubled
const num = () => {
  return num * 2
}
// console.log(num(2))


// ========== ARROW FUNCTIONS ===========

// MDN Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// WARNING: DON'T ASK ABOUT THIS OR SUPER YET. Just planting seeds...
// When to use, use it anytime to replace a function, HOWEVER, it is not recommended to use it inside objects. Reason: Arrow functions don't have their own bindings to 'this' or 'super', and should not be used as methods.

// Arrow functions came out in ES6. They provide a more concise syntax, and allows implicit return of a single expression.

// Anonymous function means a function without a name. Same as above, we are assigning a value of this anonymous function to goodbye
// const goodbye = () => {
//   console.log('goodbye')
// }

// goodbye()

// IMPLICIT RETURN
// const goodbye = () => console.log('hello Rahel')

// goodbye()

// Why use const for our arrow functions?
// To avoid having to erase the function's functionality
// let goodbye = () => console.log('goodbye')
// goodbye = 'hi'

// goodbye()


/////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// ================================================= //
//                     OBJECTS                       //
// ================================================= //
///////////////////////////////////////////////////////

// Create an object and call it human. Add a name, age, and location property. Give the properties values.



// Access the name using dot notation



// Access the age using square brackets



// Use object destructuring to access location

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
// console.log()


// Print cut



// Print Bulbahhhh!!!!!



// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)



// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)



// Print an array that contains every single properties in bulbasaur



// Print every single properties one by one in the console



// Print an array that contains every single values in bulbasaur


////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////  THE END  //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////





// HOISTING //

// func() // this is calling hoisting because you invoke the func before you are declaring a function

// function func() {
//   console.log("expression")
// }


// ARROW FUNCTION ==> //
// const func = () => {
//   console.log('expression')
// }
// func()