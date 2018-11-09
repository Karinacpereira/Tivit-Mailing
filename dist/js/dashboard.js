const renderDashboard = () => {
  return `
  <div class="d-flex justify-content-center">
  <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group mr-2 group-btn" role="group" aria-label="First group">
      <button type="button" class="btn button group-btn"><a href="/menu/gender">Gênero</a></button>
      <button type="button" class="btn button group-btn"><a href="/menu/cep">CEP</a></button>
      <button type="button" class="btn button group-btn"><a href="/menu/school">Escolaridade</a></button>
    </div>
  </div>
</div>
<div>
  <canvas id="myChart"></canvas>
</div>
  `;
};