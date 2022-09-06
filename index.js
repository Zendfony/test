const express = require('express');
const app = express();
const urlRoute = require('./src/routes/url');
// Database config
const connection = require('./src/configs/db');
connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));

app.use(
	express.json({
		extended: false,
	})
);
app.use(urlRoute);
app.use(express.static('public'));

const PORT = 3333;
app.listen(PORT, () => {
	console.log(`Server is running at Port ${PORT} `);
});
