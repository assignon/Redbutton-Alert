
var App = {
    // Application Constructor
    initialize: function() {


      Animations.lauchScreen();

      document.addEventListener('deviceready', function(){

         Animations.lauchScreen();



      },false);

    }

};

App.initialize();
