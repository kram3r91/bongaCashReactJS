import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../../css/navbar.css';

export default class Header extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://promo-bc.com/promo.php?c=623270&type=api&api_v=1&api_type=json')
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
  }
  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
      		<a className="navbar-brand" href="/">BongaCash + ReactJS </a>
      	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      	    <span className="navbar-toggler-icon"></span>
      	  </button>
      	  <div className="collapse navbar-collapse" id="navbarText">
      	    <ul className="navbar-nav mr-auto">
      	      <li className="nav-item">
      	        <a className="nav-link" href="/">All models</a>
      	      </li>
      	    </ul>
            <span className="navbar-text">
              <FontAwesomeIcon icon={faHeart} /> {posts.length} models online!
            </span>
      	  </div>
      	</nav>
      </React.Fragment>
    );
  }
}
