import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: true}

  onShowHideClock = () => {
    this.setState(prev => ({showClock: !prev.showClock}))
  }

  render() {
    const {showClock} = this.state

    const buttonText = showClock ? 'Hide Clock' : 'Show Clock'
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onShowHideClock}
        >
          {buttonText}
        </button>
        {/* {showClock ? <Clock /> : null} */}
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
