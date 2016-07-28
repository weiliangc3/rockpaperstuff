# Rock Paper Stuff
A Rock Paper Scissors Spock and Lizard page.

## Instructions
Run app.js to serve the page, then just go to localhost:3000 to view the page.

I use Grunt to compile my javascript and SCSS (mostly because I prefer to use SCSS). The uncompiled code is in the src folder. The html pages are in app/views.

## Goals
Make a playable computer opponent RPS, with the additional weapons of Spock and Lizard, as per the rules layed out in the wikipedia page. Additional functions were:
- Record the game as a best of 3 and show the score
- Allow restarting of the game

## Considerations/Choices
#### Technology used
- AngularJS 1.5.8
- Node.js/Express.js
- Grunt
- Bower

I'm used to AngularJS 1.X so I chose to use that rather than Angular 2 or React. I've chosen to use Node, Express and not use jQuery, to follow the brief of the technologies used. I have deviated in one aspect- I've used Grunt as a task runner to compile my SCSS as well as concatinate and minify my code rather than Webpack module bundler. I've done this as I've never used Webpack module bundler before, and while reading up on it I decided to just stick to what I know for this exercise, and experiment on it later.


#### Usability
I chose not to display what beats what on the game picking screen. There's no real reason except it makes the game more mysterious.

I thought about using another controller to handle the game rather than a 'Main' controller, but it felt really contrived considering that the only purpose of the app is the game itself.

Victory conditions were coded as an object, so that the way the code works is clear. Wikipedia describes a cool mathematical solution, but I shyed from it in favour of code readability.

I considered not having an intermediary screen for each round- but I chose to have one just to display computer results more obviously. I think not having an intermediary screen is a better decision in terms of playing the game, and is more 'fun'. But as this project isn't to make a game for others' 'fun'...

I actually also considered writing all the "Paper beats rock", "Lizard poisons Spock"... but I felt that it was time consuming to write and not really challenging - though it is a significant game quality improvement due to it providing more feedback to the player. For the same reason the rules are simply a copy-pasted wikipedia section with no cool diagram.

Since it's possible to navigate to the results page without playing a game.... it just catches you now and tells you go go back to the home page.

The styling is quite rudimentary, but I did make some traffic lights for the game score. I didn't play around with ngAnimate, but it probably would feel better and more alive if I just animated a fade in or a sweep in for each page.
