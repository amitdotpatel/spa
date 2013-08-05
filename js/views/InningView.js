var inningViewTmpl = '<div class="row-fluid box" id="mainView">' +
    '<div class="span8 padding-left padding-bottom" id="battingScore">' +
    '<ul></ul>' +
    '</div>' +
    '<div class="span4 padding-top padding-right padding-bottom" id="ballingScore">' +
    '<ul></ul>' +
    '</div>' +
    '<div class="clearfix"></div>' +
    '<div class="padding-top padding-left padding-right padding-bottom " id="summaryWrapper">' +
    '</div>' +
    '</div>';

var InningView = Backbone.View.extend({
    el: '#displayScorecards',
    template: _.template(inningViewTmpl),
    initialize: function(){
        var self = this;

        this.summaryView = new SummaryView();

        this.ballsCollection = new Balls();
        this.currentOver = new Over();
        this.ballsCollection.on('add', function(ball){
            self.updateBowlerStats(ball);
            self.updateBatsmanStats(ball);
            self.updateOvers(ball);
        });

        this.currentBowler = bowlingTeam.get('ADonald');
        this.currentBowlerView = new BowlerStatsView({
            bowler: this.currentBowler
        });

        this.currentStriker = battingTeam.get('SGanguly');
        this.currentStrikerView = new BatsmanStatsView({
            batsman: this.currentStriker
        });
        this.currentNonStriker = battingTeam.get('SRTendulkar');
        this.currentNonStrikerView = new BatsmanStatsView({
            batsman: this.currentNonStriker
        });

        this.render();
    },
    render: function(){
        this.$el.html(this.template());
        this.$el.find('#ballingScore ul').html(this.currentBowlerView.el);
        this.$el.find('#battingScore ul').html(this.currentStrikerView.el);
        this.$el.find('#battingScore ul').append(this.currentNonStrikerView.el);
    },
    updateBatsmanStats: function(ball){
        if(this.currentStriker.get('id') === ball.get('striker')) {
            this.currentStriker.playBall(ball);
        }
        //if(this.currentNonStriker.get('id') === ball.get('nonStriker')) {
        //    this.currentNonStriker.playBall(ball);
        //}
    },
    updateBowlerStats: function(ball){
        if(ball.get('bowler') === this.currentBowler.get('id')) {
            this.currentBowler.bowl(ball);
        }
    },
    updateOvers: function(ball){
        this.currentOver.updateBall(ball);
        this.updateBowlerStats(ball);
        if(this.currentOver.isDone()){
            this.summaryView.update(this.currentOver);
            this.overs.push(this.currentOver);
            this.currentOver = new Over();
        }
    },
    overs: [],
    currentOver: {},
    ballsCollection: []
});