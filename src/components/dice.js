import React, { useState,useCallback } from "react";

const Dice = ({ pawnmv }) => {
  const [rolno, setRolno] = useState(1);

  const rollDice = () => {
    var RandomV = Math.floor(Math.random() * 6) + 1;
      setRolno(RandomV, pawnmv(RandomV));
  }

  return (
    <>
      <button onClick={rollDice}><p className="h1"> Dice Roll</p> {<p>{rolno}</p>}</button>
    </>
  );
};

export default Dice;

