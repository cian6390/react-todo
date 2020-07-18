import "./Game.scss";
import React from "react";
import useGame from "./hook";
import Square from "./Square/Square";

export default function () {
  const initialPlayer = 0;

  const {
    player,
    winner,
    squares,
    histories,
    backToStep,
    onClickHandler,
  } = useGame(initialPlayer);

  return (
    <div className="game">
      <div className="game__message">
        {winner && <div>{winner.name} is Winner 🏆</div>}
        <mark>{player.name}</mark>'s turn
      </div>
      <div className="game__board">
        {squares.map((symbol, index) => (
          <Square
            key={index}
            symbol={symbol}
            onClick={() => onClickHandler(index)}
          />
        ))}
      </div>
      <div className="game__history">
        {histories.map((history, i) => (
          <div className="game-history" key={i}>
            <button onClick={() => backToStep(i)}>Back To Step {i + 1}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
