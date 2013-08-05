var bowlerTmpl = '<span class="ballerId"><%= id %></span>' +
    '<span class="ballerOvers"><%= overs %></span>' +
    '<span class="ballerMaidens"><%= maidens %></span>' +
    '<span class="ballerRuns"><%= runs %></span>' +
    '<span class="ballerWickets"><%= wickets %></span>';

var BowlerStatsView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(bowlerTmpl),
    initialize: function(options){
        if(options.bowler) {
            var self = this;
            self.bowler = options.bowler;
            self.bowler.on('change', function(model){
                self.render();
            });
        }
        this.render();
    },
    render: function(){
        var b = this.bowler.toJSON();
        console.log(b);
        this.$el.html(this.template(b));
    },
    bowler: {}
});