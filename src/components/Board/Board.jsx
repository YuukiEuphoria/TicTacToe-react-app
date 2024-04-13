import React from "react";
import styles from "./Board.module.css";
import Square from "../Square/Square";

const Board = ({ squares, click }) => {
  return (
    <div className={styles.board}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => click(i)} />
      ))}
    </div>
  );
};

export default Board;
