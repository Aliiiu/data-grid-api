export function generateErrorMessage(error: any): string {
	let errorMessage = Object.values(error)
		.filter(Boolean)
		.join(', ')
		.replace(/,(?=[^,]*$)/, ' and');
	return errorMessage;
}
