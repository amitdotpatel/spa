var inningViewTmpl = '<div class="row-fluid box" id="mainView">\
    <div class="span8 padding-left padding-bottom" id="battingScore">\
    <ul></ul>\
    </div>\
<div class="span4 padding-top padding-right padding-bottom" id="ballingScore">\
    <ul></ul>\
</div>\
<div class="clearfix"></div>\
    <div class="padding-top padding-left padding-right padding-bottom " id="summaryWrapper">\
    </div>\
</div>';

var InningView = Backbone.View.extend({
    el: '#displayScorecards',
    template: _.template(inningViewTmpl),
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    }
});