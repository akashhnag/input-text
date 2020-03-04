import React, { Component } from 'react'
import PropTypes from 'prop-types'

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default class InputBox extends Component {
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

    )
  }

  handleInput=(e)=>{
    this.setState({
      input:e.target.value
    } ,()=>{
      this.props.getInput(this.state.input);

    })
  }

  handleBlur=()=>{
    //console.log(this.state.input.length);
    console.log('props',this.props);

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


      //  this.setState({
      //    invalidEmail:false
      //  })
      // }else

    }
  }
}

  handleFocus=()=>{
    console.log('focus',this.props);

  }

  // static errorMessage=(ob)=>{
  //   console.log('error message',ob);
  //   console.log(ob['msg']);
  //   this.setState({
  //     errorMessage:ob['msg']
  //   })

  // }
}
