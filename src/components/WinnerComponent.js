import React from "react";

class Winner extends React.Component {
  render() {
    const winner = this.props.winner;
    const iswinner= winner === "X" || winner === "O";
    const isdraw = this.props.isDraw;
    return (
      <>
        <h1 className="x">
          {iswinner ? winner + " is the Winner" : null}
          {isdraw?'Match Tied!!':null}
          {iswinner||isdraw?null:<h2 className="track">{this.props.isXNext?'Player-X-Turn':'Player-O-Turn'}</h2>}
        </h1>
      </>
    );
  }
}
export default Winner;
