
/** index.js */
import './app.css'
import './sass/main.scss'

// import $ from 'jquery'
import 'jquery'
console.log('test')
console.log($)

import React, {Component} from 'react'
import { render } from 'react-dom'

class App extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	text: 'Hello world'
	  };
	}

	render() {
		return (
			<div>{this.state.text}</div>
		);
	}
}

render(
  <App/>,
  document.getElementById('root')
);