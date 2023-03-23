import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Board from '@/components/Board';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

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

	const handelSquareClick = (played, isX, isO, row_id, square_id) => {
		if (played) {
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

	useEffect(() => {
		const winner = checkWinner(gameStats);
		if (winner === 1) {
			setWinner(1);
		} else if (winner === -1) {
			setWinner(-1);
		} else {
			setWinner(0);
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
			<main className='bg-white flex justify-center py-12'>
				<Board playerOneTurn={playerOneTurn} gameStats={gameStats} handelSquareClick={handelSquareClick} />
			</main>
		</>
	);
}
