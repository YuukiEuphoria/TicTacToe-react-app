import React, { useState } from "react";
import styles from "./Game.module.css";
import Board from "../Board/Board";
import { calculateWinner } from "../../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    //Определить был ли клик по ячейке, или игра закончена
    if (winner || boardCopy[index]) return null;
    //Определить чей ход Х ? О
    boardCopy[index] = xIsNext ? "X" : "O";
    //Обновить наш стейт
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className={styles.restart}
        onClick={() => {
          setXIsNext(true);
          setBoard(Array(9).fill(null));
        }}
      >
        Очистить поле
      </button>
    );
  };

  function isBoardFull(board) {
    return board.every((square) => square !== null);
  }

  return (
    <div className={styles.wrapper}>
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className={styles.gameInfo}>
        {winner
          ? `Победитель ${winner}`
          : isBoardFull(board)
          ? "Ничья"
          : `Сейчас ходит ${xIsNext ? "X" : "O"}`}
      </p>
    </div>
  );
};

export default Game;
