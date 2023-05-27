import React, { Component } from 'react'
import Nav from './component/Nav'
import News from './component/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";//install before use 
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKeys=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  pageSize = 9;
  render() {
    return (
      <>
      <BrowserRouter>
      <Nav/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress ={this.setProgress} apiKeys={this.apiKeys} key="general" pagesize={this.pageSize} country="in" category="general"/>}/>      
        <Route exact path="/general" element={<News setProgress ={this.setProgress} apiKeys={this.apiKeys} key="unique"  pagesize={this.pageSize} country="in" category="general"/>}/>      
        <Route exact path="/business" element={<News setProgress ={this.setProgress} apiKeys={this.apiKeys} key="business"  pagesize={this.pageSize} country="in" category="business"/>}/>      
        <Route exact path="/entertainment" element={<News setProgress ={this.setProgress} apiKeys={this.apiKeys} key="entertainment" pagesize={this.pageSize} country="in" category="entertainment"/>}/>      
        <Route exact path="/health" element={<News setProgress ={this.setProgress} apiKeys={this.apiKeys} key="health" pagesize={this.pageSize} country="in" category="health"/>}/>      
        <Route exact path="/science" element={<News setProgress ={this.setProgress} apiKeys={this.apiKeys} key="science" pagesize={this.pageSize} country="in" category="science"/>}/>      
        <Route exact path="/sports" element={<News setProgress ={this.setProgress} apiKeys={this.apiKeys} key="sports" pagesize={this.pageSize} country="in" category="sports"/>}/>      
        <Route exact path="/technology" element={<News setProgress ={this.setProgress} apiKeys={this.apiKeys} key="technology" pagesize={this.pageSize} country="in" category="technology"/>}/>      
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}
