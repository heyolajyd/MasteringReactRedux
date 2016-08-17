import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home</h1>
        <p>This appliation uses React, Redux and React-Router for ultra responsive application</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more...</Link>
      </div>
    );
  }
}

export default HomePage;