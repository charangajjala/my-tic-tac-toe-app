import React from "react";
import Square from "./SquareComponent";
import Winner from "./WinnerComponent";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      isXNext: true,
      winner: "",
      pattern: [],
      isDraw : false
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.Reset=this.Reset.bind(this);
  }
  handleClick(i, e) {
    e.preventDefault();
    const num = [...this.state.num];
    if (num[i] !== "X" && num[i] !== "O" && num[i] !== undefined) {
      num[i] = this.state.isXNext ? "X" : "O";
      this.setState({ num: num, isXNext: !this.state.isXNext });
    }
  }
  componentDidUpdate() {
    if (this.state.winner === ""&&this.state.isDraw===false) {
      this.checkWinner();
      this.checkDraw();
    }
    
  }
  checkWinner() {
    const num = [...this.state.num];
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    patterns.map(pattern => {
      const [a, b, c] = pattern;
      if (num[a] === "X" && num[b] === "X" && num[c] === "X") {
        this.setState({ winner: "X", pattern: pattern });
      } else if (num[a] === "O" && num[b] === "O" && num[c] === "O") {
        this.setState({ winner: "O", pattern: pattern });
      }
    });
  }
  checkDraw(){
    const num = [...this.state.num]
      var flag=1
    for(var i=0;i<9;i++){
     if(num[i]!=='X'&& num[i]!=='O'){
            flag=0
            break;
     }
    }
    if(flag===1 && this.state.winner===''){
     this.setState({isDraw:true})
   }
}
 Reset(){
   this.setState({num:[0,1,2,3,4,5,6,7,8],winner:"",isDraw:false,isXNext:true})
 }

  render() {
    const squares = this.state.num.map(i => {
      return (
        <Square
          i={i}
          onClick={this.handleClick}
          checkWinner={this.checkWinner}
        />
      );
    });
    const winner=this.state.winner;
    const isDraw=this.state.isDraw;
    return (
      <>
        <div className="winner">
          <Winner winner={this.state.winner} isDraw={this.state.isDraw} isXNext={this.state.isXNext}/>
        </div>
        <div className="row">
        {squares}
        </div>
       <button className="btn btn-primary" onClick={this.Reset}>{winner===""&&isDraw===false?'Reset':'PlayAgain'}</button>
      </>
    );
  }
}
export default Board;
