import mongoose, { model } from 'mongoose';

const Schema = mongoose.Schema;

interface Employee {
	name: string;
	gender: string;
	role: string;
	country: string;
}

const employeeSchema = new Schema<Employee>({
	name: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
});

export const Employee = model<Employee>('Employee', employeeSchema);
