
Template.clientesInsertTemplate.events({
	'submit form': function(event){
   		event.preventDefault();
        var doc = { apellido: event.target.apellido.value,
                    apellido2: event.target.apellido2.value,
                    nombres: event.target.nombres.value,
                    contacto:event.target.contacto.value,
                    apoderado:event.target.apoderado.value,
                    dirClienteId: event.target.dirClienteId.value,
                    documentoNro: event.target.documentoNro.value,
                    documentoTipo: event.target.documentoTipo.value,
                    documentoEmisor: event.target.documentoEmisor.value,
                    ciiu: event.target.ciiu.value,
                    telefono: event.target.telefono.value,
                    email: event.target.email.value,
                    web: event.target.web.value,
                    tClienteId: event.target.tClienteId.value,
                    tratamientoEspecial: event.target.tratamientoEspecial.value,
                    fAlta: event.target.fAlta.value,
                    fUM: event.target.fUM.value,
                    fBaja: event.target.fBaja.value,
                    usuario: event.target.usuario.value };


    	Meteor.call('insertaCliente', doc, function(error, result) {
    		if (error)
    			return alert(error.reason)
    		else
    			Router.go("home");
    	});
	}
});

Template.clientesUpdateTemplate.events({
    'submit form': function(){
        event.preventDefault();
        Meteor.call('updateCliente', this.doc, function(error, result) {
            if (error) {
                return alert(error.reason);
            }
            else {
                Router.go("home");
            }
        });
    }
});

Template.clientesIndexTemplate.helpers({
	clientesVar: function() {
		return Clientes.find();
	}
})

Meteor.subscribe('clientesPublish');