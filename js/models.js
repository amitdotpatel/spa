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
            return false;
        }
        return true;
    },
    updateScore: function(runs, balls) {
        this.runs += runs;
        this.balls += balls;
        if(this.balls > 0) {
            this.strikeRate = (runs / balls) * 100;
        }
    }
});

var Bowler = Backbone.Model.extend({
    defaults: {
        id: '',
        overs: 0,
        runs: 0,
        wickets: 0,
        maidens: 0,
        economy: 0
    },
    validate: function(attrs) {
        if(attrs.id == '' || attrs.id == null || attrs.id == undefined) {
            return false;
        }
        return true;
    },
    addOver: function(over){
        this.overs += 1;
        this.wickets += over.wickets;
        if(over.isMaiden()) {
            this.maidens++;
        } else {
            this.runs += over.runs;
        }
    }
});

var Over = Backbone.model.extend({
    defaults: {
        wickets: 0,
        runs: 0,
        number: 0,
        balls: 0
    },
    validate: function(attrs){
        if(this.number < 0 || this.number > 50) {
            return false;
        }
        if(this.balls < 0 || this.balls > 6) {
            return false;
        }
        return true;
    },
    isMaiden: function() {
        return (this.runs === 0);
    },
    updateBall: function(wicket, runs) {
        if(this.balls < 6) {
            this.wickets += wicket;
            this.runs += runs;
            this.balls++;
        }
    },
    isDone: function(){
        return (this.balls >= 6);
    }
});

var Ball = Backbone.model.extend({
    defaults: {
        striker: '',
        nonStriker: '',
        bowler: '',
        wickets: 0,
        runs: 0,
        over: 0,
        number: 0
    }
});