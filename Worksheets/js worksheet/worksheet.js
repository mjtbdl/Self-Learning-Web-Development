//console.log("Hello");//for print your codes in console

const myLuckyNumber = 20;

let quote = 'he said "hello"';

let scream = "    SHUT UP    "
let whisper = scream.trim().toLowerCase();//trim is used to cut unnecessary extra space at the beginning and end

let thing = 53
let smt = `there are ${thing} bird in there`;

const word = "bread"
let word2 = word.slice(1).replace('d','l');//this will slice the word from 1 and then replace d with l

"Toys".indexOf('T')//0 is the place of o
"Toys".indexOf('A')//-1 there is no A

let lottoNumbers = [12,13,15,45,65,78]; //defining an array

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']
leaderboard[1]='Luna'
leaderboard[3]='Draco';
//this will change harry with luna and hermione with draco

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']
planets.shift()//remove the first element of the array
planets.push('Saturn')//add an element to the end of an array
planets.unshift('Mercury');//add an element to start of an array 

let cats = ['cat1', 'cat2']
let dogs = ['dog1', 'dog2']
cats.concat(dogs);//will merge cats with dogs
cats.includes('Cat1');//false because we have cats not Cats.
party = cats.concat(dogs);
party.indexOf('cat1')//0
party.reverse()//will reverse the original party list
party.indexOf('cat1')//3

let numnum = [12,13,15,45,65,78,68,69,77,44]; 
numnum.slice(3)//start from third index in array
numnum.slice(3,5)//start from third end in 4
numnum.slice(-3)//last three index

let example = numnum
example.splice(1,0,'new')//add new before 1 delete 0 index from 1 to 0 length

const board = 
[ ['X','O','X'],
  ['O','X','O'],
  ['X','O','O'] ]

let human = {
    name: 'Jack',
    surname: 'Sparrow',
    heigh: 178,
    weight: 65,
    isDead: false,
    nicknames: ['pirate', 'idk', 'null1']
}

human["name"];//access to varible called name
human.name;//access to varible called name

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress=restaurant.address + " Brooklyn, NY 11206"

for (let i = 1; i<=10; i++){
    //console.log(i);
}//how to make a for loop in js

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for(let i = 0; i<people.length; i++){
    //console.log(people[i].toUpperCase())
}

const subreddits = ['funny','portugal','pics','england','lion']
for(let i = 0; i<subreddits.length; i++){
    //console.log(`visit reddit.com/r/${subreddits[i]}`)
}//one way to list every sub of subreddit with using for i.
for(let sub of subreddits){
    //console.log(`visit reddit.com/r/${sub}`)
}//another way list every sub of subreddit with using for..of 

let seatingChart = [
    ['jack','alfred','thomas','muller'],
    ['antonio','geffry','tom','dio'],
    ['liam','chris','mike','erika']
]
for(row of seatingChart){
    for(student of row){
        //console.log(student);
    }
}//another example to for...of

for(char of "Hello World"){
    //console.log(char);
}

const numbers = [1,2,3,4,5,6,7,8,9];
for(number of numbers){  
    //console.log(number*number);
}

const testScores={
    jack: 89,
    damon: 67,
    kim: 80,
    shawn: 75,
    marlon: 70,
    dwayne: 95,
    scarlet: 92,
    ryan: 50,
    li: 88,
    peter: 70
}
for(person in testScores){
    //console.log(`${person} scored ${testScores[person]}`);
}// because these types of objects not iterable you need to use for...in. keys of object in testScores are names and values are scores and entries are all information. 
for(names of Object.keys(testScores)){
    //console.log(names)
}
for(scores of Object.values(testScores)){
    //console.log(scores)
}
for(info of Object.entries(testScores)){
    //console.log(info)
}
    let average = Object.values(testScores)
    //console.log(average.length)//Objects dont have a length so to find length of an object you need to make an array


function rant(message){
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    }
//rant("hi")

function greet(firstName, lastName){
    console.log(`Hi, ${firstName} ${lastName[0]}.`)
}
//greet('Mecit', 'Bedel')

function repeat(input, time){
    let result=''
    for(i=0; i<time; i++){
        result += input
    }
    console.log(result)
}
//repeat('hi ',10)

function isSnakeEyes(d1,d2){
    if(d1===1 && d2===1){
        console.log("Snake Eyes!")
    }
    else{
        console.log("Not Snake Eyes!")
    }
}

