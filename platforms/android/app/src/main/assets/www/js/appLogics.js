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

      }

  }

})
