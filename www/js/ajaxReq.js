AjaxReq = {

  initXhr: function()
  {

      let xhr;

      if (window.XMLHttpRequest) {
          // code for IE7+, Firefox, Chrome, Opera, Safari
           xhr = new XMLHttpRequest();
         } else {
          // code for IE6, IE5
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        return xhr;

  },


  signUp: function(username, password)
  {

     var xhr = AjaxReq.initXhr();
     var formNotif = document.getElementById('formNotif');

     xhr.onreadystatechange = function(){

        if(this.readyState ==  4 && this.status == 200)
        {

          Animations.showHideMsgs(xhr.responseText);

          if(xhr.responseText == 'Jouw account is met succes aangemaakt!')
          {

            AjaxReq.signIn(username, password);
            Animations.hideForm();

          }


        }

     }

     if(username != "" && password != "")
     {

       xhr.open('GET',"http://10.5.1.79:8888/RBA/requests/sign_up.php?username="+username+'&password='+password,true);
       xhr.send();
     }else{

        formNotif.textContent = "Vul de velden...";

     }

  },


  signIn: function(username, password)
  {

     var xhr = AjaxReq.initXhr();
     var formNotif = document.getElementById('formNotif');

     xhr.onreadystatechange = function(){

          if(this.readyState ==  4 && this.status == 200)
          {

              var userData = JSON.parse(xhr.responseText);
              if(userData.logged != undefined)
              {

                window.localStorage.setItem('userId',userData.sessionId);
                window.localStorage.setItem('userName',userData.sessionUsername);
                window.localStorage.setItem('admin',userData.sessionAdmin);
                Animations.hideForm();

              }else{

                formNotif.textContent = userData.error;

              }

          }

     }

     if(username != "" && password != "")
     {

       xhr.open('GET',"http://10.5.1.79:8888/RBA/requests/sign_in.php?username="+username+'&password='+password,true);
       xhr.send();
     }else{

        formNotif.textContent = "Vul de velden...";

     }

  },


  sendSOS: function(username)
  {

      var xhr = AjaxReq.initXhr();

      xhr.onreadystatechange = function(){

         if(this.readyState ==  4 && this.status == 200)
         {

             Animations.showHideMsgs(xhr.responseText);
           if(xhr.responseText == "SOS met succes vestuurd! Uw wordt zo spoedig mogelijk geholpen.")
           {

             Animations.hideSosConfirm();
             Animations.hideForm();

           }

         }

      }

      xhr.open('GET',"http://10.5.1.79:8888/RBA/requests/sos.php?username="+username,true);
      xhr.send();

    },


    sendTextSOS: function(username, content)
    {

        var xhr = AjaxReq.initXhr();
        var textFormNotif = document.querySelector('.textFormNotif');

        xhr.onreadystatechange = function(){

           if(this.readyState ==  4 && this.status == 200)
           {

               Animations.showHideMsgs(xhr.responseText);
             if(xhr.responseText == "Text SOS met succes vestuurd! Uw wordt zo spoedig mogelijk geholpen.")
             {

               Animations.hideTextHelp();
               Animations.hideForm();

             }

           }

        }

        if(content != '')
        {

          xhr.open('GET',"http://10.5.1.79:8888/RBA/requests/text_sos.php?username="+username+'&content='+content,true);
          xhr.send();

        }else{

          textFormNotif.textContent = 'De vraag veld staat leeg...';

        }

      }

  }
