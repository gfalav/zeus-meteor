Meteor.methods({
	insertaEdesal: function(doc){

		if (this.userId) {
			check(doc, EdesalSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var edesal = Edesals.insert(doc);			
		}
	},

	updateEdesal: function(doc){

		if (this.userId) {
			check(doc, EdesalSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var edesal = Edesals.update( {_id: doc._id }, {$set: 	{	contratoId: doc.contratoId, 
																		suministroId: doc.suministroId,
																		tarifa: doc.tarifa,
																		perFactura: doc.perfactura,
																		potencias: doc.potencias,
																		consFijo: doc.consFijo,
																		cosFi: doc.cosFi,
																		tipoIVA: doc.tipoIVA,
																		tipoIIBB: doc.tipoIIBB,
																		tipoPercepIIBB: doc.tipoPercepIIBB,
																		fAlta: doc.fAlta,
																		fUM: doc.fUM,
																		fBaja: doc.fBaja,
																		usuario: doc.usuario
																		} });
		}
	}

})