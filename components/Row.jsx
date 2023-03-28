import Square from './Square';

export default function Row({ playerOneTurn, rowStats, gameStats, handleSquareClick }) {
	return (
		<div className='flex'>
			{rowStats.stats.map((squareStats) => (
				<Square
					key={squareStats.square_id}
					playerOneTurn={playerOneTurn}
					gameStats={gameStats}
					rowStats={rowStats}
					squareStats={squareStats}
					handleSquareClick={handleSquareClick}
				/>
			))}
		</div>
	);
}
