import Square from './Square';

export default function Row({ rowStats, handelSquareClick }) {
	console.log(rowStats);
	return (
		<div className='flex'>
			{rowStats.map((squareStats) => (
				<Square squareStats={squareStats} handelSquareClick={handelSquareClick} />
			))}
		</div>
	);
}
