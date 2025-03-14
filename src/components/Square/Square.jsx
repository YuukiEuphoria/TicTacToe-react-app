import React from "react";
import styles from "./Square.module.css";

const Square = (props) => {
  return (
    <button className={styles.square} onClick={props.onClick}> 
      {props.value}
    </button>)
};

export default Square;
