import React, { Component } from 'react'
import Loading from "./Loading.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <span style={{color:"white"}}>Fetching</span>
        <img src={Loading} alt="loading" />
        <span style={{color:"white"}}>Data</span>
      </div>
    )
  }
}
