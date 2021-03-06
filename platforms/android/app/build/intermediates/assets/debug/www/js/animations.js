var Animations = {

   lauchScreen: function()
   {

      var tl = new TimelineMax();

      tl.to('.appLauchScreen',0.9, {opacity: 1,width: '700px', height:'700px', ease: Quad.easeOut}, 0.3);
      tl.to('.appLauchScreen',0.9, {width: '100%', height:'100%', ease: Cubic.easeOut}, '-=0.8');
      tl.to('.appLauchScreen',0.9, {borderRadius: '0px', ease: Quad.easeOut}, '-=0.7');
      tl.to('.lauchBody .logo', 1.2, {scale: 1, ease: Back.easeOut}, '-=0.1','#logo');
      tl.staggerTo('.lauchFoot p, .lauchFoot .alertIcon', 0.5, {opacity: 1, ease: Cubic.easeOut}, 0.5, 'logo +=0.3');
      tl.to('.lauchFoot .alertIcon', 0.09, {yoyo: true, rotation: 30, repeat: 7}, 'logo +=2.2');
      tl.staggerTo('.lauchFoot p, .lauchFoot .alertIcon', 0.5, {opacity:0, ease: Cubic.easeOut}, 0.5, 'logo +=3.2');
      tl.to('.lauchBody .logo', 1.2, {rotation: -90, scale: 0, ease: Back.easeIn}, 'logo +=4.5');
      tl.to('.appLauchScreen',0.9, {opacity: 0,zIndex: '0', ease: Quad.easeOut}, 'logo +=5.5');
      tl.to('.appHome',0.9, {opacity: 1,zIndex: '2', ease: Quad.easeOut}, 'logo +=5.6');
      //tl.to('.core .sosCont',1, {scale: 6, ease: Back.easeOut}, 'logo +=5.5');

      tl.staggerTo('.items', 1, {scale: 1, ease: Back.easeOut}, 0.3, 'logo +=6');

   },


   showMenu: function()
   {

     var tl = new TimelineMax();
     tl.to('.moreMenu',0.9, {right: '0px', ease: Back.easeOut});
     tl.to('.items',0.7, {scale: 0.7, ease: Back.easeOut}, '-=1');

   },


   hideMenu: function()
   {

     var tl = new TimelineMax();
     tl.to('.moreMenu',0.9, {right: '-240px', ease: Back.easeInOut});
     tl.to('.items',0.7, {scale: 1, ease: Back.easeOut}, '-=0.7');

   },


   callForm: function()
   {

     var tl = new TimelineMax();
     tl.to('.signInUp',0.9, {scale: 1, ease: Back.easeInOut});
     tl.to('.items',0.7, {scale: 0.7, ease: Back.easeOut}, '-=1');

   },


   hideForm: function()
   {

     var tl = new TimelineMax();
     tl.to('.signInUp',0.9, {scale: 0, ease: Back.easeInOut});
     tl.to('.items',0.7, {scale: 1, ease: Back.easeOut}, '-=0.7');

   },


   callSosConfirm: function()
   {

     var tl = new TimelineMax();
     tl.to('.sosMsg',0.7, {scale: 1, ease: Back.easeOut});
     tl.to('.items',0.7, {scale: 0.7, ease: Back.easeOut}, '-=1');

   },


   hideSosConfirm: function()
   {

     var tl = new TimelineMax();
     tl.to('.sosMsg',0.7, {scale: 0, ease: Back.easeOut});
     tl.to('.items',0.7, {scale: 1, ease: Back.easeOut}, '-=0.7');

   },


   showHideMsgs: function(message)
   {

     var tl = new TimelineMax();
     tl.to('.msgsCont',1, {scale: 1, ease: Back.easeOut}, '#showmsg');
     tl.to('.items',1, {scale: 0.7, ease: Back.easeOut}, '-=3');
     tl.to('.msgsCont',1, {scale: 0, ease: Back.easeOut}, 5);
     tl.to('.items',1, {scale: 1, ease: Back.easeOut}, 5);

     var msgsContent = document.querySelector('.msgsContent');
     msgsContent.textContent = message;

   },


   callTextHelp: function()
   {

     var tl = new TimelineMax();
     tl.to('.textForm',0.7, {scale: 1, ease: Back.easeOut});
     tl.to('.items',0.7, {scale: 0.7, ease: Back.easeOut}, '-=1');

   },


   hideTextHelp: function()
   {

     var tl = new TimelineMax();
     tl.to('.textForm',0.7, {scale: 0, ease: Back.easeOut});
     tl.to('.items',0.7, {scale: 1, ease: Back.easeOut}, '-=0.7');

   },


   callSosCamera: function()
   {

     var tl = new TimelineMax();
     tl.to('.cameraSosCont',0.7, {scale: 1, ease: Back.easeOut});
     tl.to('.items',0.7, {scale: 0.7, ease: Back.easeOut}, '-=1');

   },


   hideSosCamera: function()
   {

     var tl = new TimelineMax();
     tl.to('.cameraSosCont',0.7, {scale: 0, ease: Back.easeOut});
     tl.to('.items',0.7, {scale: 1, ease: Back.easeOut}, '-=0.7');

   },


   showHelps: function()
   {

     var tl = new TimelineMax();
     tl.to('.helpsCont',1, {scale: 1, ease: Back.easeOut});
     tl.to('.items',1, {scale: 0.7, ease: Back.easeOut}, '-=0.7');

   }

}
