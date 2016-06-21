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
			var cliente = Clientes.update( {_id: doc._id }, {$set: {	apellido: doc.apellido,
																		apellido2: doc.apellido2,
																		nombres: doc.nombres,
																		contacto:doc.contacto,
																		apoderado:doc.apoderado,
																		dirClienteId: doc.dirClienteId,
																		documentoNro: doc.documentoNro,
																		documentoTipo: doc.documentoTipo,
																		documentoEmisor: doc.documentoEmisor,
																		ciiu: doc.ciiu,
																		telefono: doc.telefono,
																		email: doc.email,
																		web: doc.web,
																		tClienteId: doc.tClienteId,
																		tratamientoEspecial: doc.tratamientoEspecial,
																		cuenta: doc.cuenta,
																		fAlta: doc.fAlta,
																		fUM: doc.fUM,
																		fBaja: doc.fBaja,
																		usuario: doc.usuario } });
		}
	}

})