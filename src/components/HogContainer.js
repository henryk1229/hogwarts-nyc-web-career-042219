import React from 'react'
import HogCard from './HogCard'

export default class HogContainer extends React.Component{

  state = {
    currentHog: null
  }

  setCurrentHog = (hog) =>{
    if (this.state.currentHog === null || this.state.currentHog !== hog ) {
      this.setState({
        currentHog: hog
      })
    } else {
      this.setState({
        currentHog: null 
      })
    }
  }



  createHogCards = () =>{
    return this.props.hogs.map(hog =>{
        return   <HogCard name={hog.name} setCurrentHog={this.setCurrentHog} specialty={hog.specialty} currentHog={this.state.currentHog} greasedFilter={this.props.greasedFilter} greased={hog.greased}/>
      }

    )
  }

  render(){

    return(
      <div className="ui grid container">
      {this.createHogCards()}
      </div>
    )
  }
}
