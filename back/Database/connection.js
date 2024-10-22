const { Pool } = require('pg');

const pool = new Pool({
	user: 'gohnzy',
	host: 'localhost',
	database: 'FullStackBoiler',
	password: 'gohnzy1234',
	port: 1112,
});

const query = (text, params) => pool.query(text, params);
module.exports = { query };
