define(['jquery', 'underscore', 'backbone', './body.model', 'text!./body.html'], function($, _, Backbone, Model, Template) {
	return Backbone.View.extend( {
		tagName: 'div',
		className: 'heading',
		model: new Model(),
		initialize: function() {
			this.render();
		},
		render: function() {
			var _html = _.template(Template, this.model.toJSON(), { variable: 'model' } );
			this.$el.html(_html);
		},
		events: {
			'click button.refresh' : 'refresh'
		},
		'refresh' : function(event) {
			this.model.set('date', new Date());
			this.render();
		}
	});
})