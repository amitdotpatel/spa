var batterTmpl = '<span class="batsmanId"><%= id %></span>\
<span id="batsmanRuns"><%= runs%></span>\
<span id="batsmanBalls"><%= balls %></span>\
<span id="batsmanStrikeRate"><%= strikeRate %></span>';

var BatsmanStatsView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(batterTmpl),
    initialize: function(options){
        if(options.batsman) {
            var self = this;
            self.batsman = options.batsman;
            self.batsman.on('change', function(model){
                self.render();
            });
        }
        this.render();
    },
    render: function(){
        if(this.batsman && this.batsman.toJSON) {
            var b = this.batsman.toJSON();
            this.$el.html(this.template(b));
        }
    },
    batsman: {}
});