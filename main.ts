let points = game.askForNumber("Points per game?")
let rebounds = game.askForNumber("Rebounds per game?")
let assists = game.askForNumber("Assists per game?")
if (points >= 25 || points >= 10 && rebounds >= 10 && assists >= 10) {
    adventure.addToTextlog("You are an all-star!")
} else {
    adventure.addToTextlog("Keep Trying!")
}

