import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-grid" style={{ width: '100%', margin: 'auto' }}>
        <Grid>
          <Cell col={12}>
            <img
              src="https://en.gravatar.com/userimage/138279061/6a8fdee3bc70091ae86cc7da852c4831.png?size=250"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1> Front End Developer</h1>

              <hr />

              <p>
                HTML/CSS3 | Bootstrap | React JS | NodeJS | Redux | Flutter |
                GraphQL
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
