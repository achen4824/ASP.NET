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
  //props gets values passed by called element
  render() {
    return (
      <button
        className="square"
        onClick={() => {this.props.onClick(this.state.number)}}
      >
        {this.props.value}
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
      winner: null
    };
  }

  declareWinner(winner){
    this.setState({winner: winner});
  }

  handleClick(i){

    //better create temps and set state later
    var tempSquare = this.state.square;
    var tempMove = this.state.move;

    if(tempSquare[i] == null){
      if(tempMove % 2 === 0){
        tempSquare[i] = 'X';
      }else{
        tempSquare[i] = 'O';
      }
    }else{
      return tempSquare[i];
    }
    var winner = false;

    console.log(tempSquare);

    //check row
    for(var j=0;j<3;j++){
      winner = true;
      if(tempSquare[(Math.floor(i / 3) * 3) + j] !== tempSquare[i]){
        winner = false;
        break;
      }
    }
    if(winner){this.declareWinner(tempSquare[i]);}
    //check column
    for(j=0;j<3;j++){
      winner = true;
      if(tempSquare[(i % 3) + (j * 3)] !== tempSquare[i] || winner === false){
        winner = false;
        break;
      }
    }
    if(winner){this.declareWinner(tempSquare[i]);}
    //check if in postion where we have to check diagonals
    if(!((i - 1 % 3 === 0 || i === 3 || i === 5) && i !== 4) && winner === false){
      if(i === 0 || i === 8 || i === 4){
        winner = true;
        for(var f = 0;f<=8;f += 4){
          if(tempSquare[f] !== tempSquare[i]){
            winner = false;
            break;
          }
        }
        if(winner){this.declareWinner(tempSquare[i]);}
      }
      if(i == 2 || i == 6 || i == 4){
        winner = true;
        for(f = 2;f<=6;f += 2){
          if(tempSquare[f] !== tempSquare[i]){
            winner = false;
            break;
          }
        }
        if(winner){this.declareWinner(tempSquare[i]);}
      }
    }
    tempMove++;

    //updates html by calling render meaning all funcs will be recalled
    this.setState({
      move : tempMove,
      square : tempSquare
    });
  }

  //is updated in the render call
  renderSquare(i) {
    return <Square
              number = {i}
              value={this.state.square[i] /* Modify square component state directly */} 
              onClick={() => this.handleClick(i)}
            />;
  }

  render() {
    let status;
    status = 'Next player: ' + (this.state.move % 2 == 0 ? 'X' : 'O');
    if(this.state.winner != null){
      status = 'Winner is ' + this.state.winner;
    }

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
