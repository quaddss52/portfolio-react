import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <p>Copyright &copy; 2022 </p>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}