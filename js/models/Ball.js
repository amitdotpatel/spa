var Ball = Backbone.Model.extend({
    defaults: {
        striker: '',
        nonStriker: '',
        bowler: '',
        wickets: false,
        runs: 0,
        over: 0,
        number: 0
    },
    validate: function(attrs) {

    }
});
