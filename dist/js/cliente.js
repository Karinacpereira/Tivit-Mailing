const renderClient = () => {
  return `
    <div class="page d-flex flex-column">
      <h3 class="welcome d-flex justify-content-center pt-4">Bem vindo ao portal Tivit Mailing!</h3>
      <div class="choice d-flex">
        <div class="left">
          <div class="d-flex flex-row">
            <h4 class="p-4">Você é:</h4>
            <div class="d-flex flex-column p-2">
              <button class="button m-3"><a href="/client">Cliente</a></button>
            </div>
          </div>
        </div>
      </div>  
    </div>  
    <div class="rigth">
      <section class="text-center">
        <form class="form-signin">
          <h1 class="">Usuário cadestre-se aqui:</h1>
          <input type="name" id="sign-up-name" class="" placeholder="Nome" required autofocus>
          <input type="email" id="sign-up-email" class="" placeholder="E-mail" required autofocus>
          <select type="gender" class="" id="sign-up-password" placeholder="Gênero">
            <option selected>Gênero</option>
            <option value="1">Feminino</option>
            <option value="2">Masculino</option>
            <option value="3">Outros</option>
          </select>
          <input type="text" id="sign-up-address" class="" placeholder="Endereço" required autofocus>
          <input type="number" id="sign-up-cep" class="" placeholder="CEP" required autofocus>
          <input type="text" id="sign-up-state" class="" placeholder="Estado" required autofocus>
          <input type="text" id="sign-up-city" class="" placeholder="Cidade" required autofocus>
          <input type="date" id="sign-up-birth" class="" placeholder="Data de nascimento" required autofocus>
          <select type="text" class="" id="sign-up-schooling" placeholder="Escolaridade">
            <option selected>Escolaridade</option>
            <option value="1">Fundamental Incompleto</option>
            <option value="2">Fundamental Completo</option>
            <option value="3">Médio Incompleto</option>
            <option value="4">Médio Completo</option>
            <option value="5">Superior Incompleto</option>
            <option value="6">Superior Completo</option>
            <option value="7">Pós Graduação</option>
          </select>
          <select type="text" class="" id="sign-up-schooling" placeholder="Classe social">
            <option selected>Classe social</option>
            <option value="1">Classe alta</option>
            <option value="2">Classe média</option>
            <option value="3">Classe baixa</option>
          </select>
        </form>
        <button class="" id="sign-up-usuary" type="submit"><a href="/">Enviar dados</a></button>
      </section>
    </div>
  </div>
  `;
};