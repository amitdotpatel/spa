var AppView = Backbone.View.extend({
    initialize: function() {
        console.log('Init App View');
        this.render();
    },
    render: function() {
        console.log('Rendering AppView');
    },
    start: function(){
        console.log('Starting the App');
    }
});