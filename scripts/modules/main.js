(function() {
	
	!window.console && (window.console = { log: function() {}});
	
	requirejs.config({
		paths: {
			'backbone' : '../libs/backbone/backbone-loader',
			'jquery' : '../libs/jquery/jquery-loader',
			'underscore' : '../libs/underscore/underscore-loader',
			'text' : '../libs/require/require-text'
		},
		shim: {
			'backbone' : [ 'underscore', 'jquery' ]
		}
	});
	
	require(['app'], function(app) {
		app.initialize();
	});
	
}).call(this);
