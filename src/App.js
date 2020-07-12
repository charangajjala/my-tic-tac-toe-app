import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Board from "./components/BoardComponent";

export default function App() {
  return (
    <div className="">
      <h1 className="header">TIC-TAC-TOE (A FUN GAME!)</h1>
      <Board className="board"/>
    </div>
  );
}
