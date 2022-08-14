import ApiResponse from './api-response';

export function ApplicationError(
	code: number,
	type: string,
	message: string
): ApiResponse {
	return {
		success: false,
		error: {
			code,
			type,
			message,
		},
	};
}

export function InvalidFormDataError(message: string = 'Invalid form data!') {
	return ApplicationError(400, 'InvalidFormData', message);
}

export function ServerError(message: string = 'Server Error!') {
	return ApplicationError(500, 'ServerError', message);
}
