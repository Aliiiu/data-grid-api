import mongoose from 'mongoose';
import 'dotenv/config';

const url = process.env.DB_URI;

if (url) {
	mongoose
		.connect(url)
		.then(() => console.log(`connection setup successful`))
		.catch((err) => {
			console.log('something went wrong');
			console.log(err);
		});
}
