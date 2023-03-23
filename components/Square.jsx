import X from './X';
import O from './O';
import { useEffect, useState } from 'react';

export default function Square({ handelSquareReset, playerOneTurn, rowStats, squareStats, handelSquareClick }) {
	const [played, setPlayed] = useState(squareStats.played);
	const [isX, setIsX] = useState(false);
	const [isO, setIsO] = useState(false);

	useEffect(() => {
		if (squareStats.played && squareStats.value === 1) {
			setIsX(squareStats.value === 1);
		} else if (squareStats.played && squareStats.value === -1) {
			setIsO(squareStats.value === -1);
		}
	}, [squareStats, playerOneTurn]);

	useEffect(() => {
		if (played) {
			handelSquareReset(played, rowStats.row_id, squareStats.square_id);
		}
	}, []);

	// handelSquareReset(played, rowStats.row_id, squareStats.square_id);

	return (
		<div
			onClick={() => {
				handelSquareClick(played, rowStats.row_id, squareStats.square_id);
				setPlayed(true);
			}}
			className='border w-16 h-16 flex items-center justify-center'
		>
			{!played ? <></> : isX ? <X /> : isO ? <O /> : <></>}
		</div>
	);
}
