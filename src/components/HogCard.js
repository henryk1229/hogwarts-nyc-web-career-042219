import React from 'react'
// import * from '../hog-imgs'

export default class HogCard extends React.Component{

  state = {
    display: true
  }
  imgName = (hogName) =>{
    let lowercasename = hogName.toLowerCase();
    let imgName = lowercasename.split(' ').join('_')
    return imgName
  }



  displayCard = () => {
    return(
    <div className= "ui card" onClick={() => this.props.setCurrentHog(this.props.name)}>
      <div className="image">
        <img src={process.env.PUBLIC_URL + "/hog-imgs/"+this.imgName(this.props.name)+".jpg"} alt=''/>
      </div>
      <div className="content">
        <a className = "header">{this.props.name}</a>
        <p>{(this.props.currentHog === this.props.name) ?   this.props.specialty : null }</p>
        <button onClick={() => (this.setState({ display: !this.state.display}))}>Hide Piggy!</button>
      </div>
    </div>)
  }



  render(){
      if (this.state.display) {
      return(
        <div>
        {(!this.props.greasedFilter || this.props.greasedFilter === this.props.greased) ? this.displayCard() : '' }
        </div>
      )
    } else {
      return <div></div>
    }
  }

}
