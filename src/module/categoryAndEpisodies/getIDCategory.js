const httpConection = require('../../utils/http');
const config = require('../../config/varibleGlobals');

module.exports = async () => {
	// eslint-disable-next-line no-console
	console.log(
		'this is my response =>>>>>>>',
		await httpConection(config.PATH_CATEGORY, config.CATEGORY)
	);
};
