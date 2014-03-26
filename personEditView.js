var personEditView = Backbone.View.extend({
    template: _.template('<input type="text" class="name" placeholder="name"/><button class="set_name">set</button>'),

    initialize: function() {
        this.model.on('change', this.render, this);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        
        return this;
    }
});