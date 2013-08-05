var Batsman = Backbone.Model.extend({
    defaults: {
        id: '',
        runs: 0,
        balls: 0,
        strikeRate: 0,
        isBatting: false
    },
    validate: function(attrs) {
        if(attrs.id == '' || attrs.id == null || attrs.id == undefined) {
            return 'Id cannot be empty , undefined or null';
        }
        if(attrs.balls == 0 && attrs.runs != 0) {
            return 'If balls are 0, then runs should be 0';
        }
    },
    playBall: function(ball) {
        if(ball.get('wickets')) {
            this.set('isBatting', false);
        } else {
            this.set('runs',thi.get('runs') + ball.get('runs'));
        }
        this.set('balls', this.get('balls') + 1);
        if(this.get('balls') > 0) {
            this.set('strikeRate', (this.attributes.runs / this.attributes.balls) * 100);
        }
    }
});