new Vue({

  el: ".appCore",

  data: {

    menuStatus: false

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

      stored: function()
      {

         var sos = Collections.sosCollection();
         console.log(sos.instance.find()[sos.curId].user);
         console.log(sos.instance.find());

      },


      isUserLogged: function()
      {

        console.log('est connecte');

      }

  }

})
