$(function() {
    var page_view = new PageView({
            'el': $('#group_page')
        }),

        person_edit_view = new PersonEditView({
            'el': $('#group_page .edit_page')
        }),

        group_view = new GroupView({
            'el': $('#group_page .list_page'),
            'edit_el': $('#group_page .edit_page'),
            
            'collection': new Group()
        });

});