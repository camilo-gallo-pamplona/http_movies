const https = require('https');
const config = require('../config/varibleGlobals');

module.exports = (path, category, method = 'GET') => {
	return new Promise((resolve, reject) => {
		const options = {
			hostname: config.HOST_NAME,
			path: `${path}${category}`,
			method,
		};

		const httpRequest = https.request(options, (response) => {
			let data = '';
			response.on('data', (chunk) => {
				data += chunk.toString();
			});

			response.on('end', () => {
				resolve(JSON.parse(data));
			});
		});

		httpRequest.on('error', (error) => {
			reject(new Error(error));
		});

		httpRequest.end();
	});
};
