import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
export default function NotFound() {
	const Router = useRouter();
	useEffect(() => {
		//redirect to home page after 4 seconds
		setTimeout(() => {
			Router.push('/');
		}, 4000);
	}, []);

	return (
		<div className="m-20">
			<h1 className="weight-bold text-2xl">This box is empty</h1>
			<p>
				click here to find your{' '}
				<Link href="/home">
					<a className="text-violet-900 underline underline-offset-2 text-xl">store</a>
				</Link>
			</p>

			<div className="flex items-center justify-center mt-20">
				<div className="animate-spin h-5 w-5 rounded-full border-t-2 border-t-zinc-700" />
			</div>
		</div>
	);
}