function multiply(a,b){
    return a*b
}

function isShortsWeather(temp){
    if(temp>=75){
        return true
    }
    else{
        return false
    }
}

function lastElement(array){
    if(array.length===0){
        return null
    }
    else{
        return array[array.length-1]
    }
}

function capitalize(str){
    return str[0].toUpperCase()+str.slice(1)
}

function sumArray(arr){
    let total=0
    for(let num of arr){
        total+=num
    }
    return total
}

function returnDay(num){
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if(num<1 || num>7){
        return null
    }
    else{
        return days[num-1]
    }
}// these are all example of functions in js.

let animal = "Giant Pacific Octopus";
function observe(){
    let animal = "Pajama Squid";
    //console.log(animal);
}
observe();//Pajama Squid because it is in the function

const creature = "Common Sea Dragon";
 
function scubaDive(){
    const creature = "Spanish Dancer";
    //console.log(creature);
}
scubaDive();//Spanish Dancer because it is in the function. no matter it is const or let.

let deadlyAnimal = "Blue-Ringed Octopus"; 
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    //console.log(deadlyAnimal);
} 
handleAnimal();
//console.log(deadlyAnimal)//First one is Scorpionfish because it is in the function. Second one is Blue-Ringed Octopus because it is not in the function.

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = "something";
}
//console.log(radius);
//console.log(msg);//msg is not defined because it is in the if statement. it only works in the if statement.

for(var i=0; i<5; i++){
    //console.log(i)
}//var is global so it can be used outside of the for loop.

function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
    function cryForHelp(){
        function inner(){
            for(let hero of heroes){
                //console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}//inner function can access outer function but outer function cannot access inner function.

const add = function(x,y){
    return x+y
}//function expression

const square = function(num){
    return num*num
}//function expression

function makeBetweenFunc(min,max){
    return function(num){
        return num>=min && num<=max
    }
}
const isChild = makeBetweenFunc(0,18)
const isAdult = makeBetweenFunc(19,64)
const isSenior = makeBetweenFunc(65,120)//function factory

const myMath = {
    pi: 3.14159,
    square: function(num){
        return num*num
    },
    cube: function(num){
        return num**2
    },
    add: function(x,y){
        return x+y
    },
    subtract: function(x,y){
        return x-y
    },
    multiply: function(x,y){
        return x*y
    },
    divide: function(x,y){
        return x/y
    }
}//method is a function inside of an object. in new version of js you dont need to write function in front of the method. for example;
const myMath2 = {
    square(num){
        return num*num
    }
}

const squaregeo = {
    area(num){
        return num*num
    },
    perimeter(num){
        return num*4
    }
}//method factory example

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log(`${this.name} says MEOWWWWW`)
    }
}//this keyword is used to refer to the object that the method is inside of.

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){
        this.eggCount++
        return 'EGG'
    }
}//this keyword is used to refer to the object that the method is inside of.

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2){
        this.health += num1+num2
    }
}//this keyword is used to refer to the object that the method is inside of.

const dog = {
    name: 'Rusty',
    speak(){
        return `${this.name} says woof!`
    }
}//this keyword is used to refer to the object that the method is inside of.

try {
    hello.toUpperCase();
}
catch{
    //console.log('Error!')
}//try catch example

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3))
    }
    catch(e){
        console.log(e)
    }
}//try catch example in action.


const numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

numbers2.forEach(function(num){
    if (num%2===0){
        //console.log(num)
    }
})//forEach example. in this example we are printing even numbers.

for (let num of numbers2){
    //console.log(num)
}//forEach example. 

const movies = [
    { title: 'Amadeus', score: 99 },
    { title: 'Stand By Me', score: 60 },
    { title: 'Parasite', score: 95 },
    { title: 'Alien', score: 70 },
    { title: 'E.T.', score: 100 },
    { title: 'Emoji Movie', score: 40},
    { title: 'Fifty Shades of Grey', score: 25 },
    { title: 'The Room', score : 37}
]
movies.forEach(function(movie){
    //console.log(`${movie.title} - ${movie.score}/100`)
})//forEach example. in this example we are printing movies and their scores.

const doubles = numbers2.map(function(num){
    return num*2;
})//map example. in this example we are multiplying every number with 2.

const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
})//map example. in this example we are making every title uppercase.

const add2 = (x,y) => {
    return x+y;
}//arrow function example. in this example we are adding two numbers.

