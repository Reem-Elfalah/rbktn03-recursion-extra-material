/*
  Write a function that goes into a deeply nested array
  and returns the first non-Array value inside.
*/

const russianDoll = [[[[[[[[['🇷🇺']]]]]]]]]

function nestedRussianDoll(){
  let result = '';
  if(!Array.isArray(russianDoll))
    return russianDoll;
  return russianDoll.join('')
}

/*
  The internet is a dangerous place. Write a function that takes an
  array of words to censor. Return the original structure at the end.
  For example:
  Input: ['damn'], [{ id: 0, content: 'This is a damn good cake.', replies: [] }]
  Output: [{ id: 0, content: 'This is a **** good cake.', replies: [] }]
*/

const comments = [
  {
    id: 1,
    content: `Did I ever say I was a real baker? No, I didn't. You mf's on these comments are always trying to pick shit apart. Mind your damn business, I wasn't talking to you "A Baker". Now that's being rude!!`,
    replies: [
      {
        id: 2,
        content: `oh good GOD, it is a cake recipe site....take your "facebook balls" and your miserable personality out somewhere else....always a troll, I swear`,
        replies: []
      },
      {
        id: 3,
        content: `i agree that was unnecessary why do people have to come to sites and start arguments if u are not talking about what the subject is find some were else to run your mouth`,
        replies: [
          {
            id: 4,
            content: `You do realize your just did what you're complaining about right?`,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    content: `I appreciate the effort it took to put the cake up and I will be using this for my grandson`,
    replies: []
  }
]

 
function removeBadWords(){
      let keys = Object.keys(comments[0])
      for (let j = 0; j < keys.length; j++){
        if(typeof comments[0][keys[j]] === 'string')
        comments[0][keys[j]] = replace(comments[0][keys[j]]);
    }
    return comments
  }   

function replace(input){
 return input.replace(/shit|mf's|damn/gi,'****');

}


// fizzBuzz is a common interview problem but is usually done with a 'for loop' and not recursively.
// Create a recursive fizzBuzz. If you are unfamiliar, fizzBuzz loops through 1 - 100 and prints either
// 'fizz', 'buzz', 'fizzbuzz', or the number itself.
// If a number is divisible by 3, print 'fizz'.
// If a number is divisible by 5, print 'buzz'.
// If a number is divisible by 3 and 5, print 'fizzbuzz'.
// Otherwise print the number itself.
let n = 1;
function fizzBuzz() {
  let result;
  if(n < 100){
if(n % 3 === 0 && n % 5 === 0)
  result = "fizzBuzz";
else if(n % 3 === 0)
  result = "fizz";
else if(n % 5 === 0)
  result = "buzz";
else result = n
n++; 
return result + '\n' + fizzBuzz();
}
}
// Create a recursive funciton that will take any string and return a boolean based on whether or
// not it is a palindrome.
// palindrome("abba") ==> true
// plindrome("abbaa") ==> false
function palindrome(str) {
  let result;
  if(str !== ''){
 if(str.length % 2 !== 0)
  return false;
else if(str.slice(0,1) !== str.slice(str.length - 1))
  return false;
else return palindrome(str.slice(1).slice(0,-1));
  }
  return true;
}

// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
// Examples:
//
// lucasNumber(0)   // => 2
// lucasNumber(1)   // => 1
// lucasNumber(2)   // => 3
// lucasNumber(3)   // => 4
// lucasNumber(5)   // => 11
// lucasNumber(9)   // => 76
function lucasNumber(n) {
  if(n === 0)
    return 2;
  else if(n === 1)
    return 1;
  return lucasNumber(n - 1) + lucasNumber(n - 2);
}


// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// sumArray([4, 10, -1, 2]) // => 15
function sumArray(array) {
  if(array.length === 0)
    return 0;
  return array.shift() + sumArray(array)
}


// Write a function makeChange(n, array), that take in a number and an array.
// The function should return in an array with the number of times we can change that amount
// with 25, 10, 5, 1
// Example:
//
// makeChange(100, [0,0,0,0]) ==> [4, 0, 0, 0]
// makeChange(168, [0, 0, 0, 0]) ==> [6, 1, 1, 3]
function makeChange(n, array){
 if(n === 0){
 return array;}
else if(n >= 25)
  return makeChange(n - 25, [array[0]+1, 0, 0, 0])
else if (n >= 10)
  return makeChange(n - 10, [array[0], array[1]+1, 0, 0])
else if (n >= 5)
  return makeChange(n - 5,[array[0], array[1], array[2]+1, 0])
else 
  return makeChange(n - 1, [array[0], array[1], array[2], array[3]+1])
}

// Write a function that takes in an array of numbers and returns the maximum value of that array
// Solve this recursively 


function findMax(arr){
  if(arr.length === 1)
    return arr[0];
  else if(arr[0] < arr[1]){
        arr.splice(0,1);
    return findMax(arr);
  }
  else {arr.splice(1,1);
    return findMax(arr)
  }
}