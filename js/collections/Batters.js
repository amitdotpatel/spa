var Batters = Backbone.Collection.extend({
    model: Batsman,
    getRandom: function() {
        return this.models[getRandom()];
    }
});