define(['backbone', 'jquery', 'underscore', 'views/VideoView'], function(Backbone, $, _, VideoView) {
    var VideoListView = Backbone.View.extend({
        render: function() {
            this.$el.empty();
            this.collection.each(function(video) {
                var videoView = new VideoView({model: video});
                this.$el.prepend(videoView.render().el);

            }, this);
            return this;
        },
        initialize: function() {
            // this.collection is a Backbone Collection
            this.listenTo(this.collection, 'add', this.render);
        }
    });
    return VideoListView;
});