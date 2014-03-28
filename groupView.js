var GroupView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template($('#GroupView').html());

        this.render();
    },

    render: function() {
		this.$el.html(this.template);
		this.collection.each(this.renderItem, this);		

        return this;
    },

    renderItem: function(person) {
        var view = new PersonItemView({
                'tagName': 'tr',
                'model': person
            });

        this.$('.group_list').append(view.render().el);
    },
});