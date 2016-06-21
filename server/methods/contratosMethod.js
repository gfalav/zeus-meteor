Meteor.methods({
	insertaContrato: function(doc){

		if (this.userId) {
			console.log(doc);
			check(doc, ContratoSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var contrato = Contratos.insert(doc);
			
		}
	},

	updateContrato: function(doc){

		if (this.userId) {
			check(doc, ContratoSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var contrato = Contratos.update( {_id: doc._id }, {$set: 	{	nombres: doc.nombre, 
																			clienteId: doc.clienteId,
																			cuentaId: doc.cuentaId,
																			tipoContrato: doc.tipoContrato,
																			estadoContrato: doc.estadoContrato,
																			dirPostalId: doc.dirPostalId,
																			fAlta: doc.fAlta,
																			fUM: doc.fUM,
																			fBaja: doc.fBaja
																		} });
		}
	}

})