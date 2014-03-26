var PersonItemView = Backbone.View.extend({

    template: _.template('<%= name %>'),

    initialize: function() {
        this.model.on('change', this.render, this);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});