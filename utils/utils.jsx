const gameStats = [
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

// based on the above "gameStats" for tic tac toe, write a function that will find out when a player has won.
// Xs have a value of "1", Os have a value of "-1" and unplayed squares are "0".
