const renderEdit = () => {
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
  `;
};