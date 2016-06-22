
Template.edesalsInsertTemplate.events({
	'submit form': function(){
   		event.preventDefault();
    	Meteor.call('insertaEdesal', this.doc, function(error, result) {
    		if (error)
    			return alert(error.reason)
    		else
    			Router.go("/home");
    	});
	}
});

Template.edesalsUpdateTemplate.events({
    'submit form': function(){
        event.preventDefault();
        Meteor.call('updateEdesal', this.doc, function(error, result) {
            if (error) {
                return alert(error.reason);
            }
            else {
                Router.go("/home");
            }
        });
    }
});

Template.edesalsIndexTemplate.helpers({
	edesalsVar: function() {
		return Edesals.find();
	}
})

Meteor.subscribe('edesalsPublish');