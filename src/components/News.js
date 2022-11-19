import React, { Component } from "react";
import { Spinner } from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: true, page: 1, totalResults: 0 };
    document.title =
      "NewsMonke | " +
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.substring(1);
  }
 


  async componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47e48e2d7de9438fad48d458785bdf28&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    let { mode } = this.props;
    return (
      <>
        <h1 className="text-center" style={{ margin: "75px 0" }}>
          {this.props.category === "general"
            ? "NewsMonke - Daily Dose of Internet"
            : this.props.category.charAt(0).toUpperCase() +
              this.props.category.substring(1)}
        </h1>
        {this.state.articles.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container ">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" id="newscard" key={element.url}>
                    <NewsItem
                      source={element.source.name}
                      author={element.author}
                      date={element.publishedAt}
                      mode={mode}
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageurl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                      }
                      newsurl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
