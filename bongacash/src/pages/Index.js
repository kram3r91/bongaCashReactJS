import React, { Component } from "react";
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://promo-bc.com/promo.php?c=623270&type=api&api_v=1&api_type=json')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0,1000)
        })
      })
  }
  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-2" key={post.username}>
            <div className="card">
              <img className="card-img-top" src={ post.profile_images.thumbnail_image_medium_live } alt={ post.username } />
              <div className="card-body">
                <h5 className="card-title">{ post.username }</h5>
                <p className="card-text">{ post.display_name + post.display_age }</p>
                <p className="card-text">
                  <small className="text-muted">
                    <span className="float-left"><FontAwesomeIcon icon={faClock} /> { post.online_time }</span>
                    <span className="float-right"><FontAwesomeIcon icon={faUsers} /> { post.members_count }</span>
                  </small>
                </p>
                <button className="btn-goTo" username={ post.username }>click</button>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <h2>No models online :(</h2>
    )
    return (
      <div className="App">
        <header className="App-headers">
        <div className="container">
          <div className="row">
            {postList}
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default Home;
