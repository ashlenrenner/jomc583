<html>
<head>
  <h1>javascript practice</h1>

<body>

</body>

</head>

</html>

// 1. write a function "farToCel" that receives a Fahrenheit temperature as a parameter and converts it to Celsius. The Celsius temperature should be output to the console.
// figure out how to round your output down, celcius should have no decimals. Use google if necessary. (i.e. google javascript round down)
// ouput whether or not it is hot, cold or fair outside based on:
// below 10 => cold
// 10 - 25 => fair
// 25+ hot

function farToCel (far){
//cel= (f-32) / 1.8
var cel = (far - 32) /1.8;
cel = math.floor(cel);
console.log(cel);

if (cel < 10){
  console.log("it's cold");
  else if (cel>=10 && cel <= 25) {
    console.log("it's fair");
    else if (cel > 25) {
      console.log ("it's hot");
    }

  }
}

}
farToCel(19);


// 2. write a function "sum" that will take a parameter array of numbers and print out the largest number in the array

var array = [10, 20, 30, 40];
function sumOfNumbers (arr){
  var sum = 0;
  for (var i in arr) {
    sum += arr[i];

  }
return sum;
}

var total = sumOfNumbers (array);
console.log(total);

// 3. write a function "greatestNumber" that will take a parameter array of numbers and print out the largest number in the array

var myArray = [10, 20, 30, 40];
function greatestNumber(arr){
  var largest = 0;
  for (var i in arr) {
    var currentNumber = arr[i];
    if (currentNumber > largest){
      largest = currentNumber;
    }

  }
return largest;
}

var greatest = greatestNumber (array);
console.log(greatest);

// 4. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. (hint: http://www.w3schools.com/jsref/jsref_charat.asp)

var myString = "hello im ashlen ";

function charFreq(str){

  var myCharacters = {};


    for (var i = 0; i < str.length; i++) {
      var currentChar = str.charAt(i);

      if (myCharacters[currentChar] === undefined){
        myCharacters[currentChar] = 0;
      }

      myCharacters[currentChar]++;
    }

    return myCharacters;

}

var frequency = charFreq(myString);
console.log(frequency);

for (var j in frequency){
  console.log(j + ": " + frequency[j]);
}
