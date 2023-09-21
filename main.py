points = game.ask_for_number("Points per game?")
rebounds = game.ask_for_number("Rebounds per game?")
assists = game.ask_for_number("Assists per game?")
if points >= 25 or points >= 10 and rebounds >= 10 and assists >= 10:
    adventure.add_to_textlog("You are an all-star!")
else:
    adventure.add_to_textlog("Keep Trying!")