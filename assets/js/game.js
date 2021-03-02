
//Game States
//"WIN" - player defeats all enemies
//  * player fights all enemies
//  * enemies run out of health
//"LOSE" - player runs out of health

var playerName = window.prompt("What is your robot's name?");
var health = 100;
var attack = 15;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 30;
var enemyAttack = 10;

function fight(enemyName)
{
    while(enemyHealth > 0 && health >0)
    {
        var promptFight = window.prompt("Would you like to fight? Type fight or skip to choose.");
        if(promptFight === "skip" || promptFight === "SKIP")
        {
            var confirmSkip = window.confirm("Are you sure you want to skip?");
            if(confirmSkip)
            {
                playerMoney -= 10;
                window.alert("Fight against " + enemyName + " skipped, you lose 10 coin!");
                console.log("Player money = " + playerMoney);
                break; 
            }
            else 
            {
                fight(enemyName);
            }
        }

        window.alert(playerName + " and " + enemyName + " have entered the arena");
        
        enemyHealth -= attack;
        window.alert(playerName + " dealt " + attack + " damage! " + enemyName + " has " + enemyHealth + " health remaining.");
    
        if(enemyHealth > 0)
        {
            health -= enemyAttack;
            window.alert(enemyName + " dealt " + enemyAttack + " damage! " + playerName + " has " + health + " health remaining.");
        
            if(health <= 0)
            {
                window.alert(playerName + " has lost the fight. Good luck next time!");
            } 
        }
        else
        {
            window.alert(enemyName + " has lost the fight!");
            playerMoney += 20;
        }
    }
}

for(var i = 0; i < enemyNames.length; i++)
{
    var selectedEnemy = enemyNames[i];
    enemyHealth = 30;
    fight(enemyNames[i]);
}


