import express from 'express';
import {
	deleteEmployee,
	editEmployee,
	getEmployee,
	postEmployee,
} from '../Controller/employee-controller';

export const router = express.Router();

router.post('/employee', postEmployee);

router.get('/employee', getEmployee);

router.put('/employee/:id', editEmployee);

router.delete('/employee/:id', deleteEmployee);
