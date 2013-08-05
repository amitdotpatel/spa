var Bowlers = Backbone.Collection.extend({
    model: Bowler,
    getRandom: function() {
        return this.models[getRandom()];
    }
});