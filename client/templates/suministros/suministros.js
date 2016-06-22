
Template.suministrosInsertTemplate.events({
	'submit form': function(){
   		event.preventDefault();
    	Meteor.call('insertaSuministro', this.doc, function(error, result) {
    		if (error)
    			return alert(error.reason)
    		else
    			Router.go("/home");
    	});
	}
});

Template.suministrosUpdateTemplate.events({
    'submit form': function(){
        event.preventDefault();
        Meteor.call('updateSuministro', this.doc, function(error, result) {
            if (error) {
                return alert(error.reason);
            }
            else {
                Router.go("/home");
            }
        });
    }
});

Template.suministrosIndexTemplate.helpers({
	suministrosVar: function() {
		return Suministros.find();
	}
})

Meteor.subscribe('suministrosPublish');