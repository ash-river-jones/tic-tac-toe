import Head from 'next/head';
import Board from '@/components/Board';
import { useEffect, useState } from 'react';

export default function Home() {
	const gameStatsStart = [
		{
			row_id: 1,
			stats: [
				{
					square_id: 1,
					played: false,
					value: 0,
				},
				{
					square_id: 2,
					played: false,
					value: 0,
				},
				{
					square_id: 3,
					played: false,
					value: 0,
				},
			],
		},
		{
			row_id: 2,
			stats: [
				{
					square_id: 4,
					played: false,
					value: 0,
				},
				{
					square_id: 5,
					played: false,
					value: 0,
				},
				{
					square_id: 6,
					played: false,
					value: 0,
				},
			],
		},
		{
			row_id: 3,
			stats: [
				{
					square_id: 7,
					played: false,
					value: 0,
				},
				{
					square_id: 8,
					played: false,
					value: 0,
				},
				{
					square_id: 9,
					played: false,
					value: 0,
				},
			],
		},
	];

	const [gameStats, setGameStats] = useState(gameStatsStart);
	const [playerOneTurn, setPlayerOneTurn] = useState(true);
	const [winner, setWinner] = useState(0);
	const [gameDone, setGameDone] = useState(false);

	const handelSquareClick = (played, row_id, square_id) => {
		if (played || winner === 1 || winner === -1) {
			return;
		}
		const foundRow = gameStats.find((row) => row.row_id === row_id);
		const foundSquare = foundRow.stats.find((square) => square.square_id === square_id);
		foundSquare.played = true;
		if (playerOneTurn) {
			foundSquare.value = 1;
		} else {
			foundSquare.value = -1;
		}
		const newGameStats = gameStats.map((row) => {
			if (row.row_id === row_id) {
				return {
					...row,
					stats: row.stats.map((square) => (square.square_id === square_id ? foundSquare : square)),
				};
			}
			return row;
		});
		setGameStats(newGameStats);
		setPlayerOneTurn(!playerOneTurn);
	};

	const checkWinner = (gameStats) => {
		const board = gameStats.map((row) => row.stats.map((square) => square.value));

		// Check rows
		for (const row of board) {
			const sum = row.reduce((a, b) => a + b);
			if (sum === 3) return 1;
			if (sum === -3) return -1;
		}

		// Check columns
		for (let col = 0; col < 3; col++) {
			const sum = board[0][col] + board[1][col] + board[2][col];
			if (sum === 3) return 1;
			if (sum === -3) return -1;
		}

		// Check diagonals
		const diag1 = board[0][0] + board[1][1] + board[2][2];
		const diag2 = board[0][2] + board[1][1] + board[2][0];
		if (diag1 === 3 || diag2 === 3) return 1;
		if (diag1 === -3 || diag2 === -3) return -1;

		// No winner
		return 0;
	};

	const handelPlayAgain = () => {
		setGameStats(gameStatsStart);
		setPlayerOneTurn(true);
		setGameDone(false);
		setWinner(0);
	};

	const handelSquareReset = (played, row_id, square_id) => {
		console.log('played: ', played);
		console.log('row_id: ', row_id);
		console.log('square_id: ', square_id);
	};

	const handelReset = () => {
		handelSquareReset();

		setGameStats(gameStatsStart);
		setPlayerOneTurn(true);
		setGameDone(false);
		setWinner(0);
	};

	useEffect(() => {
		const winner = checkWinner(gameStats);
		if (winner === 1) {
			setWinner(1);
			setGameDone(true);
		} else if (winner === -1) {
			setWinner(-1);
			setGameDone(true);
		} else {
			setWinner(0);
			setGameDone(false);
		}
	}, [gameStats]);

	return (
		<>
			<Head>
				<title>Tic Tac Toe</title>
				<meta name='description' content='A Tic Tac Toe game created by Ash Jones' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='bg-white flex flex-col justify-center items-center py-12'>
				<section className='flex flex-col items-center'>
					<h1 className='text-4xl font-bold mb-4'>Tic Tac Toe</h1>
				</section>
				<Board
					playerOneTurn={playerOneTurn}
					gameStats={gameStats}
					handelSquareClick={handelSquareClick}
					handelSquareReset={handelSquareReset}
				/>
				{winner === 1 && <h2 className='text-2xl font-bold mt-4'>Player One Wins!</h2>}
				{winner === -1 && <h2 className='text-2xl font-bold mt-4'>Player Two Wins!</h2>}
				<section className='flex gap-4 items-center mt-4'>
					<button onClick={handelReset} className='border border-black p-2 rounded-md'>
						Reset
					</button>
					{gameDone && (
						<button onClick={handelPlayAgain} className='border border-black p-2 rounded-md'>
							Play Again
						</button>
					)}
				</section>
			</main>
		</>
	);
}
