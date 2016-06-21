Router.configure({
	notFoundTemplate: 'notFound', //template with name notFound
	loadingTemplate: 'loading', //template with name loading
	layoutTemplate: 'mainLayoutTemplate' //layout para todo el sitio
});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('home');
  } else {
    this.next();
  }
});

// Lista de rutas
Router.route('/', {
	name: "home",
	template: "home"
});

Router.route('/clientes/new', {
	name: "clientesInsertTemplate",
	template: "clientesInsertTemplate"
})

Router.route('/clientes', {
	name: "clientes",
	template: "clientesIndexTemplate"
})

Router.route('/clientes/:_id', {
	name: "clientesShowTemplate",
	template: "clientesShowTemplate",
	data: function() { return Clientes.findOne(this.params._id); }
})

Router.route('/clientes/:_id/edit', {
	name: "clientesUpdateTemplate",
	template: "clientesUpdateTemplate",
	data: function() { return Clientes.findOne(this.params._id); }
})