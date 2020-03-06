import React, { Component } from 'react'

import {InputBox,CustomButton} from 'custom-input';

export default class App extends Component {
  render () {
    let style={
      marginTop:'15px',
      marginLeft:'20px'
    }
    return (
      <div>
        <form>
        <React.Fragment>
        <div style={style}>Password Textbox:<InputBox type='password' min-length={5}
        placeholder='Password'/></div>
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
          <input type='submit' value='Submit'></input>
        </React.Fragment>
        <React.Fragment>
          {/* <CustomButton clickAction={this.clickAction}></CustomButton> */}
          {/* <input type='submit'>Submit</input> */}
        </React.Fragment>
        </form>

        {/* <React.Fragment>
          <div style={style}>
          Testing events:<InputBox type='text' getFocus={this.focusHere}/>
          </div>
        </React.Fragment> */}
      </div>
    )
  }

  clickAction=()=>{

  }

  getInput(data){

  }

  focusHere(){

  }

}

// InputBox.errorMessage({
//   msg:'invalid password'
// });
