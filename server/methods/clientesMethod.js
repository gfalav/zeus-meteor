Meteor.methods({
	insertaCliente: function(doc){

		if (this.userId) {
			check(doc, ClienteSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var cliente = Clientes.insert(doc);
			
		}
	},

	updateCliente: function(doc){

		if (this.userId) {
			check(doc, ClienteSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var cliente = Clientes.update( {_id: doc._id }, {$set: {nombres: doc.nombres} });
		}
	}

})