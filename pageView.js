PageView = Backbone.View.extend({

    template: _.template('<div class="list_page"></div><div class="edit_page hide"></div>'),

    events: {
       'click .edit_btn': 'tooglePage',
       'click .set_name_btn': 'tooglePage'
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template());
    },

    toodlePage: function() {
        this.$('.list_page').toogleClass('hide');
        this.$('.edit_page').toogleClass('hide');
    }
});