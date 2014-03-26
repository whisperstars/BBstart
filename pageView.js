PageView = Backbone.View.extend({

    template: _.template('<div class="list_page"></div><div class="edit_page hide"></div>'),

    events: {
       'click .edit_btn': 'togglePage',
       'click .set_name_btn': 'togglePage'
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template());
    },

    togglePage: function() {
        /*this.$('.list_page').toggleClass('hide');
        this.$('.edit_page').toggleClass('hide');*/
    }
});