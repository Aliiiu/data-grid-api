import express from 'express';
import { validator } from '../validator/authentication';
import {
	deleteEmployee,
	editEmployee,
	getEmployee,
	postEmployee,
} from '../controllers/employee.controller';

export const router = express.Router();

router.post('/employee', validator, postEmployee);

router.get('/employee', getEmployee);

router.put('/employee/:id', editEmployee);

router.delete('/employee/:id', deleteEmployee);
