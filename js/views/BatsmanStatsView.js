var batterTmpl = '<span class="batsmanId">Sachin Tendulkar</span>\
<span id="batsmanRuns">200</span>\
<span id="batsmanBalls">100</span>';

var BatsmanStatsView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(batterTmpl),
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    },
    handleClick: function(){

    },
    model: {}
});