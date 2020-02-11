import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Genderlinks from './links';
import '../../css/navbar.css';

class Navigation extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://promo-bc.com/promo.php?c=623270&lang=en&type=api&api_v=1&api_type=json')
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
  }
  render() {
    const { posts } = this.state;
    return (
        <nav className="navbar sticky-top navbar-dark bg-pink navbar-expand-lg">
      		<a className="navbar-brand" href="/"><h3>Adult Videochat</h3></a>
      	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      	    <span className="navbar-toggler-icon"></span>
      	  </button>
      	  <div className="collapse navbar-collapse" id="navbarText">
              <Genderlinks />
            <span className="navbar-text">
              <FontAwesomeIcon icon={faHeart} /> {posts.length} models online!
            </span>
      	  </div>
      	</nav>
    );
  }
}

export default Navigation;
