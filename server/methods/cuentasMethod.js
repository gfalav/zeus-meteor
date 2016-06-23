Meteor.methods({
	insertaCuenta: function(doc){

		if (this.userId) {
			var doctoins = doc.insertDoc;
			check(doctoins, CuentaSchema);
			doctoins.fAlta = new Date();
			doctoins.fUM = new Date();
			doctoins.fBaja = new Date();
			doctoins.usuario = this.userId;
			var cuenta = Cuentas.insert(doctoins);			
		}
	},

	updateCuenta: function(doc){

		if (this.userId) {
			check(doc, CuentaSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var cuenta = Cuentas.update( {_id: doc._id }, {$set: {	nombre: doc.nombre,
																	indCortable: doc.indCortable,
																	tipoVencimiento: doc.tipoVencimiento,
																	tipoEmision: doc.tipoEmision,
																	formaPago: doc.formaPago,
																	dirPostalId: doc.documentoTipo,
																	fAlta: doc.fAlta,
																	fUM: doc.fUM,
																	fBaja: doc.fBaja,
																	usuario: doc.usuario } });
		}
	}

})