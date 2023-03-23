import Square from './Square';

export default function Row({ playerOneTurn, rowStats, handelSquareClick }) {
	return (
		<div className='flex'>
			{rowStats.stats.map((squareStats) => (
				<Square
					key={squareStats.square_id}
					playerOneTurn={playerOneTurn}
					rowStats={rowStats}
					squareStats={squareStats}
					handelSquareClick={handelSquareClick}
				/>
			))}
		</div>
	);
}
