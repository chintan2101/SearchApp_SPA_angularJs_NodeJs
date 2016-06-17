var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app) {
	app.get('/movie/search', function(req, res){
		superagent
		.get(config.tvmaze.url + '/search/shows')
		.query({ q: req.query.name })
		.end(function(err, result){
			res.json(result.body);
			// console.log(result.body);
		})   
	});

	app.get('/movie/:id', function(req, res){
		superagent
		.get(config.tvmaze.url + '/shows/' + req.params.id)
		.query({ embed: 'cast' })
		.end(function(err, result){
			res.json(result.body)
		})
	})

	// app.get('/movie/search', function(req, res){
	// 	var body = '';
	// 	request
	// 	.get(config.tvmaze.url + '/search/shows')
	// 	.qs({ q: req.query.name })
	// 	.qs({ format: 'json' })
	// 	.on('data', function (result) {    		
	// 		// body += result;
	// 		res.write(result.body);
 	// 		})
 	//	.on('end', function() {
 	//		console.log('BODY: ' + body);
 	// 		res.end(body);  
 	// 		});
	// });
};