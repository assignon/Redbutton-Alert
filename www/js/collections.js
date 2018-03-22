var Collections = {

  mongogx: function()
  {

     let mongogx = new OGX.Mongogx();
     mongogx.createDatabase('rba');
     mongogx.setDatabase('rba');
     return mongogx;

     /*mongogx.createDatabase('my_project');
   	mongogx.setDatabase('my_project');

   	mongogx.createCollection('users');

   	mongogx.setCollection('users');



   	mongogx.insert({first_name:'Eric', age:42, sex:'male', location:{state:'ON', city:'Toronto'}, favorites:{meals:[{name:'pizza'}, {name:'pasta'}]}});
   	mongogx.insert({first_name:'Tania', age:38, sex:'female', location:{state:'ON', city:'Toronto'}});
   	mongogx.insert({first_name:'Julien', age:45, sex:'male', location:{state:null, city:'Stockholm'}});
   	mongogx.insert({first_name:'George', age:55, sex:'male', location:{state:'QC', city:'Montreal'}, arts:{martial:['kickboxing', 'wresting']}});*/


  },


  signUp: function(username, password)
  {

    var usersCollection = Collections.mongogx();
    usersCollection.createCollection('users');
    usersCollection.setCollection('users');
    var curUser = usersCollection.insert({username: username, password: password});
    return {collection: curUser, curId: insertData};


  }


  sosCollection: function()
  {

     var mongogxCollection = Collections.mongogx();
     mongogxCollection.createCollection('simpleAlert');
     mongogxCollection.setCollection('simpleAlert');
     var insertData = mongogxCollection.insert({user: 'yanick', message: 'j ai un bogue sur mon site! pouvez vous m aider?'});console.log(insertData);
     return {instance: mongogxCollection, curId: insertData};

  }

}
