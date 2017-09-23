import React, { PropTypes, Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {}
  render () {
    return (
      <div class="App">
        <h1>Editor</h1>
        <p>Text Input</p>
        <p>Confirm Buttons</p>
        <p>Fields Input</p>
      </div>
    )
  }
}


