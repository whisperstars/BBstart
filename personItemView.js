var PersonItemView = Backbone.View.extend({

    template: _.template('<td><%= name %></td><td><button class="edit_btn btn">Edit</button></td>'),

	events: {
	   'click .edit_btn': 'renderEditPage'
	},
	
    initialize: function() {
        this.model.on('change', this.render, this);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    renderEditPage: function() {
        person_edit_view.setModel(this.model);
    }
});