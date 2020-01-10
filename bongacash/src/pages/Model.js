import React, { Component } from "react";
import axios from 'axios';
import $ from 'jquery';
import '../css/model.css';
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
              <div className="col-sm-6 col-md-6 col-lg-6">
                <nav aria-label="breadcrumb float-left">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item home"><a href="/">Home</a></li>
                    <li className="breadcrumb-item gender"><a href="/">Gender</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Username</li>
                  </ol>
                </nav>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <button type="button" className="btn btn-primary btn-sm float-right">Users on profile <span className="badge badge-light"></span></button>
              </div>
            </div>
            <div className="row">
              <iframe scrolling="no" title="BongaCash"></iframe>
            </div>
            <div className="row">
            </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
  componentDidUpdate(){
    const { posts } = this.state;
    const parameter = window.location.href.split('username=')[1].split('?gender')[0];
    const model = posts.find( ({username}) => username === parameter);

    $('.breadcrumb-item.gender a').html(model.gender);
    $('.breadcrumb-item.gender a').attr('href', '/genders?gender=' + model.gender);
    $('.breadcrumb-item.active').html(model.display_name);
    $('.badge-light').html(model.members_count);
    $('iframe').attr('title', model.username + model.tags).attr('src', model.embed_chat_url);
  }
}

export default Model;
