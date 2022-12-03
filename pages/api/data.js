let data = [
	{
		login: 'example',
		password: 'example',
	},
];

export default function handler(req, res) {
	if (req.method === 'POST') {
		const { login, password } = req.body;

		data = [{ login, password }, ...data];
		res.status(200).json({ data });
	} else {
		res.status(200).json({ data });
	}
}
