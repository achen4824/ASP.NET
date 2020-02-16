import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props){
    //always need super with javascript classes especially with react components
    super(props);
    this.state = {
      value : null,
      number : this.props.number,
    };
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value : this.props.onClick(this.state.number)})}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      move: 0,
      square: Array(9).fill(null),
    };
  }

  handleClick(i){
    if(this.state.move % 2 === 0){
      this.state.square[i] = 'X';
    }else{
      this.state.square[i] = 'O';
    }



    console.log(this.state.square);
    var winner = true;

    //check row
    for(var j=0;j<3;j++){
      if(this.state.square[(Math.floor(i / 3) * 3) + j] !== this.state.square[i]){
        winner = false;
        break;
      }
    }

    //check column
    for(j=0;j<3;j++){
      if(this.state.square[(i % 3) + (j * 3)] !== this.state.square[i] || winner === false){
        winner = false;
        break;
      }
    }

    //check if in postion where we have to check diagonals
    if(!((i - 1 % 3 === 0 || i === 3 || i === 5) && i !== 4) && winner === true){
      if(i === 0 || i === 8 || i === 4){
        for(var f = 0;f<=8;f += 4){
          if(this.state.square[f] !== this.state.square[i]){
            winner = false;
            break;
          }
        }
      }
      if(i == 2 || i == 6 || i == 4){
        for(f = 2;f<=6;f += 2){
          if(this.state.square[f] !== this.state.square[i]){
            winner = false;
            break;
          }
        }
      }
    }

    if(winner){
      console.log(this.state.square[i] + " Wins");
    }
    this.state.move++;
    return this.state.square[i];
  }

  renderSquare(i) {
    return <Square
              number = {i}
              value={this.state.square[i] /* Modify square component state directly */} 
              onClick={() => this.handleClick(i)}
            />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
