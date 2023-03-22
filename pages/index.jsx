import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Board from '@/components/Board';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const gameStats = [
		[1, -1, 1],
		[-1, 1, 1],
		[-1, 1, -1],
	];

	const handelSquareClick = (played, isX) => {
		console.log('Played: ', played);
		console.log('isX: ', isX);
	};

	const updateSquare = () => {};

	return (
		<>
			<Head>
				<title>Tic Tac Toe</title>
				<meta name='description' content='A Tic Tac Toe game created by Ash Jones' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='bg-white flex justify-center py-12'>
				<Board gameStats={gameStats} handelSquareClick={handelSquareClick} />
			</main>
		</>
	);
}
