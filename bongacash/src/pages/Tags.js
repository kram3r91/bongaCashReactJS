import React, { Component } from "react";
import axios from 'axios';
import $ from 'jquery';
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
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item home"><a href="/">Home</a></li>
                  <li className="breadcrumb-item tags active" aria-current="page">Tag</li>
                </ol>
              </nav>
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
    function search(parameter, posts){
      for ( var i = 0; i < posts.length; i++){
        if(posts[i].tag === parameter){
        }
      }
    }
    const { posts } = this.state;
    const parameter = window.location.href.split('tag=')[1].replace(/%20/g, ' ');
    $('#show').html(search(parameter, posts));
    $('.breadcrumb-item.active').html(parameter);
  }
}

export default Model;
