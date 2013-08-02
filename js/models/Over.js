var Over = Backbone.Model.extend({
    defaults: {
        wickets: 0,
        runs: 0,
        number: 0,
        balls: 0
    },
    validate: function(attrs){
        if(attrs.number < 0 || attrs.number > 50) {
            return false;
        }
        if(attrs.balls < 0 || attrs.balls > 6) {
            return false;
        }
        if(attrs.runs < 0 || attrs.wickets < 0) {
            return false;
        }
        return true;
    },
    isMaiden: function() {
        return (this.runs === 0);
    },
    updateBall: function(ball) {
        if(this.balls.length < 6) {
            this.wickets += (ball.wicket ? 1 : 0);
            this.runs += ball.runs;
            this.balls.push(ball);
        }
    },
    isDone: function(){
        return (this.balls.length >= 6);
    }
});