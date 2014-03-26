var GroupView = Backbone.View.extend({

    template: _.template('<ul class="group_list"></ul>'),

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template);

        this.collection.each(this.renderItem, this);

        return this;
    },

    renderItem: function(person) {
        var view = new PersonItemView({
                'tagName': 'li',
                'model': person
            });

        this.$('.group_list').append(view.render().el);
    }
});