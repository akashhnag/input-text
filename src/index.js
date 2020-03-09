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
    'errMsg':PropTypes.string,
    'placeholder':PropTypes.string
  }

  render() {
    const {
      type,
      placeholder,
      required
    } = this.props;


    return (
      <React.Fragment>
        <input type={type} onChange={this.handleInput} onBlur={this.handleBlur} placeholder={placeholder}
        required={required}></input>
        {this.state.shortPassword ? <React.Fragment>{this.props.errMsg || 'Invalid Input'}</React.Fragment>:null}
        {this.state.invalidEmail ? <React.Fragment>{this.props.errMsg || 'Invalid Input'}</React.Fragment>:null}
      </React.Fragment>
    )
  }

  handleInput=(e)=>{
      this.setState({
        input:e.target.value
      } ,()=>{
          if(this.props.hasOwnProperty('getInput')){
          this.props.getInput(this.state.input);
        }
      })
  }

  handleBlur=()=>{
      if(this.props.hasOwnProperty('min-length')){
        if(this.state.input.length<this.props['min-length']){
          this.setState({
            shortPassword:true
          })
        }else{
          this.setState({
            shortPassword:false
          })
        }
      }

      if(this.props.type==='email'){
        if(!this.state.input.match(mailformat)){
            this.setState({
              invalidEmail:true
            })
      }else{
        this.setState({
          invalidEmail:false
        })
      }
    }

  }

  handleFocus=(e)=>{
    if(this.props.hasOwnProperty('getFocus')){
      this.props.getFocus(e)
    }
  }

  handleOnInput=(e)=>{
    if(this.props.hasOwnProperty('getOnInput')){
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
    this.props.clickAction();

  }
}
