/** Main application file to start the client side single page app for tweets
 *
 * @author Johannes Konert
 */

requirejs.config({
    baseUrl: "/js",
    paths: {
        jquery: './_lib/jquery-1.11.3',
        underscore: './_lib/underscore-1.8.3',
        backbone: './_lib/backbone-1.2.3'
    },
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

// AMD conform require as provided by require.js
require(['jquery', 'backbone', 'models/VideoCollection', 'views/VideoView'],
    function($, Backbone, VideoCollection, VideoView) {

        var AppRouter = Backbone.Router.extend({
            routes: {
                '': 'main',
                '*unknownRoute': 'main'
            },
            main: function(){
                var videoCollection = new VideoCollection();
                videoCollection.fetch({
                    success: function() {
                        var view = new VideoView({ model: videoCollection.first() });
                        view.render();
                        $('.content').html(view.el);
                    },
                    error: function(req) {
                        alert("Shit's on fire" + req.error)
                    }
                });
            }
        });

        var myRouter = new AppRouter();

        // finally start tracking URLs to make it a SinglePageApp (not really needed at the moment)
        Backbone.history.start({pushState: true}); // use new fancy URL Route mapping without #
    }
);
