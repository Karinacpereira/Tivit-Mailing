const renderLogin = () => {
  return `
    <h3 class="welcome d-flex justify-content-center pt-4">Bem vindo ao portal Tivit Mailing!</h3>
      <div class="d-flex flex-column">
        <form class="form-signin d-flex flex-column">
          <h4 class="m-5">Login</h4>            
          <input type="text" id="e-mail" class="sign-in-email" placeholder="E-mail" required autofocus>
          <input type="password" id="password-company" class="sign-in-password si-password-company su-password-company" placeholder="Senha" required autofocus>
          <button type="button" class="sign-in-company button"><a href="/menu">Sign In</a></button>
        </form>
      </div>
    </div>
  `;
};