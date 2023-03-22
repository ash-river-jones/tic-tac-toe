import X from './X';
import O from './O';
import { useEffect, useState } from 'react';

export default function Square({ squareStats, handelSquareClick }) {
	const [played, setPlayed] = useState(false);
	const [isX, setIsX] = useState(false);

	useEffect(() => {
		if (squareStats != 0) {
			setPlayed(true);
			setIsX(squareStats == 1);
		}
	}, [squareStats]);

	return (
		<div
			onClick={() => {
				handelSquareClick(played, isX);
			}}
			className='border w-16 h-16 flex items-center justify-center'
		>
			{!played ? <></> : isX ? <X /> : <O />}
		</div>
	);
}
