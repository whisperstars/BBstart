PageView = Backbone.View.extend({

    events: {
       'click .edit_btn': 'togglePage',
       'click .set_name_btn': 'togglePage'
    },

    initialize: function() {
        this.template = _.template($('#PageView').html());
        this.render();
    },

    render: function() {
        this.$el.html(this.template());

        return this;
    },

    togglePage: function() {
        this.$('.list_page').toggleClass('hide');
        this.$('.edit_page').toggleClass('hide');
    }
});