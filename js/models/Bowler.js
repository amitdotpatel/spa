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
        if(attrs.id === '' || attrs.id === null || attrs.id === undefined) {
            return false;
        }
        if(attrs.overs > 10 || attrs.overs < 0) {
            return false;
        }
        if(attrs.wickets < 0 || attrs.wickets > 10) {
            return false;
        }
        if(attrs.maidens < 0 || attrs.maidens > 10) {
            return false;
        }
        if(attrs.maidens === 10 && attrs.runs !== 0) {
            return false;
        }
        return true;
    },
    addOver: function(over){
        if(this.overs === 10) {
            return;
        }
        this.overs += 1;
        this.wickets += over.wickets;
        if(over.isMaiden()) {
            this.maidens++;
        } else {
            this.runs += over.runs;
        }
    }
});