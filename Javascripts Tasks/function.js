/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// let number=3;
// let name="Alice";
// let location="Jordan";
// let title= "software engineer";
// Function tellFortune(number,name,location,title)
//  console.log(`You will be a ${title} in ${location}, and married to ${name} with ${number}.`);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
// calculateDogAge(1);
// function calculateDogAge(year){
 // let dogYear=7/year;
 // console.log(`Your doggie is ${dogYear} years old in dog years`);
// }


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
/*calculateSupply(30, 3);
function calculateSupply(age,amountPerDay){
  let rest=100-age;
  let amount=rest*amountPerDay*365;
  console.log(`You will need ${amount} cups of tea to last you until the ripe old age of 100`);
}

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
Ex: greet("Adam")
=> "Hello Adam"
*/
/*greet("farah");
function greet(name){
  console.log(`Hello ${name}`);
}

/*
5
what is the error:
function double(cat) {             // X is undefined
  return 2 * x;
}
function double(7) {              // argument must be a variable
  return 2 * 7;
}
function double('7') {            // argument must be variable, and we cant multiply string 
  return 2 * 'x';
}
*/



/*
6
fix these functions:
func double1(x {
  return 2 * x ;                             
}
functiondouble2 x)
return 2 * x;
}
function (x) double3 {
  return 2 * x;
*/
/*function double1(x) {
  return 2 * x ;                             
}

function double2(x){ 
return 2 * x;
}

function double3(x) {
  return 2 * x;}


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number
Ex: cube(4)
=> 64
*/
/*console.log(cube(4));
function cube(num){
  return num*num*num
}

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
/*console.log(multiply(3,4));
function multiply(num1,num2){
  return num1*num2;
}

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"
Ex: canIGetADrivingLicense(21)
=> "yes you can"
Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"
Ex: canIGetADrivingLicense(20)
=> "yes you can"
*/
/*canIGetADrivingLicense(18);
function canIGetADrivingLicense(age){
  if(age>=20){
    console.log("Yes you can");
  } else { let remain=20-age;
    console.log(`Please come back after ${remain} years to get one`);}
}

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.
**hint: how we can know string length   Ex: : "tree".length   => 4
Ex: sameLength("tree","clue")
=> true
Ex: sameLength("tree","car")
=> false
*/
/*console.log(sameLength("tree","car"))
function sameLength(string1,string2){
  if(string1.length===string2.length){
    return true;
  }else return false;
}
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers
Ex: largerNubmer(5,6)
=> 6
Ex: largerNubmer(5,3)
=> 5
*/
/*console.log(largerNumber(5,6));
function largerNumber(num1,num2){
  if(num1>num2)  return num1;
  else return num2;
}

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number
Ex: smallerNubmer(8,6,7)
=> 6
Ex: smallerNubmer(5,99,34)
=> 5
Ex: smallerNubmer(5,99,3)
=> 3
Ex: smallerNubmer(5,3,3)
=> 3
*/
/*console.log(smallerNubmer(2,8,1));
function smallerNubmer(num1,num2,num3){
  let arr=[num1,num2,num3];
  let min=Infinity;
  for(let i=0;i<arr.length;i++){
    if (min>arr[i]){
      min=arr[i];
    }} 
return min;  }

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
Ex: shorterString("air","school","car","by","github")
=> by
Ex: shorterString("air","tr","car","by","github")
=> tr
Ex: shorterString("by","tr","car","air","github")
=> by
Ex: shorterString("air","by","car","school","github")
=> by
Ex: shorterString("air","tr","by","car","github")
=> by
Ex: shorterString("air","tr","car","github","by")
=> by
*/
/*console.log(shorterString("air","tr","by","car","github"));
function shorterString(str1,str2,str3,str4,str5){
  let arr=[str1,str2,str3,str4,str5];
  let minStr=Infinity;
  for(let i=0;i<arr.length;i++){
    if(minStr>arr[i].length) minStr=arr[i];
  }
  return minStr;
}

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string
Ex: longerString("air","school","car","github")
=> school
Ex: longerString("air","school","car","github")
=> github
try all the cases (change the order of the longestString)
*/
/*console.log(shorterString("air","tr","by","car","github"));
function shorterString(str1,str2,str3,str4,str5){
  let arr=[str1,str2,str3,str4,str5];
  let minStr="";
  for(let i=0;i<arr.length;i++){
    if(minStr.length>arr[i].length) minStr=arr[i];
  }
  return minStr;
}

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/
/*console.log(isEven(1));
function isEven(num){
  if(num%2===0){
    return true;
  }else return false;
}

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/
/*console.log(isOdd(1));
function isOdd(num){
  if(num%2!==0){
    return true;
  }else return false;
}


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/
/*console.log(positive(-5));
function positive(num){
  if(num>0) return num;
  else return Math.abs(num);
}

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
/*
function fullName(fname,lname){
  return `${fname}+${lname}`;
}

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
Ex: average(1,2,3,4,5)
=> 3
Ex: average(5,7,9,3,5)
=> 5.8
*/
/*console.log(average(5,7,9,3,5));
function average(num1,num2,num3,num4,num5){
  let sum=0;
  let arr=[num1,num2,num3,num4,num5];
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  let avg=sum/arr.length;
  return avg;
}

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN
Ex: randomNumber()
=> 0.2278
Ex: randomNumber()
=> 0.475
*/
/*console.log(randomNumber());
function randomNumber(){
  return Math.random();
}
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN
Ex: randomBetweenNumbers(1,8)
=> 7.5412
Ex: randomBetweenNumbers(3,100)
=> 23
*/
/*console.log(randomBetweenNumbers(1,8))
function randomBetweenNumbers(num1,num2){
  return Math.random() * (num2 - num1) + num1;
}

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49
Ex: scoreInUniversty(96)
=> "A"
Ex: scoreInUniversty(3)
=> "F"
Ex: scoreInUniversty(71)
=> "C"
*/
/*console.log(scoreInUniversty(3));
function scoreInUniversty(mark){
  if(mark>=95 && mark<=100) return "A";
  else if(mark>=85 && mark<=94) return "B";
  else if(mark>=70 && mark<=84) return "C";
  else if(mark>=50 && mark<=69) return "D";
  else if(mark>=0 && mark<=49) return "F";

}
*/
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/
//let i=0;
//console.log(counter());
//console.log(counter());
//function counter(){
// return i++;
// }

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/
//console.log(resetCounter());
//function resetCounter(){
  //return `${i-1} and the counter reset now`;
 // i=0;
//}