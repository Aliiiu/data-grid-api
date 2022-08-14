import express, { Application, Request, Response } from 'express';
import './DBConnection/conn';
import { router } from './Routers/routes';
const cors = require('cors');

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
