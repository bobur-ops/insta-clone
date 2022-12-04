import Account from '../../models/Account';
import mongoose from 'mongoose';

export default async function handler(req, res) {
	const { method } = req;
	const LOCAL_URL =
		'mongodb+srv://boburkomilob:9bOUrZSnvxBr54JY@cluster0.v5eor.mongodb.net/?retryWrites=true&w=majority';

	mongoose.connect(LOCAL_URL).catch((error) => console.log(error.message));

	switch (method) {
		case 'GET':
			try {
				const users = await Account.find({});
				res.status(200).json({ success: true, data: users.reverse() });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const user = await Account.create(req.body);
				res.status(201).json({ success: true, data: user });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
