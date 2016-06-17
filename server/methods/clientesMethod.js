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

		return cliente;
	}
})