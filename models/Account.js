import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
	login: String,
	password: String,
});

module.exports =
	mongoose.models.Account || mongoose.model('Account', AccountSchema);
