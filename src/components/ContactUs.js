import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
               <p className="lead">
                               Ways to contact me
              </p>
            </div>
          </div>
          <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={` ${item.className} fa-2x`}/>
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        </div>
        </section>
        );
  }
}