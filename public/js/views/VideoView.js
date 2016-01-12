define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _) {

    var VideoView = Backbone.View.extend({
        tagName: 'section',
        template: _.template( $('#video-template').text() ),
        render: function() {
            var content = this.template(this.model.attributes);
            this.$el.html(content);
            return this;
        }
    });

    return VideoView;

});