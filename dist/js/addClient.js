const renderAdd = () => {
  return  `
    <div class="d-flex justify-content-center">
      <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2 group-btn" role="group" aria-label="First group">
          <button type="button" class="btn button group-btn"><a href="/menu/addClient">Novo Cliente</a></button>
          <button type="button" class="btn button group-btn"><a href="/menu/editClient">Gerenciar Cliente</a></button>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text" id="btnGroupAddon">Busca</div>
          </div>
          <input type="text" class="form-control" placeholder="Ex. Gênero, CEP, Classe Social" aria-label="Input group example" aria-describedby="btnGroupAddon">
        </div>
      </div>
    </div>
    <section class="text-center">
      <form class="form-signin d-flex flex-column">
        <h1 class="">Cadastro de Clientes:</h1>
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
      <button class="button" id="sign-up-usuary" type="submit">Enviar dados</button>
    </section>
  `;
};