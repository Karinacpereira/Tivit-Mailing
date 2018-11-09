$(document).ready(() => {
  page('/', home);
  page('/client', cliente);
  page('/enterprise', empresa);
  page('/enterprise/login', login);
  page('/enterprise/signup', cadastro);
  page('/menu', menu);
  page('/menu/addClient', addClient);
  page('/menu/editClient', editClient);
  page();
})

function home() {
  $('main').html(renderHome());
}

function cliente() {
  $('main').html(renderClient());
}

function empresa() {
  $('main').html(renderEnterprise());
}

function login() {
  $('main').html(renderLogin());
}

function cadastro() {
  $('main').html(renderSignup());
}

function menu() {
  $('main').html(renderMenu());
}

function addClient() {
  $('main').html(renderAdd());
}

function editClient() {
  $('main').html(renderEdit());
}