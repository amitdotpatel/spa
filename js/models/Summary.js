var Summary = Backbone.Model.extend({
    defaults: {
        totalRuns: 0,
        totalOvers: 0,
        totalWickets: 0
    },
    validate: function(attrs){
        if(attrs.totalOvers > 50 || attrs.totalRuns < 0) {
            return 'totalOvers should be between 1 and 50';
        }
        if(attrs.totalWickets < 0 || attrs.totalWickets > 10) {
            return 'totalWickets should be between 0 and 10';
        }
        return true;
    },
    addOver: function(over) {
        this.set('totalWickets', this.get(totalWickets) + over.wickets);
        this.set('totalRuns', this.get(totalRuns) + over.runs)
        this.set('totalOvers', this.get('totalOvers') + 1);
    }
});