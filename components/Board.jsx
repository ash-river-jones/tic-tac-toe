import Row from './Row';

export default function Board({ playerOneTurn, gameStats, handleSquareClick }) {
	return (
		<section className='flex flex-col'>
			{gameStats.map((rowStats) => (
				<Row
					key={rowStats.row_id}
					gameStats={gameStats}
					playerOneTurn={playerOneTurn}
					rowStats={rowStats}
					handleSquareClick={handleSquareClick}
				/>
			))}
		</section>
	);
}
