import X from './X';
import O from './O';
import { useEffect, useState } from 'react';

export default function Square({ playerOneTurn, rowStats, gameStats, squareStats, handleSquareClick }) {
	// initialize state variables for component
	const [played, setPlayed] = useState(squareStats.played); // is the square played?
	const [isX, setIsX] = useState(false); // is the square played by X?
	const [isO, setIsO] = useState(false); // is the square played by O?

	// display X or O when square is played
	useEffect(() => {
		if (squareStats.played && squareStats.value === 1) {
			setIsX(squareStats.value === 1);
		} else if (squareStats.played && squareStats.value === -1) {
			setIsO(squareStats.value === -1);
		} else {
			setIsO(false);
			setIsX(false);
		}
	}, [squareStats, playerOneTurn]);

	useEffect(() => {
		setPlayed(squareStats.played);
	}, [squareStats.played]);

	return (
		<div
			onClick={() => {
				handleSquareClick(played, rowStats.row_id, squareStats.square_id);
				setPlayed(true);
			}}
			className='border w-16 h-16 flex items-center justify-center sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-44 xl:h-44'
		>
			{!played ? <></> : isX ? <X /> : isO ? <O /> : <></>}
		</div>
	);
}
