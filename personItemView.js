var PersonItemView = Backbone.View.extend({

    template: _.template('<td><%= name %></td>'),

    initialize: function() {
        this.model.on('change', this.render, this);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});