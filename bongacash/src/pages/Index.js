import React, { Component } from "react";
import axios from 'axios';

import '../css/general.css';
import '../css/profiles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://promo-bc.com/promo.php?c=623270&type=api&api_v=1&api_type=json')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0,99999)
        })
      })
  }
  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="singleModel col-sm-12 col-md-6 col-lg-3" key={post.username}>
            <div className="card">
              <a href="/" className="profileLink">
                <img className="card-img-top" src={ post.profile_images.thumbnail_image_medium_live } alt={ post.username } />
                <div className="info">
                  <span className="float-left">{ post.display_name }</span>
                  <span className="float-right">{ post.members_count } <FontAwesomeIcon icon={faEye} /></span>
                </div>
              </a>
              <div className="card-body">
                <h5 className="card-title">{ post.display_name }</h5>
                <p className="card-text hashtags"><a href="/">#{ post.tags[0] }</a><a href="/">#{ post.tags[1] }</a><a href="/">#{ post.tags[2] }</a></p>
                <p className="card-text">
                  <small className="text-muted">
                    <span className="float-left"></span>
                    <span className="float-right"></span>
                  </small>
                </p>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <h2>Models online is loading ...</h2>
    )
    return (
      <div className="App">
        <header className="App-headers">
        <div className="container">
          <div className="profile-list">
            <div className="row">
              {postList}
            </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default Home;
