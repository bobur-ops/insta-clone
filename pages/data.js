import axios from 'axios';
import React, { useEffect, useState } from 'react';

const data = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const res = await axios.get('/api/data');

		setData(res.data.data);
	};

	return (
		<div style={{ padding: '15px' }}>
			<div style={{ fontSize: '18px' }}>Data</div>
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
