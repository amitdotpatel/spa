var Over = Backbone.Model.extend({
    defaults: {
        wickets: 0,
        runs: 0,
        number: 0,
        balls: []
    },
    validate: function(attrs){
        if(attrs.number < 1 || attrs.number > 50) {
            return 'over number should between 1 and 50';
        }
        if(attrs.balls.length < 0 || attrs.balls.length > 6) {
            return 'balls should be between 0 and 6';
        }
        if(attrs.runs < 0){
            return 'runs should be grater than or equal to 0';
        }
        if(attrs.wickets < 0) {
            return 'wickets should be grater than or equal to 0';
        }
        return true;
    },
    isMaiden: function() {
        return (this.get('runs') === 0);
    },
    updateBall: function(ball) {
        if(this.get('balls').length < 6) {
            this.set('wickets', this.get('wickets') + (ball.get('wicket') ? 1 : 0));
            this.set('runs', this.get('runs') + ball.get('runs'));
            this.attributes.balls.push(ball);
        }
    },
    isDone: function(){
        return (this.attributes.balls.length >= 6);
    }
});