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
I chose not to display what beats what on the game picking screen.

I thought about using another controller to handle the game rather than a 'Main' controller, but it felt really contrived considering that the only purpose of the app is the game itself.
