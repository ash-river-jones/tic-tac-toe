import Row from './Row';

export default function Board({ playerOneTurn, gameStats, handelSquareClick }) {
	return (
		<section className='flex flex-col'>
			{gameStats.map((rowStats) => (
				<Row
					key={rowStats.row_id}
					playerOneTurn={playerOneTurn}
					rowStats={rowStats}
					handelSquareClick={handelSquareClick}
				/>
			))}
		</section>
	);
}
