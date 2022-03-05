import React from 'react';

export default function Card({ shoe }) {
	return (
		<div className="text-gray-800 w-1/2 m-5 p-4 bg-red-100 block">
			<h1 className="text-3xl ">Model</h1>
			<h2 className="text-xl text-gray-500 mb-3">Brand</h2>
			<h3 className="text-gray-700">R$ Price</h3>
			<h3 className="text-gray-700">weight g @ 42</h3>
			<p className="text-gray-700">Description</p>
		</div>
	);
}
