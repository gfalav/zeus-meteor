Router.route('/edesals/new', {
	name: "edesalsInsertTemplate",
	template: "edesalsInsertTemplate"
})

Router.route('/edesals', {
	name: "edesals",
	template: "edesalsIndexTemplate"
})

Router.route('/edesals/:_id', {
	name: "edesalsShowTemplate",
	template: "edesalsShowTemplate",
	data: function() { return Edesals.findOne(this.params._id); }
})

Router.route('/edesals/:_id/edit', {
	name: "edesalsUpdateTemplate",
	template: "edesalsUpdateTemplate",
	data: function() { return Edesals.findOne(this.params._id); }
})