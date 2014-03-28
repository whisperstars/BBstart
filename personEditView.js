var PersonEditView = Backbone.View.extend({

    events: {
        'click .set_name_btn': 'setName'
    },

    initialize: function() {
        this.template = _.template($('#PersonEditView').html());
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