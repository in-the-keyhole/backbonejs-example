define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		defaults: {
			heading: 'Backbone Example',
			date: new Date()
		}
	});
});