
Template.clientesInsertTemplate.events({
	'submit form': function(event){
   		event.preventDefault();
    	Meteor.call('insertaCliente', event, function(error, result) {
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