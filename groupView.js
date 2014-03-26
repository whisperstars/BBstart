var GroupView = Backbone.View.extend({

    template: _.template('<table class="group_list"></table>'),

    initialize: function() {
        this.render();
		
		this.collection.on('add', this.render, this);
    },

    render: function(model) {
		if(model === undefined) {
			this.$el.html(this.template);
			this.collection.each(this.renderItem, this);		
		} else {
			this.renderItem(model);
		}

        return this;
    },

    renderItem: function(person) {
        var view = new PersonItemView({
                'tagName': 'tr',
                'model': person
            });

        this.$('.group_list').append(view.render().el);
    }
});