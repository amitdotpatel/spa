var Bowler = Backbone.Model.extend({
    defaults: {
        id: '',
        overs: 0,
        runs: 0,
        wickets: 0,
        maidens: 0,
        economy: 0
    },
    currentRuns: 0,
    validate: function(attrs) {
        if(attrs.id === '' || attrs.id === null || attrs.id === undefined) {
            return 'Id cannot be empty , undefined or null';
        }
        if(attrs.overs > 10 || attrs.overs < 0) {
            return 'overs should be between 0 and 10';
        }
        if(attrs.wickets < 0 || attrs.wickets > 10) {
            return 'wickets should be between 0 and 10';
        }
        if(attrs.maidens < 0 || attrs.maidens > 10) {
            return 'maidens should be between 0 and 10';
        }
        if(attrs.maidens === attrs.overs && attrs.runs !== 0) {
            return 'all overs are maiden, so runs 0';;
        }
    },
    addOver: function(over){
        if(this.overs === 10) {
            return;
        }
        this.attributes.overs += 1;
        this.attributes.wickets += over.get('wickets');
        if(over.isMaiden()) {
            this.attributes.maidens++;
        } else {
            this.attributes.runs += over.get('runs');
        }
    },
    bowl: function(ball) {
        this.attributes.overs = Math.round((this.attributes.overs + 1/10) * 10) / 10;
        if(ball.get('number') === 6){
            this.set('overs', Math.ceil(this.get('overs')));
            if(this.currentRuns === 0) {
                this.set('maidens', this.get('maidens') + 1);
            }
            this.currentRuns = 0;
        }
        if(ball.get('wicket')) {
            this.set('wickets', this.get('wickets') + 1);
        } else {
            this.currentRuns += ball.get('runs');
            this.set('runs', this.get('runs') + ball.get('runs'));
        }
    }
});