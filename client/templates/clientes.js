
Template.clientesInsertTemplate.events({
	'submit form': function(event){
   		// event.preventDefault();
    	Meteor.call('insertaCliente', event, function(error, result) {
    		if (error)
    			return alert(error.reason)
    		else
    			Router.go("/home");
    	});
	}
});