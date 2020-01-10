import React, { Component } from "react";
import axios from 'axios';
import $ from 'jquery';

import '../css/general.css';
import '../css/profiles.css';

class Model extends Component {
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
  render(){
    return (
      <div className="App">
        <header className="App-headers">
        <div className="container">
          <div className="profile-model hidden">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg6">
                <nav aria-label="breadcrumb float-left">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item home"><a href="/">Home</a></li>
                    <li className="breadcrumb-item gender active" aria-current="page">Gender</li>
                  </ol>
                </nav>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <button type="button" className="btn btn-primary btn-sm float-right">Models online from this category <span className="badge badge-light"></span></button>
              </div>
            </div>
            <div className="row" id="show">
            </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
  componentDidUpdate(){
    var createPost = '';
    function search(parameter, posts){
      for ( var i = 0; i < posts.length; i++){
        if(posts[i].gender === parameter){
          createPost += '<div class="singleModel hidden col-xs-6 col-sm-6 col-md-4 col-lg-3">' +
          '<div class="card">' +
              '<a href="/model?username=' + posts[i].username + '?gender=' + posts[i].gender + '" class="profileLink">' +
                '<img class="card-img-top" src="'+ posts[i].profile_images.thumbnail_image_medium_live +'" alt={ post.username } />' +
                '<div class="info">' +
                  '<span class="float-left">' + posts[i].display_name + ' </span>' +
                  '<span class="float-right">' + posts[i].members_count + '' +
                '</div>' +
              '</a>' +
              '<div class="card-body">' +
                '<p class="card-text hashtags"><a href="/tags?tag= '+ posts[i].tags[0] + ' "> #' + posts[i].tags[0] + '</a><a href="/tags?tag= '+ posts[i].tags[1] + ' "> #' + posts[i].tags[1] + '</a><a href="/tags?tag= '+ posts[i].tags[2] + ' "> #' + posts[i].tags[2] + '</a></p>' +
                '<p class="card-text">' +
                  '<small class="text-muted">' +
                    '<span class="float-left"></span>' +
                    '<span class="float-right"></span>' +
                  '</small>' +
                '</p>' +
              '</div>' +
            '</div>' +
          '</div>';
        }
      }
    }
    const { posts } = this.state;
    const parameter = window.location.href.split('gender=')[1].replace(/%20/g, ' ');
    search(parameter, posts);
    $('#show').html(createPost);
    $('.breadcrumb-item.active').html(parameter);
    var modelsFromCategory = $('.singleModel');
    $('.badge-light').html(modelsFromCategory.length);

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

export default Model;
