define(['backbone', 'models/VideoModel'],
    function(Backbone, VideoModel){

        var VideoCollection = Backbone.Collection.extend({
            url: 'http://localhost:3000/videos',
            model: VideoModel
        });

        return VideoCollection;
    }
);
