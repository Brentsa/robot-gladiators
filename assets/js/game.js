
//Game States
//"WIN" - player defeats all enemies
//  * player fights all enemies
//  * enemies run out of health
//"LOSE" - player runs out of health

var playerName = window.prompt("What is your robot's name?");
var health = 100;
var attack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

function fight(enemyName){

    var promptFight = window.prompt("Would you like to fight? Type fight or skip to choose.");

    if(promptFight === "fight" || promptFight === "FIGHT"){
        window.alert("The fight has begun!");
        window.alert(playerName + " and " + enemyName + " have entered the arena");
        
        enemyHealth -= attack;
        window.alert(playerName + " dealt " + attack + " damage!");
    
        if(enemyHealth <= 0){
            window.alert(enemyName + " has lost the fight!");
        }
        else{
            window.alert(enemyName + " has " + enemyHealth + " health remaining.");
        }
        
        health -= enemyAttack;
        window.alert(enemyName + " dealt " + enemyAttack + " damage!");
    
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
            fight(enemyName);
        }
    }
    else{
        promptFight = window.alert("Command not recognized");
        fight(enemyName);
    }
}

//fight();

for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}


