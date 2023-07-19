let list = []
let indexN = 0
let indexD = 0
let command = prompt("What would you like to do?")

while(command !== 'quit'){
    if(command === 'new'){
        indexN = prompt("Enter new todo")
        list.push(indexN)
        console.log(`${indexN} added to list`)
    }
    else if (command === 'list'){
        for(let i=0; i<list.length; i++){
            console.log(`${i+1}: ${list[i]}`)
        }
    }
    else if (command === 'delete'){
        indexD = prompt("Which one do you want to delete?")
        console.log(`${list[indexD-1]} deleted from the list`)
        list.splice(`${indexD}`-1,1)
      }      
    else{
        console.log("Command is not defined, please try again")
    }
    console.log("**********")
    command = prompt("What would you like to do?")
}

console.log("App is closed")