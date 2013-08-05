var summaryTmpl = '<span id="runsSummary"><%= totalRuns %></span>\
<span id="wicketSummary"><%= totalWickets %></span>\
<span id="overSummary"><%= totalOvers %></span>';
var SummaryView = Backbone.View.extend({
    el: '#summaryWrapper',
    template: _.template(summaryTmpl),
    initialize: function(){
        var self = this;
        this.summaryModel = new Summary();
        this.summaryModel.on('change', function(summary){
            self.render();
        });
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.summaryModel.toJSON()));
    },
    update: function(over){
        this.summaryModel.addOver(over);
    }
});