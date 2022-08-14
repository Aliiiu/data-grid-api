import { Request, Response, NextFunction } from 'express';
import { InvalidFormDataError, ServerError } from '../lib/error';
import { generateErrorMessage } from '../lib/generate-error-msg';

export function validator(req: Request, res: Response, next: NextFunction) {
	const { name, gender, role, country } = req.body;
	const error: any = {};
	try {
		if (!name) {
			error.name = 'enter your name';
		}
		if (!gender) {
			error.gender = 'enter your gender';
		}
		if (!role) {
			error.role = 'enter your role';
		}
		if (!country) {
			error.country = 'enter your country';
		}
		if (Object.keys(error).length > 0) {
			const errorMessage: string = generateErrorMessage(error);
			return res.send(InvalidFormDataError(errorMessage));
		}
		next();
	} catch (error: any) {
		console.log(error.message);
		return res.send(ServerError());
	}
}
