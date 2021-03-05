
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 33,
    money: 10,
    reset: function(){
        this.health = 100;
        this.attack = 33;
        this.money = 10;
    },
    refillHealth: function(healAmount,cost){
        if(this.money >= cost){
            this.health += healAmount;
            this.money -= cost;
            alert("Refilling the player's health by " + healAmount+ " for " + cost + " coins. Current Health: " + this.health);
        }
        else{
            alert("Not enough funds to purchase, exiting shop.");
        }
    },
    upgradeAttack: function(upgradeAmount,cost){
        if(this.money >= cost){
            this.attack += upgradeAmount;
            this.money -= cost;
            alert("Increasing the player's attack by " + upgradeAmount + " for " + cost + " coins. Current attack: " + this.attack);
        }
        else{
            alert("Not enough funds to purchase, exiting shop.");
        }
    },
    loseMoney: function(amount){
        this.money = Math.max(0, (this.money - amount));
        window.alert("Fight skipped, you lose " + amount + " coin!");
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    }, 
    {
        name: "Amy Android",
        attack: randomNumber(14,18)
    }, 
    {
        name: "Robo Trumble",
        attack: randomNumber(18,24)
    }, 
    {
        name: "Mecha Molly",
        attack: randomNumber(26,32)
    }
];

function getPlayerName(){
    var playerName = ""

    while(playerName === "" || playerName === null){
        playerName = prompt("What is your robot's name?");
    }

    alert("Welcome to Robot Gladiators " + playerName + "!");
    return playerName;
}

function fight(enemy){
    console.log(enemy);
    while(enemy.health > 0 && playerInfo.health >0){
        
        if(fightOrSkip()){
            break;
        }

        alert(playerInfo.name + " and " + enemy.name + " have entered the arena");
        
        var playerDamageDealt = randomNumber(playerInfo.attack - 5, playerInfo.attack);
        enemy.health = Math.max(0 , (enemy.health-playerDamageDealt));
        alert(playerInfo.name + " dealt " + playerDamageDealt + " damage! " + enemy.name + " has " + enemy.health + " health remaining.");
    
        if(enemy.health > 0){
            var enemyDamageDealt = randomNumber(enemy.attack - 5, enemy.attack);
            playerInfo.health = Math.max(0 , (playerInfo.health - enemyDamageDealt));
            alert(enemy.name + " dealt " + enemyDamageDealt + " damage! " + playerInfo.name + " has " + playerInfo.health + " health remaining.");
        }
        else{
            window.alert(enemy.name + " has lost the fight!");
            playerInfo.money += 20;
        }
    }
}

function fightOrSkip(){
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Type 'FIGHT' or 'SKIP' to choose.");

    if(!promptFight)
    {
        alert("Please provide a valid answer.");
        return fightOrSkip();
    }
    
    if(promptFight.toLowerCase() === "skip"){
        var confirmSkip = confirm("Are you sure you want to skip?");
        if(confirmSkip){
            alert(playerInfo.name + " decided to skip this fight. Goodbye!")
            playerInfo.loseMoney(10);
            return true;
        }
    }

    return false;
}

function startGame(){
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++)
    {
        if(playerInfo.health > 0){
            var selectedEnemy = enemyInfo[i];
            selectedEnemy.health = randomNumber(40,60);
            alert("Welcome to Robot Gladiators! Round: " + (i + 1) + " - " + selectedEnemy.name);  
            debugger;

            fight(selectedEnemy);
            
            //Go to the shop if we won the last fight and have remaining enemies 
            if(playerInfo.health > 0 && i < (enemyInfo.length - 1)){
                var enterShop = confirm("Would you like to enter the shop?");
                if(enterShop)
                    shop();
            }
        } 
        else{
            window.alert(playerInfo.name + " has lost the fight. Good luck next time!");
            break;
        }
    }

    endGame();
}

function endGame(){
    if(playerInfo.health > 0 && playerInfo.money > 0){
        alert("You won the tournament! You finished with a score of: " + playerInfo.money);
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

    var userSelectionPrompt = prompt("Current money: " + playerInfo.money + " / Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch(userSelectionPrompt){
        case "REFILL":
        case "refill":
            playerInfo.refillHealth(healthIncrease,upgradeCost);
            break;

        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack(attackIncrease, upgradeCost);
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

function randomNumber(min, max){
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
}

startGame();







