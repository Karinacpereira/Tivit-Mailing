const renderClient = () => {
  return `
    <div class="page d-flex flex-column">
      <h3 class="welcome d-flex justify-content-center pt-4">Bem vindo ao portal Tivit Mailing!</h3>
    </div>  
    <div class="rigth">
      <section class="text-center">
        <form class="form-signin d-flex flex-column m-5">
          <h5>Usuário cadestre-se aqui:</h5>
          <input type="name" id="sign-up-name" placeholder="Nome" required autofocus>
          <input type="email" id="sign-up-email" placeholder="E-mail" required autofocus>
          <select type="gender" id="sign-up-password" placeholder="Gênero">
            <option selected>Gênero</option>
            <option value="1">Feminino</option>
            <option value="2">Masculino</option>
            <option value="3">Outros</option>
          </select>
          <input type="text" id="sign-up-address" placeholder="Endereço" required autofocus>
          <input type="number" id="sign-up-cep" placeholder="CEP" required autofocus>
          <input type="text" id="sign-up-state" placeholder="Estado" required autofocus>
          <input type="text" id="sign-up-city" placeholder="Cidade" required autofocus>
          <input type="date" id="sign-up-birth" placeholder="Data de nascimento" required autofocus>
          <select type="text" id="sign-up-schooling" placeholder="Escolaridade">
            <option selected>Escolaridade</option>
            <option value="1">Fundamental Incompleto</option>
            <option value="2">Fundamental Completo</option>
            <option value="3">Médio Incompleto</option>
            <option value="4">Médio Completo</option>
            <option value="5">Superior Incompleto</option>
            <option value="6">Superior Completo</option>
            <option value="7">Pós Graduação</option>
          </select>
          <select type="text" id="sign-up-schooling" placeholder="Classe social">
            <option selected>Classe social</option>
            <option value="1">Classe alta</option>
            <option value="2">Classe média</option>
            <option value="3">Classe baixa</option>
          </select>
        </form>
        <button class="button" id="sign-up-usuary" type="submit"><a href="/">Enviar dados</a></button>
      </section>
    </div>
  </div>
  `;
};