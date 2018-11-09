$(document).ready(() => {
  page('/', home);
  page('/client', cliente);
  page('/enterprise/login', login);
  page('/enterprise/signup', cadastro)
  page('/enterprise', empresa);
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