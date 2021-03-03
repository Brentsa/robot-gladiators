//Game States
//"WIN" - player defeats all enemies
//  * player fights all enemies
//  * enemies run out of health
//"LOSE" - player runs out of health

var playerName = prompt("What is your robot's name?");
var health = 100;
var attack = 15;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 30;
var enemyAttack = 50;

function fight(enemyName){
    while(enemyHealth > 0 && health >0){
        var promptFight = prompt("Would you like to fight? Type fight or skip to choose.");
        if(promptFight === "skip" || promptFight === "SKIP"){
            var confirmSkip = confirm("Are you sure you want to skip?");
            if(confirmSkip){
                playerMoney -= 10;
                window.alert("Fight against " + enemyName + " skipped, you lose 10 coin!");
                break; 
            }
        }

        alert(playerName + " and " + enemyName + " have entered the arena");
        
        enemyHealth -= attack;
        alert(playerName + " dealt " + attack + " damage! " + enemyName + " has " + enemyHealth + " health remaining.");
    
        if(enemyHealth > 0){
            health -= enemyAttack;
            alert(enemyName + " dealt " + enemyAttack + " damage! " + playerName + " has " + health + " health remaining.");
        }
        else{
            window.alert(enemyName + " has lost the fight!");
            playerMoney += 20;
        }
    }
}

function startGame(){
    health = 100;
    attack = 50;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++)
    {
        if(health > 0){
            alert("Welcome to Robot Gladiators! Round: " + (i + 1) + " - " + enemyNames[i]);   
            
            var selectedEnemy = enemyNames[i];
            enemyHealth = 30;
    
            fight(selectedEnemy);
            
            //Go to the shop if we won the last fight and have remaining enemies 
            if(health > 0 && i < (enemyNames.length - 1)){
                var enterShop = confirm("Would you like to enter the shop?");
                if(enterShop)
                    shop();
            }
        } 
        else{
            window.alert(playerName + " has lost the fight. Good luck next time!");
            break;
        }
    }

    endGame();
}

function endGame(){
    if(health > 0 && playerMoney > 0){
        alert("You won the tournament! You finished with a score of: " + playerMoney);
    }
    else{
        alert("You've lost the tournament, better luck next time!");
    }
    
    var exitGame = confirm("Would you like to play Robot Gladiators again?");

    if(exitGame){
        startGame();
    }
    else{
        alert("Thanks for playing, come back soon!");
    }
}

function shop(){
    var upgradeCost = 10;
    var healthIncrease = 30;
    var attackIncrease = 5;

    var userSelectionPrompt = prompt("Current money: " + playerMoney + " / Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch(userSelectionPrompt){
        case "REFILL":
        case "refill":
            if(playerMoney > upgradeCost){
                health += healthIncrease;
                playerMoney -= upgradeCost;
                alert("Refilling the player's health by " + healthIncrease + " for " + upgradeCost + " coins. Current Health: " + health);
            }
            else{
                alert("Not enough funds to purchase, exiting shop.");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if(playerMoney > upgradeCost){
                attack += attackIncrease;
                playerMoney -= upgradeCost;
                alert("Increasing the player's attack by " + attackIncrease + " for " + upgradeCost + " coins. Current attack: " + attack);
            }
            else{
                alert("Not enough funds to purchase, exiting shop.");
            }
            break;

        case "LEAVE":
        case "leave":
            alert("Exiting the shop.");
            break;

        default:
            alert("Please make a valid selection");
            shop();
            break;
    }   
}

startGame();







