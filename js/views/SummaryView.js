var summaryTmpl = '<span id="runsSummary">100</span>\
<span id="wicketSummary">5</span>\
<span id="overSummary">10</span>';
var SummaryView = Backbone.View.extend({
    el: '#summaryWrapper',
    template: _.template(summaryTmpl),
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    }
});