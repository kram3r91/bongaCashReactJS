import React , { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://promo-bc.com/promo.php?c=623270&type=api&api_v=1&api_type=json')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0,10000)
        })
      })
  }
  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.username}>
            <div className="card-content">
              <h4>{post.display_name}</h4>
              <p>{post.chat_url}</p>
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
          <img src={logo} className="App-logo" alt="logo" />
          {postList}
        </header>
      </div>
    );
  }
}

export default Home;
