var bowlerTmpl = '<span class="ballerId">Some Baller</span>\
<span id="ballerOvers">10</span>\
<span id="ballerMaidens">0</span>\
<span id="ballerRuns">100</span>\
<span id="ballerWickets">0</span>';

var BowlerStatsView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(bowlerTmpl),
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model));
    },
    handleClick: function(){}

});