setTimeout(() => {
    //console.log('Hello')
}, 3000)//set time out example. in this example we are printing hello after 3 seconds.

setInterval(() => {
    //console.log(Math.random())
},1000)//set interval example. in this example we are printing random numbers every second.

const id = setInterval(() => {
    //console.log(Math.random())
},1000)//set interval example. in this example we are printing random numbers every second.

clearInterval(id)//clear interval example. in this example we are stopping the interval.

const goodMovies = movies.filter(m => m.score>80)//filter example. in this example we are filtering movies with score higher than 80.
movies
    .filter(m => m.score>80)
    .map(m => m.title)//chaining example. in this example we are filtering movies with score higher than 80 and then we are mapping their titles.

function validUserNames(usernames){
    return usernames.filter(name => name.length<10)
}//filter example. in this example we are filtering usernames with less than 10 characters.

const exams = [80,98,92,78,70,90,89,84,81,77];
exams.every(score => score>=75)//every example. in this example we are checking if every score is higher than 75. which is false.
exams.some(score => score>=75)//some example. in this example we are checking if some score is higher than 75. which is true.

const allEvens = numbers2.every(num => num%2===0)//every example. in this example we are checking if every number is even. which is false.

function allEvens (even) {
    return even.every(even => even%2===0)
}//every example. in this example we are checking if every number is even. which is false.

const prices = [9.99,1.50,19.99,49.99,30.50];

const total = prices.reduce((total,price) => {
    return total+price
})//reduce example. in this example we are adding all the prices.

const minPrice = prices.reduce((min,price) => {
    if(price<min){
        return price
    }
    return min
})//reduce example. in this example we are finding the minimum price.

function rollDie(numSides=6){
    return Math.floor(Math.random()*numSides)+1
}

numbers = [1,2,3,4,5,6,7,8,9,10];
Math.min(...numbers)//spread example. in this example we are finding the minimum number.
//console.log(...numbers)//spread example. in this example we are printing every number.

cats = ['Blue', 'Scout', 'Rocket'];
dogs = ['Rusty', 'Wyatt'];
allPets = [...cats, ...dogs, 'Speedy']//spread example. in this example we are merging two arrays.

const dataFromForm = {
    email: 'blueman@gmail.com',	
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = {...dataFromForm, id: 2345, isAdmin: false}//spread example. in this example we are adding new properties to an object.

function sum(... num){
    return num.reduce ((total,el) => total+el)
}//rest example. in this example we are adding all the numbers.

function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`And thanks to everyone else: ${everyoneElse}`)
}//rest example. in this example we are printing the first two and the rest of the names.

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const highScore = scores[0]//destructuring example. in this example we are assigning the first element of the array to highScore.
const secondHighScore = scores[1]//destructuring example. in this example we are assigning the second element of the array to secondHighScore.

const [gold, silver, bronze, ...everyoneElse] = scores//destructuring example. in this example we are assigning the first three elements of the array to gold, silver and bronze and the rest of the elements to everyoneElse.

const user = {
    email: 'harvey@gmail.com',	
    password: 'sAdfasdfasdf',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly...',
    city: 'San Fransisco',
    state: 'California'}

//const firstName = user.firstName//destructuring example. in this example we are assigning the firstName of the object to firstName.
//const lastName = user.lastName//destructuring example. in this example we are assigning the lastName of the object to lastName.
//const email = user.email//destructuring example. in this example we are assigning the email of the object to email.

const {firstName, lastName, email, born, died, password} = user//destructuring example. in this example we are assigning the firstName, lastName, email, born, died and password of the object to firstName, lastName, email, born, died and password.

const {city: hometown} = user//destructuring example. in this example we are assigning the city of the object to hometown.

const user2 = {
    firstName: 'Susan',
    lastName: 'Milk',
    born: 1980
}

const {firstName: fn, lastName: ln, born: by, email: mail='N/A'} = user2//destructuring example. in this example we are assigning the firstName, lastName, born and email of the object to fn, ln, by and email. if there is no email in the object we are assigning N/A to email.



const writerName = ({firstName, lastName}) => {
    return `${firstName} ${lastName}`
}//destructuring example. in this example we are assigning the firstName and lastName of the object to firstName and lastName.

const writer = {
    firstName: 'Mecit',
    lastName: 'Bedel'
}

const fullName = writerName(writer)//destructuring example. in this example we are assigning the firstName and lastName of the object to firstName and lastName.