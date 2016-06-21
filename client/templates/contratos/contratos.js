
Template.contratosInsertTemplate.events({
	'submit form': function(event){
   		event.preventDefault();
    	Meteor.call('insertaContrato', event, function(error, result) {
    		if (error)
    			return alert(error.reason)
    		else
    			Router.go("/home");
    	});
	}
});

Template.contratosUpdateTemplate.events({
    'submit form': function(event){
        event.preventDefault();
        Meteor.call('updateContrato', event, function(error, result) {
            if (error) {
                return alert(error.reason);
            }
            else {
                Router.go("/home");
            }
        });
    }
});

Template.contratosIndexTemplate.helpers({
	contratosVar: function() {
		return Contratos.find();
	}
})

Meteor.subscribe('contratosPublish');