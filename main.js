let dieRolls = [];
let rollButton = document.querySelector("#rollButton");
let userInput = document.querySelector("#numOfRolls");
let totalSpan = document.querySelector("#total")
let allRollsElement

rollButton.addEventListener("click", function(event){
    //get the value from the user input so we know
    //how many times to roll the dice

    let diceCount = userInput.value

    //start a total variable to keep track of the total of all dice rolled
    
    let total = 0;
    
    //loop as many times as we were asked to roll dice
    
    for(let i = 1; i <= dieCount; i++ ){
       
        //roll a dice and get a random number between 1 and 6 and store it in roll
        let roll = Math.floor(Math.random() * 6) + 1 
        
        //add he roll to the array so we get a list of each value of the dice rolled
        
        dieRolls.push
        total = total + roll; 
    }
    //after the lop is done (all the dice are rolled) take the total and put it
    //in the total span
   
    totalSpan.innerHTML = total
})
    //listens for click on all rolls button

    showAllRolls.addEventListener("click", function(event){

    //loop of dieRolls array that holds all the individual dice rolls
    for(let i = 0; i < dieRolls.length ; i++ ){
    
        //generates the new <li> that goes in the <ol>
        const newDiceString = "<li class="dice">" + dieRolls" + "</li>";
    

        //appends the newly created <li> to the ol
        allRollsElement.innerHTML = allRollsElement.innerHTML + newDiceString;
        
    }
}