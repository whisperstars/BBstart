var PersonEditView = Backbone.View.extend({
    
    template: _.template('<input type="text" class="name" placeholder="name" value="<%= name %>"/><button class="set_name_btn">set</button>'),

    events: {
        'click .set_name_btn': 'setName'
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        
        return this;
    },

    setModel: function(model) {
        this.model = model;
        this.render();
    },

    setName: function() {
        this.model.set('name', this.$('.name').val());
    }
});