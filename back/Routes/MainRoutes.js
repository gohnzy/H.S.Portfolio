const express = require('express');
const router = express.Router();
const database = require('../Database/connection');

router.get('/', async (req, res) => {
	try {
		const data = await database.query('SELECT * FROM *');
		res.status(200).json({
			message: 'Data fetched successfully!',
			data: data,
		});
	} catch (error) {
		res.status(500).send('Error on data fetching!');
	}
});

module.exports = router;
