import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import "./News.css"
import PropTypes from 'prop-types';
import Spinner from './Spinner';

export default class News extends Component {
  str = this.props.category
  foruse = this.str.charAt(0).toUpperCase() + this.str.slice(1) + " -Freedompress";
  static defaultProps = {
    country: "in",
    pagesize: 6,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
    let str = this.props.category
    document.title = str.charAt(0).toUpperCase() + str.slice(1) + " -Freedompress";

  }
  async updatepage() {
    this.props.setProgress(30)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKeys}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  
    this.setState({ loading: true })

    let fetchdata = await fetch(url);
    // this.props.setProgress(30)
    let letdata = await fetchdata.json();
    this.props.setProgress(80)
    this.setState({
      articles: letdata.articles,
      totalArticles: letdata.totalResults,
      loading: false,
    })
    this.props.setProgress(100)

  }




  async componentDidMount() {
    /*  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKeys}&page=1&pageSize=${this.props.pagesize}`;
     this.setState({ loading: true })
     let fetchdata = await fetch(url);
     let letdata = await fetchdata.json();
     this.setState({
       articles: letdata.articles,
       totalArticles: letdata.totalResults,
       loading: false
     }) */
    this.updatepage();

  }

  Nexter = async () => {

    /*  if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
 
 
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKeys}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
       this.setState({ loading: true })
       let fetchdata = await fetch(url);
       let letdata = await fetchdata.json();
       console.log(letdata)
       this.setState({
         page: this.state.page + 1,
         articles: letdata.articles,
         loading: false
       })
     } */
    this.setState({ page: this.state.page + 1 });
    this.updatepage();

  }

  Previouser = async () => {
    /* let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKeys}&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true })
    let fetchdata = await fetch(url);
    let letdata = await fetchdata.json();
    console.log(letdata)

    this.setState({
      page: this.state.page - 1,
      articles: letdata.articles,
      loading: false
    }) */
    this.setState({ page: this.state.page + 1 });
    this.updatepage()
  }

  fetchMoreData = async() =>{

    this.setState({ page : this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKeys}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    /* this.setState({ loading: true }) */
    let fetchdata = await fetch(url);
    let letdata = await fetchdata.json();
    this.setState({
      articles: this.state.articles.concat(letdata.articles),
      totalArticles: letdata.totalResults,
      loading: false
    })
  };

  render() {

    return (
      <>
        {/*  <div className="container d-flex justify-content-between my-4">
          <button type="button" className="btn btn-outline-dark text-primary" onClick={this.Previouser} disabled={this.state.page <= 1}> &larr;Previous</button>
          <button type="button" className="btn btn-outline-dark text-primary" onClick={this.Nexter} >Next &rarr;</button>
        </div> */}
        <div style={{ minHeight: "100vh", scrollBehavior: "smooth", width: "auto" }}>


          <h1 className='text-center my-3 '>
            <span  style={{ color: "#f5d042",background:"#0A174E", borderTopLeftRadius:"10px", paddingLeft:"15px",paddingBottom:"6px"}}>Freedompress - </span>

            <span style={{ color: "#0A174E" , background:"#f5d042",borderBottomRightRadius:"10px", paddingRight:"15px",paddingBottom:"6px"}} >Top   {this.str.charAt(0).toLowerCase() + this.str.slice(1)} headlines</span>

          </h1>
         
          
        {this.state.loading && <Spinner/>}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container my-3'>
            <div className="row" >
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>

                  <NewsItem title={element.title ? element.title/* .slice(0, 40) */ + "..." : "Title Is not Avialble This News..."} descripation={element.description ? element.description/* .slice(0, 88) */ : "Description is Not Avialable this news..."} Imagetourl={element.urlToImage ? element.urlToImage : "https://c.ndtvimg.com/2023-05/1lfng7gg_-airlines-baggage-fee_625x300_20_May_23.jpg"} Newsurl={element.url} publishedAt={element.publishedAt} name={element.source.name} />

                </div>
              })}
              {/* {this.state.loading && <Spinner />} */}

            </div>
            </div>
            </InfiniteScroll>

          
          {/* <div className="container d-flex justify-content-between my-3">
            <button type="button" className="btn btn-success text-light" onClick={this.Previouser} disabled={this.state.page <= 1}> &larr;Previous</button>
            <button type="button" className="btn btn-success text-light" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))} onClick={this.Nexter}>Next &rarr;</button>
          </div> */}
         </div>
      </>

    )
  }
}
