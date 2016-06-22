Router.route('/cuentas/new', {
	name: "cuentasInsertTemplate",
	template: "cuentasInsertTemplate"
})

Router.route('/cuentas', {
	name: "cuentas",
	template: "cuentasIndexTemplate"
})

Router.route('/cuentas/:_id', {
	name: "cuentasShowTemplate",
	template: "cuentasShowTemplate",
	data: function() { return Cuentas.findOne(this.params._id); }
})

Router.route('/cuentas/:_id/edit', {
	name: "cuentasUpdateTemplate",
	template: "cuentasUpdateTemplate",
	data: function() { return Cuentas.findOne(this.params._id); }
})