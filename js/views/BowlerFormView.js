var bowlerSelect = createSelectElement('bowlerSelect', _.map(bowlersData, function(bowler) {
    return bowler.id;
}));
var strikerSelect = createSelectElement('strikerSelect', _.map(batsmenData, function(batsman) {//
    return batsman.id;
}));
var nonStrikerSelect = createSelectElement('nonStrikerSelect', _.map(batsmenData, function(batsman) {//
    return batsman.id;
}));
var bowlerFormTmpl = '<form>' +
    'Ball: <input type="text" name="ballNumber" placeholder="Ball"/><br>' +
    'Over: <input type="text" name="overNumber" placeholder="Over"/><br>' +
    'Runs: <input type="text" name="runs" placeholder="Runs"/><br>' +
    'Wicket: <select id="wicket"><option value=true>Yes</option><br>' +
    '<option value=false>No</option></select><br>' +
    'Bowler:' + bowlerSelect + '<br>' +
    'Striker: ' + strikerSelect + '<br>' +
    'nonStriker: ' + nonStrikerSelect + '<br>' +
    '<input type="button" value="Bowl !" id="bowlBallBtn"/></form>';

var BowlerFormView = Backbone.View.extend({
    el: '#bowlerForm',
    template: _.template(bowlerFormTmpl),
    events: {
        'click #bowlBallBtn': 'handleBowlingClick'
    },
    initialize: function(options){
        if(options.parentView) {
            this.parentView = options.parentView;
        }
        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    },
    handleBowlingClick: function(e){
        var newBall = new Ball({
            striker: this.$el.find('#strikerSelect option:selected').val(),
            nonStriker: this.$el.find('#nonStrikerSelect option:selected').val(),
            bowler: this.$el.find('#bowlerSelect option:selected').val(),
            wickets: this.$el.find('#wicket option:selected').val(),
            runs: parseInt(this.$el.find('input[name="runs"]').val()),
            over: parseInt(this.$el.find('input[name="overNumber"]').val()),
            number: parseInt(this.$el.find('input[name="ballNumber"]').val())
        });
        console.log(newBall);
        this.parentView.ballsCollection.add(newBall);
    }
});