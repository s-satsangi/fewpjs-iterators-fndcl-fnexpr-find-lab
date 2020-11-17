const testVar = {}

function testFunc() {
  return "hi"
}
//roommates.find( function(s) { return s === "winston" }
function superbowlWin(team){
  let win = team.find(function(game){return game.result === "W"});
  return win ? win.year : win ;
}
