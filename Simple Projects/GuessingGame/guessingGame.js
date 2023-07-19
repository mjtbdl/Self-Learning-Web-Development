let maximum = parseInt(prompt("Enter the maximum number"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}
//console.log(maximum);

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess, if you want to quit press q.");
let attempts = 1;

while(parseInt(guess)!==targetNum){
    if ( guess === 'q')
        break;
    attempts++;
    if(guess>targetNum){
        guess = prompt("too high, enter a new guess");
    }
    else{
        guess = prompt("too low, enter a new guess");
    }
}

if( guess === 'q'){
    console.log("bye");
}
else{
    console.log(`you win, it took you ${attempts} guesses`)
}