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