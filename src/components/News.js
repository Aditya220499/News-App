// import NewsItem from "./New/sItem";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
// import arr from "./temp";
// import Spinner from "./Spinner"
export default class News extends Component {
  constructor() {
    super();
    // console.log("myaRRRRRRRRRR=", arr.articles);
    // this.x = arr.articles;
    this.state = {
      // articles: arr.articles,
      articles: [],
      isLoading: false,
      isNewLoading: false
    };
  }

  componentDidMount = async () => {
    let url = "https://api.npoint.io/3817ac188c37381f4b7f";
    // "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=07662554fbbe4f80ae97023b4c5cd8d7";
    this.setState({ isLoading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log("parse data=", parsedData);

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      isLoading: false
    });
    console.log("in cdm", this.state);
  };

  fetchMoreData = async () => {
    let url = "https://api.npoint.io/3817ac188c37381f4b7f";
    // let url = "https://api.npoint.io/8ef37d411e36df0fcfa3";

    // "nfl power;
    this.setState({ isNewLoading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log("parse data=", parsedData);

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      isNewLoading: false
    });
    console.log("in fmd fetch more data", this.state);
    console.log("articles=", this.state.articles.length);
  };
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2> News: Top Headlines </h2>
        {this.state.isLoading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < 85}
          loader={this.state.isNewLoading && <Spinner />}
          // loader={<p> end</p>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
            <div className="row my-3">
              {
                /* {
            (console.log("in return ", this.state.articles),
            // console.log("true"), */
                // if(this.state.articles!=null){

                this.state.articles.map((element) => {
                  // console.log(element);
                  return (
                    <div className="col-md-4 my-3">
                      <NewsItem
                        title={element.title.slice(0, 45)}
                        description={(element.description || "No Desc").slice(
                          0,
                          90
                        )}
                        url={element.url}
                        urlToImage={element.urlToImage}
                      />
                      {console.log("ele********************")}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </InfiniteScroll>
        {console.log(
          "out of inf scroll",
          this.state.isLoading,
          this.state.isNewLoading,
          this.state.articles.length
        )}
      </div>
    );
  }
}
