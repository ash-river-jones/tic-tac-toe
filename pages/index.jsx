import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Board from '@/components/Board';
import { useState } from 'react';

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
	const handelSquareClick = (played, isX, isO, row_id, square_id) => {
		if (played) {
			return;
		}
		const foundRow = gameStats.find((row) => row.row_id === row_id);
		const foundSquare = foundRow.stats.find((square) => square.square_id === square_id);
		console.log(foundSquare);
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
