import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <Row tilenumber={3}>
      </Row>
    );
  }
}

interface RowProps{
  tilenumber?: number;
}

interface RowState{
  tilenumber?: number;
}

class Row extends Component <RowProps, RowState> {

  constructor(props:RowProps){
    super(props)
  }

  render() {
    return (
    {const : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
    );
  }
}

interface TileState {
  active: Boolean
}

interface TileProps {
  active?: Boolean
}

class Tile extends Component<TileProps, TileState> {

  constructor(props: TileProps) {
    super(props)
  }

  render() {
    if (this.props.active) {
      return (
        <div className="activeTile"></div>
      )
    } else {
      return (
        <div className="inactiveTile"></div>
      )
    }
  }
}

export default App;
