const mongoose = require('mongoose');const DB_URI =
	'mongodb+srv://nourhen:test1234@cluster0.wpclduu.mongodb.net/?retryWrites=true&w=majority';

// establishing a database connection
mongoose.connect(DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;

// export the connection object
module.exports = connection;
