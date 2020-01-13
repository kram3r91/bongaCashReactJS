import React, { Component } from 'react';
import axios from 'axios';

class Genderlinks extends Component {
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
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">All models</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/genders?gender=Female">Female</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/genders?gender=Couple Female + Male">Female + Male</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/genders?gender=Couple Female + Female">Female + Female</a>
        </li>

      </ul>
    )
  }
}
export default Genderlinks;
