var PersonItemView = Backbone.View.extend({

    template: _.template('<td><%= name %></td><td><button class="edti_btn btn">Edit</button></td>'),

	events: {
	
	},
	
    initialize: function() {
        this.model.on('change', this.render, this);
		this.model.on('remove', this.remove, this);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});