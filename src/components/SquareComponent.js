import React from "react";

class Square extends React.Component {
  render() {
    const i = this.props.i;
    return (
      <div
        className="col-4"
        key={i}
        
      >
        <button className="btn btn-danger" onClick={this.props.onClick.bind(this, i)}>
          {i === "X" || i === "O" ? i : null}
        </button>
      </div>
    );
  }
}
export default Square;
