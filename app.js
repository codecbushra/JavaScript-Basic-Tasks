// Q#1

// alert('Welcome to JS land...\nHappy coding!')

//Q#2

// let std_Name = 'Ali'
// let std_Age = '15 years old'
// let std_Course = 'Certified Mobile App Development'
// alert(std_Name)
// alert(std_Age)
// alert(std_Course)

//Q#3

// document.write(`<p style="text-align: center; font-weight: bold;">Hello World</p>`);

// let email = 'ali@gmail.com'
// alert('The email address is '+email)
// alert(`Email is ${email}`)

//Q#4

//document.write('Yah! I can write HTML content through JavaScript')

//Q#5

// let age=15
// alert(`You are ${age} years old`)

//Q#6

//let birthYear=1990
//can't use \n for line break in document.write
// document.write(`The Birth year is ${birthYear}\nDatatype of birthYear is ${typeof(birthYear)}`)
// document.write(`<br>The Birth year is ${birthYear}<br>Datatype of birthYear is ${typeof birthYear}`)

//Q#7

// document.write(`<h1>Rules for naming JS variables</h1>
// <ol>
//     <li>Var names can only contain, numbers, $ and _. For example: $my_1stVar</li>
//     <li>Var name must begin with a letter, $, _ For example: $name, _name, name</li>
//     <li>Var names are case sensitive</li>
//     <li>Var names should not be JS keyword</li>
// </ol>`)

//Q#8

// let a=parseInt(prompt('Enter a 1st number',))
// let b=parseInt(prompt('Enter a 2nd number',))
// let sum = a+b
// document.write(`Sum of ${a} and ${b} is ${sum}`)

//Q#9

// let a=parseInt(prompt('Enter a 1st number',))
// let b=parseInt(prompt('Enter a 2nd number',))
// let sub = a-b
// document.write(`Subtractin of ${a} and ${b} is ${sub}`)

//Q9
// let a=parseInt(prompt('Enter a 1st number',))
// let b=parseInt(prompt('Enter a 2nd number',))
// let mul = a*b
// document.write(`Multiplication of ${a} and ${b} is ${mul}`)

//Q9
// let a=parseInt(prompt('Enter a 1st number',))
// let b=parseInt(prompt('Enter a 2nd number',))
// let divi = a/b
// document.write(`Division of ${a} and ${b} is ${divi}`)

//Q9
// let a=parseInt(prompt('Enter a 1st number',))
// let b=parseInt(prompt('Enter a 2nd number',))
// let mod = a%b
// document.write(`Modulus of ${a} and ${b} is ${mod}`)

//Q#10

// let anyVar='Hello'
// document.write(`Value after var declaration is: ${anyVar}`)
// let a=5
// document.write(`<br>Initial value: ${a}`)
// document.write(`<br>value after increment is: ${++a}`)
// a=a+7
// document.write(`<br>value after addition is: ${a}`)
// a=--a
// document.write(`<br>value after decrement is: ${a}`)
// document.write(`<br>The remainder is: ${a%3}`)

//Q#11
// tempInCel=25
// tempInFeh=(tempInCel*9/5)+32
// document.write(`${tempInCel} celsius is ${tempInFeh} fehrenheit`)
// tempInFeh=70
// tempInCel=(tempInFeh-32)*5/9
// document.write(`${tempInFeh} fehrenheit is ${tempInCel} celsius`)

//Q#12
// let USdollar=10
// let SaudiRiyals=25
// let totalPKR=(USdollar*155)+(SaudiRiyals*41)
// document.write(`<h1>Currency in PKR</h1>
// <p>Total currency in PKR: ${totalPKR} </p>`)

//Q#13

// var a=10
// document.write(`Result:<br> The value of a is ${a}`)
// document.write('<br>--------------------------------------------')
// a=++a
// document.write(`<br> The value of ++a is ${a}`)
// document.write(`<br> Now the value of a is ${a}`)
// document.write('<br>--------------------------------------------')
// a=a++
// document.write(`<br> The value of a++ is ${a++}`)
// document.write(`<br> Now the value of a is ${a}`)
// document.write('<br>--------------------------------------------')
// a=--a
// document.write(`<br> The value of --a is ${a}`)
// document.write(`<br> Now the value of a is ${a}`)
// document.write('<br>--------------------------------------------')
// a=a--
// document.write(`<br> The value of a-- is ${a--}`)
// document.write(`<br> Now the value of a is ${a}`)
// document.write('<br>--------------------------------------------')

//Q#14

var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;
//             1 -  0  +  1  + 1  = 3
// document.write(`a = ${a}
// <br>b = ${b}
// <br>result = ${result}`)
 result = --a;
// document.write(`a = ${a}
// <br>b = ${b}
// <br>result = ${result}`);
result = --a - --b;
// document.write(`a = ${a}
// <br>b = ${b}
// <br>result = ${result}`);
result = --a - --b + ++b;
//        -2 -  -2 +  -1
// document.write(`a = ${a}
// <br>b = ${b}
// <br>result = ${result}`);
result = --a - --b + ++b + b--;
//        -3 - -2  +  -1 +  -1
document.write(`a = ${a}
<br>b = ${b}
<br>result = ${result}`);


