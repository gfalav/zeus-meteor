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

	updateCliente: function(doctoupd){

		if (this.userId) {
			var doc = doctoupd.updateDoc;
			check(doc, ClienteSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			console.log(doc);
			var cliente = Clientes.update( {_id: doc._id }, {$set: doc });
		}
	}

})