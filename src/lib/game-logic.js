import { tripleEqual } from './util';

export function fieldIsEmpty(board, xCoordinate, yCoordinate) {
	return !board[xCoordinate][yCoordinate];
}

export function findWinner(board) {
	
	const boardSize = board.length;

	for (let i = 0; i < boardSize; i++) {
		//rows 
		for(let j = 0; j < boardSize; j++) {
			if (board[i][j] && tripleEqual(board[i][j - 1], board[i][j], board[i][j + 1])) { return board[i][j] };
		}

		//columns 
		for(let j = 1; j < boardSize - 1; j++) {
			if (board[j][i] && tripleEqual(board[j - 1][i], board[j][i], board[j + 1][i])) { return board[j][i] };
		}
	}
	// diagonals 
	for (let i = 0; i < 3; i++) {
		if (board[i][i] && tripleEqual(board[i][i], board[i + 1][i + 1], board[i + 2][i + 2])) { return board[i][i]; }
		for (let j = boardSize; 3 <= j; j--) {
			if (board[i][j - 1] && tripleEqual(board[i][j - 1], board[i + 1][j - 2], board[i + 2][j - 3])) { return board[i][j - 1]; }
			if (board[j - 1][i] && tripleEqual(board[j - 1][i], board[j - 2][i + 1], board[j - 3][i + 2])) { return board[j - 1][i]; }
		}
	}

	return false;
}

export function hasEmptyFields(board) {
	for (let row of board) {
		for (let item of row) {
			if (!item) { return true; }
		}
	}
	return false;
}	

export function getEmptyBoard(boardSize) {
	const board = Array(boardSize).fill(0);
	for(let i = 0; i < boardSize; i++) {
		board[i] = Array(boardSize).fill(0);
	}
	return board;
}
