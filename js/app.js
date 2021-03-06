// there are two actors : scoreboard and entry-pad
// entry-pad will have the form to enter a ball / bowl a ball. This will add a ball to the balls collection.
// scoreboard : this will have a collection of 11 batsmen and 11 bowlers. The scoreboard will listen to the changes
// in the ball collection and update its batsmen and bowlers accordingly. Every ball will be bowled by a bowler.
// every update in the batsman and bowler will trigger a refresh on the respective views.
// the Batsmen and Bowlers collection will be responsible for providing stats per player.
// A summary model will keep track of the total runs / overs / wickets / run-rate

//views:
//batsman view, single batsman name runs balls strike-rate
//bowler view overs maidens runs wickets
//summary view at the bottom
//screen has 2 parts, 70% for the score batsman, 30 % to the bowlers
function createBattingTeam() {
    var battersTeam = new Batters();
    for(var i = 0; i < batsmenData.length; i++) {
        var batterObj = new Batsman({
            id: batsmenData[i].id
        });
        battersTeam.add(batterObj);
    }
    return battersTeam;
};

function createBowlingTeam() {
    var bowlersTeam = new Bowlers();
    for(var i = 0; i < bowlersData.length; i++) {
        var bowlerObj = new Bowler({
            id: bowlersData[i].id
        });
        bowlersTeam.add(bowlerObj);
    }
    return bowlersTeam;
};

var battingTeam = createBattingTeam();
var bowlingTeam = createBowlingTeam();
var inningsView = new InningView();
var bowlingForm = new BowlerFormView({
    parentView: inningsView
});