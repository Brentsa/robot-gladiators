
var playerName = window.prompt("What is your robot's name?");
var health = 100;
var attack = 10;
var playerMoney = 10;

var enemyBot = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

function fight(){

    var promptFight = window.prompt("Would you like to fight? Type fight or skip to choose.");

    if(promptFight === "fight" || promptFight === "FIGHT"){
        window.alert("The fight has begun!");
        window.alert(playerName + " and " + enemyBot + " have entered the arena");
        
        enemyHealth -= attack;
        window.alert(playerName + " dealt " + attack + " damage!");
    
        if(enemyHealth <= 0){
            window.alert(enemyBot + " has lost the fight!");
        }
        else{
            window.alert(enemyBot + " has " + enemyHealth + " health remaining.");
        }
        
        health -= enemyAttack;
        window.alert(enemyBot + " dealt " + enemyAttack + " damage!");
    
        if(health <= 0){
            window.alert(playerName + " has lost the fight. Good luck next time!")
        }
        else{
            window.alert(playerName + " has " + health + " health remaining.");
        }
    }
    else if(promptFight === "skip" || promptFight === "SKIP"){
        var confirmSkip = window.confirm("Are you sure you want to skip?")

        if(confirmSkip){
            playerMoney -= 10;
            window.alert("Fight skipped, you lose 10 coin!");
            console.log("Player money = " + playerMoney);
        }
        else {
            fight();
        }
       
    }
    else{
        promptFight = window.alert("Command not recognized");
        fight();
    }
}

fight();



