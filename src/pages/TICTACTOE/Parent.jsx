// imports
import React from "react";
import { useState } from "react";
import styles from "./Parent.module.css";


export default function Tictoctoe() {
    // states
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const handelClick = (index) => {
        if (board[index] || checkWinner(board)) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? "x" : "o";
        setBoard(newBoard);
        setIsXTurn(!isXTurn);
    };

    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = checkWinner(board);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
    };

    return (
        <div className={styles.parentBody}>
            <h3 className={styles.titlle}>Tic Tac Toe</h3>
            <h4 className={styles.isWinner}>winner is : {winner}</h4>
            <div className={styles.board}>
                {board.map((cell, index) => (
                    <div className={styles.square} key={index} onClick={() => handelClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
            <h4 className={styles.isTurn}>
                {`turn: ${isXTurn ? "x" : "o"}`}
            </h4>
            <button onClick={resetGame}>reset</button>
        </div>
    )
}