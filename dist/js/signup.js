const renderSignup = () => {
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
    <form class="form-sign-up">
      <h1 class="">Cadastro</h1>
      <input type="text" id="nome-social" class="nome-social" placeholder="Nome Social" required autofocus>
      <input type="text" id="cnpj" class="cnpj" placeholder="CNPJ" required autofocus>
      <input type="text" id="email" class="email" placeholder="Email" required autofocus>
      <input type="password" id="password" class="si-password su-password" placeholder="Senha" required autofocus>
      <input type="password" id="confirm-password" class="si-confirm-password su-confirm-password" placeholder="Confirme Senha" required autofocus>
      <button id="sign-up-company" class="sign-up-company" type="submit">Sign Up</button>
    </form>
  </div>
  `;
};