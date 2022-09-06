const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/Url');

//Redirect  to long URL

const redirect = async (req, res, next) => {
	try {		
		const url = await Url.findOne({urlCode: req.params.code});
		if (url) {
			return res.redirect(url.longUrl);
		} else {
			return res.status(404).json('No URL Found');
		}
	} catch (err) {
		res.status(500).json('Server Error');
	}
};

//Create short URL

const shorten = async (req, res, next) => {
	const baseUrl = 'http://localhost:3333';
	const { longUrl } = req.body;
	if (!validUrl.isUri(baseUrl)) {
		return res.status(401).json('Invalid base URL');
	}
	const urlCode = shortid.generate();
	if (validUrl.isUri(longUrl)) {
		try {
			let url = await Url.findOne({
				longUrl,
			});
			if (url) {
				res.json(url);
			} else {
				
				const shortUrl = baseUrl + '/' + urlCode;

				url = new Url({
					longUrl,
					shortUrl,
					urlCode,
					date: new Date(),
				});
				await url.save();
				res.json(url);
			}
		} catch (err) {
			console.log(err);
			res.status(500).json('Server Error');
		}
	} else {
		res.status(401).json('Invalid longUrl');
	}
};

module.exports = {
	redirect,
	shorten,
};
