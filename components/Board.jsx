import Row from './Row';

export default function Board({ gameStats, handelSquareClick }) {
	return (
		<section className='flex flex-col'>
			{gameStats.map((rowStats) => (
				<Row rowStats={rowStats} handelSquareClick={handelSquareClick} />
			))}
		</section>
	);
}
