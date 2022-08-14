import express, { Application } from 'express';
import './utils/db-connector';
import { router } from './routes/employee.route';
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(
	cors({
		origin: '*',
	})
);
app.use(express.json());
app.use(router);

app.listen(port, () => {
	console.log(`connection is setup at port ${port}`);
});
