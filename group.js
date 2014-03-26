var Group = Backbone.Collection.extend({
    model: Person,

    initialize: function() {
        this.add({'name': 'Дмитрий'});
        this.add({'name': 'Андрей'});
        this.add({'name': 'Богдан'});
        this.add({'name': 'Юлия'});
        this.add({'name': 'Роксолана'});
        this.add({'name': 'Георгий'});
        this.add({'name': 'Сергей'});
    }
});