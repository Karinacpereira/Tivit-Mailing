const renderLogin = () => {
  return `
    <div class="page d-flex flex-column">
      <h3 class="welcome d-flex justify-content-center pt-4">Bem vindo ao portal Tivit Mailing!</h3>
      <div class="choice d-flex">
        <div class="left">
          <div class="d-flex flex-row">
            <h4 class="p-4">Você é:</h4>
            <div class="d-flex flex-column p-2">
              <button class="button m-3">Empresa</button>
              <div>
                <button><a href="/enterprise/login">Login</a></button>
                <button><a href="/enterprise/signup">Cadastro</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <div class="rigth">
      <form class="form-signin">
        <h1 class="">Login</h1>            
        <input type="text" id="cnpj" class="cnpj" placeholder="CNPJ" required autofocus>
        <input type="password" id="password-company" class="si-password-company su-password-company" placeholder="Senha" required autofocus>
        <button type="button" class="sign-in-company" data-toggle="modal" data-target="#signInModal"><a href="/menu">Sign In</a></button>
      </form>
    </div>
  `;
};