import React, { Component } from "react";
import axios from 'axios';
import $ from 'jquery';

import ScrollToTopBtn from '../components/scripts/ScrollToTop';

import '../css/general.css';
import '../css/profiles.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
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
  render(){
    const { posts } = this.state;
    console.log(posts);
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="singleModel hidden col-xs-6 col-sm-6 col-md-4 col-lg-3" key={post.username}>
            <div className="card">
              <a href={"/model?username=" + post.username + "?gender=" + post.gender} className="profileLink">
                <img className="card-img-top" src={ post.profile_images.thumbnail_image_medium_live } alt={ post.username } />
                <div className="info">
                  <span className="float-left">{ post.display_name }</span>
                  <span className="float-right">{ post.members_count } <FontAwesomeIcon icon={faEye} /></span>
                </div>
              </a>
              <div className="card-body">
                <p className="card-text hashtags"><a href={"/tags?tag=" + post.tags[0] }>#{ post.tags[0] }</a><a href={"/tags?tag=" + post.tags[1] }>#{ post.tags[1] }</a><a href={"/tags?tag=" + post.tags[2] }>#{ post.tags[2] }</a></p>
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
        <ScrollToTopBtn />
      </div>
    );
  }
  componentDidUpdate(){
    var n = 20;
    $('.singleModel.hidden:nth-child(1)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(2)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(3)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(4)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(5)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(6)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(7)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(8)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(9)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(10)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(11)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(12)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(13)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(14)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(15)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(16)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(17)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(18)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(19)').removeClass('hidden');
    $('.singleModel.hidden:nth-child(20)').removeClass('hidden');

    window.onscroll = function() {
      if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {
        var elements = $('.singleModel.hidden');
        for (var i = 0; i < n; i++) {
          if ($('.singleModel.hidden').length > 0){
            elements[i].classList.remove('hidden');
          }
        }
      }
    }
  }
}

export default Home;
