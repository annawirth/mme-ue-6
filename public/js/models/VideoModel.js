define(['backbone'],
    function(Backbone){

        var VideoModel = Backbone.Model.extend({
            //urlRoot: "http://localthost:3000/videos"
            idAttribute: "_id",
            defaults: {
                title: '',
                description: '',
                length: 0,
                ranking: 0,
                src: '',
                playcount: 0
            }
        });


        return VideoModel;
    }
);
