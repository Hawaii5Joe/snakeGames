import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <>
      <Row tilenumbers={[1,2]}>
      </Row>
      <Row tilenumbers={[1]}></Row>
        <Row tilenumbers={[1]}></Row>
        <Row tilenumbers={[1]}></Row>

      </>
    );
  }
}

interface RowProps{
  tilenumbers?: Array<number>;
}

interface RowState{
  tilenumber?: number;
}



class Row extends Component <RowProps, RowState> {

  constructor(props:RowProps){
    super(props)
  }

  render() {
    const num = this.props.tilenumbers;
    var nums = [0,1,2,3,4,5,6,7,8,9]
    var numsList = nums.map(function(value) {
      if (!num) {
        return <Tile key={value}></Tile>
      }
      if (num.includes(value)) {
        return <Tile key={value} active={true}></Tile>
      } else {
        return <Tile key={value}></Tile>
      }
    });
    return <div className="row">
      {numsList}
    </div>
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
