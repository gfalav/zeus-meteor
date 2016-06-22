Meteor.methods({
	insertaSuministro: function(doc){

		if (this.userId) {
			check(doc, SuministroSchema);
			doc.fAlta = new Date();
			doc.fUM = new Date();
			doc.fBaja = new Date();
			doc.usuario = this.userId;
			var suministro = Suministros.insert(doc);			
		}
	},

	updateSuministro: function(doc){

		if (this.userId) {
			check(doc, SuministroSchema);
			doc.fUM = new Date();
			doc.usuario = this.userId;
			var suministro = Suministros.update( {_id: doc._id }, {$set: {	nombreSum: doc.nombreSum,
																			dirSumId: doc.dirSumId,
																			tensionSum: doc.tensionSum,
																			fasesSum:doc.fasesSum,
																			tConexionId:doc.tConexionId,
																			tMedicionId: doc.tMedicionId,
																			fAlta: doc.fAlta,
																			fUM: doc.fUM,
																			fBaja: doc.fBaja,
																			usuario: doc.usuario } });
		}
	}

})