const renderSignup = () => {
  return `
    <div class="signup">
      <form class="form-signin d-flex flex-column">
        <h1 class="d-flex justify-content-center">Cadastro</h1>
        <input type="text" id="company-name" class="nome-social" placeholder="Nome Social" required autofocus>
        <input type="text" id="company-cnpj" class="cnpj" placeholder="CNPJ" required autofocus>
        <input type="text" id="company-email" class="email" placeholder="Email" required autofocus>
        <input type="password" id="company-password" class="si-password su-password" placeholder="Senha" required autofocus>
        <input type="password" id="confirm-password" class="si-confirm-password su-confirm-password" placeholder="Confirme Senha" required autofocus>
        <button id="sign-up-button" class="sign-in-company button" type="submit"><a href="/menu">Sign Up</a></button>
      </form>
    </div>
  `;
};