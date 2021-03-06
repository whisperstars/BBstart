var PersonItemView = Backbone.View.extend({

	events: {
	   'click .edit_btn': 'renderEditPage'
	},
	
    initialize: function() {
        this.template = _.template($('#PersonItemView').html());

        this.model.on('change', this.render, this);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    renderEditPage: function() {
        Backbone.Mediator.pub('person:edit_start', this.model);
    }
});