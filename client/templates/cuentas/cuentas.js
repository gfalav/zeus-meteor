
Template.cuentasInsertTemplate.events({
	'submit form': function(){
   		event.preventDefault();
    	Meteor.call('insertaCuenta', this.doc, function(error, result) {
    		if (error) return alert(error.reason);
    	});
        Router.go("home");
	}
});

Template.cuentasUpdateTemplate.events({
    'submit form': function(){
        event.preventDefault();
        Meteor.call('updateCuenta', this.doc, function(error, result) {
            if (error) return alert(error.reason);
        });
        Router.go("home");
    }
});

Template.cuentasIndexTemplate.helpers({
	cuentasVar: function() {
		return Cuentas.find();
	}
})

Meteor.subscribe('cuentasPublish');