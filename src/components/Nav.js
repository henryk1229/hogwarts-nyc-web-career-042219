import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<button onClick={props.sortHogsByName}>Sort By Name</button>
			<button onClick={props.sortHogsByWeight}>Sort By Weight</button>
			<button onClick={props.setGreasedState}>{(props.greasedFilter ? "Show Greased and Ungreased Pigs" : "Show Greased Pigs!")}</button>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav
