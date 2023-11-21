import React, { useRef, useState } from "react";
import "./main.css";
import circle_icon from "./images/circle.png";
import cross_icon from "./images/cross.png";

let input = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
  //creating functional states
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null); // Using ref assigned to title to change the text later for winner
  //Creating Ref for each box
  let box1, box2, box3, box4, box5, box6, box7, box8, box9 = useRef(null);
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  //declaring the function for each box
  const toggle = (e, num) => {
    // event , index number from each box
    if (lock) {
      return true;
    }

    if (count % 2 === 0) {
      // to decide first player's action as count starts with 0
      e.target.innerHTML = `<img src ='${cross_icon}'>`; //back ticks are used as standard ES7 procedures instead of multiple {}
      input[num] = "x"; // reference character to used later for checking winner
      setCount(++count); // because react is asynchronous by default
    } else {
      //to decide second player's action
      e.target.innerHTML = `<img src ='${circle_icon}'>`;
      input[num] = "o";
      setCount(++count);
    }
    checkWin(); //checking winner after every click/toggle
  };

  //Checking winner function
  const checkWin = () => {

    if (input[0] === input[1] && input[1] === input[2] && input[2] !== "") {
      won(input[2]);
    }
    if (input[3] === input[4] && input[4] === input[5] && input[5] !== "") {
      won(input[5]);
    }
    if (input[6] === input[7] && input[7] === input[8] && input[8] !== "") {
      won(input[8]);
    }
    if (input[0] === input[3] && input[3] === input[6] && input[6] !== "") {
      won(input[6]);
    }
    if (input[1] === input[4] && input[4] === input[7] && input[7] !== "") {
      won(input[7]);
    }
    if (input[2] === input[5] && input[5] === input[8] && input[8] !== "") {
      won(input[8]);
    }
    if (input[0] === input[4] && input[4] === input[8] && input[8] !== "") {
      won(input[8]);
    }
    if (input[0] === input[1] && input[1] === input[2] && input[2] !== "") {
      won(input[2]);
    }
    if (input[2] === input[4] && input[4] === input[6] && input[6] !== "") {
      won(input[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations : <img src='${cross_icon}'> won`;
    }
    if (winner === "o") {
      titleRef.current.innerHTML = `Congratulations : <img src='${circle_icon}'> won`;
    }
  };

  //Reset button
  const reset = () => {
    setLock(false);
    input = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe Game in <span>React</span>`;
    box_array.map((block) => {
      return (block.current.innerHTML = "");
    });
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}> Tic Tac Toe Game in <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => { toggle(e, 0)}}></div>
          <div className="boxes" ref={box2} onClick={(e) => { toggle(e, 1)}}></div>
          <div className="boxes" ref={box3} onClick={(e) => { toggle(e, 2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => { toggle(e, 3)}}></div>
          <div className="boxes" ref={box5} onClick={(e) => { toggle(e, 4)}}></div>
          <div className="boxes" ref={box6} onClick={(e) => { toggle(e, 5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e) => { toggle(e, 6)}}></div>
          <div className="boxes" ref={box8} onClick={(e) => { toggle(e, 7)}}></div>
          <div className="boxes" ref={box9} onClick={(e) => { toggle(e, 8)}}></div>
        </div>
      </div>
        <button className="reset" onClick={reset}> Reset </button>
    </div>
  );
}

export default TicTacToe;
