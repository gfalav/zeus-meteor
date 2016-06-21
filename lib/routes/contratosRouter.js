Router.route('/contratos/new', {
	name: "contratosInsertTemplate",
	template: "contratosInsertTemplate"
})

Router.route('/contratos', {
	name: "contratos",
	template: "contratosIndexTemplate"
})

Router.route('/contratos/:_id', {
	name: "contratosShowTemplate",
	template: "contratosShowTemplate",
	data: function() { return Contratos.findOne(this.params._id); }
})

Router.route('/contratos/:_id/edit', {
	name: "contratosUpdateTemplate",
	template: "contratosUpdateTemplate",
	data: function() { return Contratos.findOne(this.params._id); }
})