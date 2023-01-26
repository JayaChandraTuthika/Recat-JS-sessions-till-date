import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  //   renderAuthButton = () => {
  // const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button>Logout</button>
  //     }
  //     return <button>Login</button>
  //   }

  render() {
    const {isLoggedIn} = this.state

    // Using if..else statements
    // let authButton
    // if (isLoggedIn) {
    //   authButton = <button type="button">Logout</button>
    // } else {
    //   authButton = <button type="button">Login</button>
    // }
    return (
      <div className="container">
        <Welcome />
        {/* {authButton} {Using Element Variables} */}

        {/* Using ternary operator */}
        {/* {isLoggedIn ? <button>Logout</button> : <button>Login</button>} */}

        {/* //case 2:one element only */}
        {/* {isLoggedIn ? <button>Logout</button> : null} */}

        {/* Shorthand for above */}
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
