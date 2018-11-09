var database = firebase.database();

$(document).ready(function(){

    $('#company-signup').on('click', companySignUp);

  $(".sign-in-button").click(function(event){
    event.preventDefault();

    var email = $(".sign-in-email").val();
    var password = $(".sign-in-password").val();

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(response){
      var userId = response.user.uid;
      window.location = "feed.html?id=" + userId + "&name=" + name
    })

    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
    })
  })



  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $("#sign-up-button").click(function(event){
     event.preventDefault();

      var name = $("#sign-up-name").val();
      var email = $("#sign-up-email").val();
      var password = $("#sign-up-password").val();
      var genero = $(".genero").val();
      var nascimento = $(".nascimento").val();

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response){
          console.log(response);

          database.ref("users/" + userId).push({
            name: name,
            email: email,
            genero: genero,
            nascimento: nascimento,
          });
          window.location = "feed.html?id=" + userId + "&name=" + name

        })

      .catch(function(error) {
       var errorCode = error.code;
       var errorMessage = error.message;
       alert(errorCode, errorMessage);
      })
    })


    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

function companySignUp() {
    var companyName = $('#company-name').val();
    var companyCnpj = $('#company-cnpj').val();
    var companyEmail = $('#company-email').val();
    var companyPassword = $('#company-password').val();

    console.log(companyName, companyCnpj, companyEmail);

    firebase.auth().createUserWithEmailAndPassword(companyEmail, companyPassword)    
    .then(function(response) {
        var USER_UID = response.user.uid;
        createCompanyDatabase(USER_UID, companyName, companyCnpj, companyEmail);
        //ESTÁ LOGANDO, AGORA PRECISA REDIRECIONAR PARA A PRÓXIMA TELA, MUDANDO O CÓDIGO ABAIXO:
        // window.location = 'main.html?id=' + response.user.uid;
    })
    .catch(function(error) {
        console.log(error);
    }
    );
}

function createCompanyDatabase(USER_UID, companyName, companyCnpj, companyEmail) {
    database.ref('companies/' + USER_UID).push({
        nomeSocial: companyName,
        cnpj: companyCnpj,
        email: companyEmail
    });
}