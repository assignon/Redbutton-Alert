
new Vue({

  el: ".appCore",

  data: {

    menuStatus: false,
    userID: window.localStorage.getItem('userId'),
    username: window.localStorage.getItem('userName'),
    userIsAdmin: window.localStorage.getItem('admin')

  },


  methods: {

      chgMenuStatus: function()
      {

         this.menuStatus = !this.menuStatus;

         if(this.menuStatus)
         {

          Animations.showMenu();

         }else{

           Animations.hideMenu();

         }

      },


      closeMenu: function()
      {

        Animations.hideMenu();
        this.menuStatus = false;

      },


      userData: function()
      {

      /*  var usercollection = window.localStorage.getItem('userCollection');
        var userdata = usercollection.find({_id: signIn.curId})[this.userID];
        return userdata;*/

      },


      isUserLogged: function()
      {

        if(this.username != null)
        {

          console.log("you are logged");

        }else{

          Animations.callForm();
          Animations.hideMenu();

        }

      },


      registration: function()
      {

         var username = document.getElementById('username');
         var pass = document.getElementById('password');

         AjaxReq.signUp(username.value, pass.value);
         this.username = username.value;

      },


      login: function()
      {

        var username = document.getElementById('username');
        var pass = document.getElementById('password');

        AjaxReq.signIn(username.value, pass.value);
        this.username = username.value;

      },


      callSosConfirm: function()
      {

        if(this.username != null)
        {

          Animations.callSosConfirm();

        }else{

          Animations.callForm();
          Animations.hideMenu();

        }


      },


      hideSosConfirm: function()
      {

         Animations.hideSosConfirm();

      },


      sendSos: function()
      {

        AjaxReq.sendSOS(this.username);

      },


      logOut: function()
      {

         window.localStorage.removeItem('userId');
         window.localStorage.removeItem('userName');
         window.localStorage.removeItem('admin');
         this.username = null;
         Animations.hideMenu();

      },


      closeForm: function()
      {

         Animations.hideForm();

      },


      callTxtForm: function()
      {

        if(this.username != null)
        {

          Animations.callTextHelp();

        }else{

          Animations.callForm();
          Animations.hideMenu();

        }

      },


      closeTxtForm: function()
      {

         Animations.hideTextHelp();

      },


      sendTxtSos: function()
      {

         var content = document.querySelector('.sosTextContent');
         AjaxReq.sendTextSOS(this.username, content.value);

      },


      cameraOptions: function(srcType)
      {

          var cameraOpts = {

            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: srcType,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.mediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true

          }
         return cameraOpts;

      },


      cameraSos: function()
      {

          if(this.username != null)
          {

            this.takePicture();

          }else{

            Animations.callForm();
            Animations.hideMenu();

          }

      },


      takePicture: function()
      {

         document.addEventListener('deviceready', function(){
alert();
           var srcType = Camera.PictureSourceType.CAMERA;
           var opts = this.cameraOptions(srcType);

           navigator.camera.getPicture(function camerSucces(imageUri){

              Animations.callSosCamera();
              var picture = document.querySelector('.picture');
              picture.src = imageUri;

           }, function cameraError(err0r){

              console.debug('Unable to take the picture due: '+ error, 'app');

           }, opts)

         })

      }

  }

})
