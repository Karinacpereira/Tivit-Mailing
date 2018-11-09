const renderHome = () => {
  return `
    <h3 class="welcome d-flex justify-content-center pt-4">Bem vindo ao portal Tivit Mailing!</h3>
    <div class="d-flex flex-column">
      <div class="choice d-flex justify-content-center">
        <div class="left">
          <div class="d-flex flex-row">
            <h4 class="p-4">Você é:</h4>
            <div class="d-flex flex-column p-2">
              <button class="button m-3"><a href="/client">Cliente</a></button>
              <button class="button m-3"><a href="/enterprise">Empresa</a></button>
            </div>
          </div>
        </div>
      </div>  
    </div>                  
  `;
};