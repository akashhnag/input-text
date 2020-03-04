import React, { Component } from 'react'

import InputBox from 'custom-input'

export default class App extends Component {
  render () {
    let style={
      marginTop:'15px',
      marginLeft:'20px'
    }
    return (
      <div>
        <React.Fragment>
        <div style={style}>Password Textbox:<InputBox type='password' getInput={this.getInput} min-length={5}/></div>
        </React.Fragment>
        <React.Fragment>
          <div style={style}>
          Simple Textbox:<InputBox type='text' getInput={this.getInput}/>
          </div>
        </React.Fragment>
        <React.Fragment>
          <div style={style}>
          Email Textbox:<InputBox type='email' getInput={this.getInput} errMsg='incorrect email format'/>
          </div>
        </React.Fragment>
      </div>
    )
  }

  getInput(data){
    console.log('data',data);

  }

}

// InputBox.errorMessage({
//   msg:'invalid password'
// });
