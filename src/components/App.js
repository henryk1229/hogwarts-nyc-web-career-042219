import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'



class App extends Component {
  
  state ={
    hogsArr: hogs,
    greased: false
  }

  sortHogsByName = () => {
    let sortedHogs = hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({hogsArr: sortedHogs})
  }

  sortHogsByWeight = () => {
    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    let sortedHogs = hogs.sort((a, b) => (a[weight] > b[weight]) ? 1 : -1)

    this.setState({hogsArr: sortedHogs})
  }

  setGreasedState = () =>{
    this.setState({
      greased: !this.state.greased
    })
  }

  render() {

    return (
      <div className="App">
          < Nav sortHogsByWeight={this.sortHogsByWeight} sortHogsByName={this.sortHogsByName} setGreasedState={this.setGreasedState} greasedFilter={this.state.greased} />
          <HogContainer hogs={this.state.hogsArr} greasedFilter={this.state.greased} />

      </div>
    )
  }
}

export default App;
