import React, { Component } from 'react'
import PropTypes from 'prop-types'

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export class InputBox extends Component {
  constructor(props){
    super(props);
    this.state={
      input:'',
      shortPassword:false,
      errorMessage:'',
      invalidEmail:false
    }
  }
  static propTypes = {
    'type': PropTypes.string,
    'min-length':PropTypes.number,
    'errMsg':PropTypes.string
  }

  render() {
    const {
      type
    } = this.props

    return (
      <React.Fragment>
        <input type={type} onChange={this.handleInput} onBlur={this.handleBlur} ></input>
        {this.state.shortPassword ? <p>{this.props.errMsg || 'Invalid Input'}</p>:null}
        {this.state.invalidEmail ? <p>{this.props.errMsg || 'Invalid Input'}</p>:null}
      </React.Fragment>

      // <React.Fragment>
      // <input type={type} onChange={this.handleInput} onBlur={this.handleBlur} onFocus={this.handleFocus}
      // onSelect={this.handleSelect} onInput={this.handleOnInput}></input>
      // </React.Fragment>

    )
  }

  handleInput=(e)=>{
    if(this.props.hasOwnProperty('getInput')){
      this.setState({
        input:e.target.value
      } ,()=>{
          this.props.getInput(this.state.input);
      })
    }

  }

  handleBlur=()=>{
    if(this.props.hasOwnProperty('getBlur')){
      if(this.props.hasOwnProperty('min-length') && this.state.input.length<this.props['min-length']){
        this.setState({
          shortPassword:true
        })
      }

      if(this.props.type==='email'){
        if(!this.state.input.match(mailformat)){
            this.setState({
              invalidEmail:true
            })
      }
    }
    }


  }

  handleFocus=(e)=>{
    if(this.props.hasOwnProperty('getFocus')){
      console.log('focus udhar bhi');
      this.props.getFocus(e)
    }
  }

  handleOnInput=(e)=>{
    if(this.props.hasOwnProperty('getOnInput')){
      console.log('on input');
      this.props.getFocus(e)
    }
  }
}

export class CustomButton extends Component {

  render(){
    return(
      <React.Fragment>
      <button onClick={this.handleClick}>Custom button</button>
      </React.Fragment>
    )
  }

  handleClick=()=>{
    console.log('clicked');
    this.props.clickAction();

  }
}
