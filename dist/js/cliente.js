var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/);

$(document).ready(function(){
  database.ref('users/' + USER_ID).once('value')
  .then(function(snapshot){
    var userInfo = snapshot.val();
    // $(".user-name").text(userInfo.name)
  })

  database.ref('users/').once('value')
  .then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      createUsers(childData.name, childKey);
    });
  });

  $("#people-signup").click(function(event){
    event.preventDefault();

    var peopleName = $('#people-name').val();
    var peopleEmail = $('#people-email').val();
    var peoplePassword = $('#people-password').val();
    var peopleGender = $('#people-gender').val();

    var newPostIndb = database.ref('people/' + USER_ID).push({
      nome: peopleName,
      email: peopleEmail,
      password: peoplePassword,
      genre: peopleGender
    });
  })
});


