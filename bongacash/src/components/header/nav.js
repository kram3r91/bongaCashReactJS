import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
      		<a className="navbar-brand" href="/">BongaCash + ReactJS</a>
      	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      	    <span className="navbar-toggler-icon"></span>
      	  </button>
      	  <div className="collapse navbar-collapse" id="navbarText">
      	    <ul className="navbar-nav mr-auto">
      	      <li className="nav-item">
      	        <a className="nav-link" href="/">All models</a>
      	      </li>
      	      <li className="nav-item">
      	        <a className="nav-link" href="/">Pricing</a>
      	      </li>
      	    </ul>
      	  </div>
      	</nav>
      </React.Fragment>
    );
  }
}
