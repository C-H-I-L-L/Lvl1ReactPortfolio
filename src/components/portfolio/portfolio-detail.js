import React, { Component } from "react";
import axios from 'axios';

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    };
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://wubbalubbadubbdubb.devcamp.space/portfolio/portfolio_items/${
          this.props.match.params.slug
        }`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState ({
          portfolioItem: response.data.portfolio_item
        })
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }
  
  render() {
  const {
    banner_image_url,
    category,
    description,
    logo_url,
    name,
    thumb_image_url,
    url
  } = this.state.portfolioItem;

  return (
    <div className="container">
      <div className="name">
        <h2>{name}</h2>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
  }
}
