import { Request, Response } from 'express';
import { Employee } from '../models/employee.model';

export const postEmployee = async (req: Request, res: Response) => {
	console.log(req.body);
	const data = new Employee(req.body);
	const result = await data.save();

	if (!result) {
		res.json({
			status: 'FAILED',
			message: 'employee registration failed...',
		});
	} else {
		res.json({
			status: 'SUCCESS',
			message: 'employee data registered successfully....',
			data: result,
		});
	}
};

export const getEmployee = async (req: Request, res: Response) => {
	try {
		const result = await Employee.find();
		if (!result) {
			res.status(404).json({
				status: 'FAILED',
				message: 'Record not found',
			});
		} else {
			res.status(200).json({
				status: 'SUCCESS',
				message: 'Fetch Successful',
				data: result,
			});
		}
	} catch (e) {
		res.status(500).json({
			message: e,
		});
	}
};

export const editEmployee = async (req: Request, res: Response) => {
	try {
		const result = await Employee.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		if (!result) {
			res.status(404).json({
				status: 'FAILED',
				message: 'Record update failed',
			});
		} else {
			res.status(201).json({
				status: 'SUCCESS',
				message: 'Record update succesful',
				data: result,
			});
		}
	} catch (e) {
		res.status(500).json({
			message: e,
		});
	}
};

export const deleteEmployee = async (req: Request, res: Response) => {
	try {
		const result = await Employee.findByIdAndDelete(req.params.id);

		if (!result) {
			res.status(404).json({
				status: 'FAILED',
				message: 'Record is not deleted',
			});
		} else {
			res.status(200).json({
				status: 'SUCCESS',
				message: 'Record deleted succesfully',
				data: result,
			});
		}
	} catch (e) {
		res.status(500).json({
			message: e,
		});
	}
};
