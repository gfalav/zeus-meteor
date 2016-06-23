Template.clientesInsertTemplate.events({
	'submit form': function(event){
   		event.preventDefault();
        doc2send =  AutoForm.getFormValues("insertCustonClientesForm");
        doc = doc2send.insertDoc;
    	Meteor.call('insertaCliente', doc, function(error, result) {
    		if (error)
    			return alert(error.reason)
    		else
    			Router.go("home");
    	});
	}
});

Template.clientesUpdateTemplate.events({
    'submit form': function(event){
        event.preventDefault();
        var doc = AutoForm.getFormValues("updateCustonClientesForm");
        Meteor.call('updateCliente', doc, function(error, result) {
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