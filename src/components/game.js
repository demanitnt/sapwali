import React, { useState } from "react";
import Geeti from "./geeti";
import Board from "./board";
import Dice from "./dice";

var top=88.66;
var left=645;
const Game = () => {
  const [geeti, setgeeti] = useState(645);

 

  const pawnmv = async (diceNo) => {
    // var test =(geet);
    await setgeeti(diceNo);
    let endleft=diceNo*72;
     console.log("This is start of loop")
      for (left=573; left>573-endleft; left-=72) {
        console.log("The left value in game is: ",left,"and endleft",endleft)
            var i=1; 
        
      
          if(left<283) 
          {
            console.log("value of left in left>283: ", left)

          top=top-7;
          left=573;
      endleft=endleft-i*72;
          }

          i=i+1;
        }

     
    
    
    }


  return (
    <div>
      <Board />
      <Geeti  top={top} left={left}/>
      <Dice pawnmv={pawnmv} />
    </div>
  );
};

export default Game;
