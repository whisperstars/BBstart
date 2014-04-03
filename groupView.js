var GroupView = Backbone.View.extend({

    events: {
       'click .add_btn': 'personAddSubscribe'
    },

    subscriptions: {
        'person:add_finish': 'renderItem'
    },

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

        this.$el.find('.group_list').append(view.render().el);
    },

    personAddSubscribe: function() {
        /*var person = new Person();
        
        this.collection.add({'name': ''});
        person = this.collection.last();
        */
        Backbone.Mediator.pub('person:add_start');
    }
});