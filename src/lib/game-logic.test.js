import { 
	fieldIsEmpty,
	findWinner,
	hasEmptyFields,
	getEmptyBoard,
} from './game-logic';

describe('Util Functions', () => {

	test('fieldIsEmpty', () => {
		const board = [[0, 0], [0, 1]];

		expect(fieldIsEmpty(board, 0, 0)).toEqual(true);
		expect(fieldIsEmpty(board, 0, 1)).toEqual(true);
		expect(fieldIsEmpty(board, 1, 0)).toEqual(true);
		expect(fieldIsEmpty(board, 1, 1)).toEqual(false);
	});

	test('findWinner - different winners', () => {
		let board = Array(5).fill(0);
		for(let i = 0; i < 5; i++) {
			board[i] = Array(5).fill(0);
	  	}

		let winnerIs1st = board;
		
		winnerIs1st[0][0] = 1;
		winnerIs1st[1][0] = 2;
		winnerIs1st[1][1] = 1;
		winnerIs1st[2][0] = 2;
		winnerIs1st[2][2] = 1;

		expect(findWinner(winnerIs1st)).toEqual(1);

		let winnerIs2 = board;

		winnerIs2[0][0] = 2;
		winnerIs2[1][0] = 1;
		winnerIs2[1][1] = 2;
		winnerIs2[2][0] = 1;
		winnerIs2[2][2] = 2;
		expect(findWinner(winnerIs2)).toEqual(2);

		let noWinner = board;

		winnerIs2[0][0] = 2;
		winnerIs2[1][0] = 1;
		winnerIs2[1][1] = 2;
		winnerIs2[2][0] = 1;
		winnerIs2[2][2] = 1;
		expect(findWinner(noWinner)).toBeFalsy();
	});

	test('findWinner - all directions', () => {
		let board = Array(5).fill(0);
		for(let i = 0; i < 5; i++) {
			board[i] = Array(5).fill(0);
		}
		
		let row = board;

		row[0][0] = 1;
		row[0][1] = 1;
		row[0][2] = 1;
		expect(findWinner(row)).toEqual(1);

		let column = board;
		
		column[0][0] = 1;
		column[1][0] = 1;
		column[2][0] = 1;
		expect(findWinner(column)).toEqual(1);

		let diagonal = board;
		
		diagonal[0][4] = 2;
		diagonal[1][3] = 2;
		diagonal[2][2] = 2;
		expect(findWinner(diagonal)).toEqual(1);
	});

	test('hasEmptyFields', () => {
		expect(hasEmptyFields([[0, 0], [0, 0]])).toEqual(true);
		expect(hasEmptyFields([[1, 1], [1, 0]])).toEqual(true);
		expect(hasEmptyFields([[0, 1], [1, 1]])).toEqual(true);

		expect(hasEmptyFields([[1, 1], [1, 1]])).toEqual(false);
		expect(hasEmptyFields([[1, 2], [1, 2]])).toEqual(false);
	});

	test('getEmptyBoard', () => {
		const board = Array(5).fill(0);
		for(let i = 0; i < 5; i++) {
			board[i] = Array(5).fill(0);
		}

		expect(getEmptyBoard(5)).toEqual(board);
	});
});