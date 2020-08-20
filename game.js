function shoppingGame() {
    let name = prompt("What is your name?");

    let shop = prompt("Would you like to go to the shops?");
    let money = -1; 

    if (shop === "no") {
        alert("Maybe next time!"); 
    } else {
        money = prompt("How much spending money do you have?"); 
        if (money >= 0 && money <= 30) {
            alert("Better be careful!");
            document.getElementById("demo").innerHTML = name + " is going shopping and will spend $" + money + ".";
        } else if (money > 30) {
            alert("Whoop! Big spender!");
            document.getElementById("demo").innerHTML = name + " is going shopping and will spend $" + money + ".";
        } else {
            alert("You did not enter a valid number. Start game again.");
        }
    }
    
}

