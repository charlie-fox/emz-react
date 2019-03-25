import React, { Component } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import Sticky from 'react-sticky-state';
import logo from './images/logo.svg'; // Tell Webpack this JS file uses this image


class App extends Component {
  render() {    
    return (
      <div className="App">
        
        <section className="intro">
          <div className="hero-overlay"/>
          
          <div className="intro-panel">
            <h2 className="title">Emily Fox</h2>
            <h3 className="subtitle">Freelance Writer</h3>
            <a href="#" className="button">Contact Me</a>
          </div>
        </section>

        <Sticky>
          <div className="App-navigation">
            <div className="logo">
              {/* <img src={logo} alt="Logo" /> */}

              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="pen-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-pen-alt fa-w-16"><path fill="currentColor" d="M493.25 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.26 18.74l-67.87 67.88-39.59-39.59c-15.62-15.62-40.95-15.62-56.56 0L82.42 165.81c-6.25 6.25-6.25 16.38 0 22.62l11.31 11.31c6.25 6.25 16.38 6.25 22.62 0L229.49 86.62l33.94 33.94-7.42 7.42L93.95 290.03A327.038 327.038 0 0 0 .17 485.12l-.03.23C-1.45 499.72 9.88 512 23.95 512c.89 0 1.78-.05 2.69-.15a327.077 327.077 0 0 0 195.34-93.8L384.02 256l34.74-34.74 74.49-74.49c25-25 25-65.52 0-90.51zM188.03 384.11c-37.02 37.02-83.99 62.88-134.74 74.6 11.72-50.74 37.59-97.73 74.6-134.74l162.05-162.05 7.42-7.42 60.14 60.14-7.42 7.42-162.05 162.05zm271.28-271.29l-67.88 67.88-48.82-48.83-11.31-11.31 67.87-67.87c4.08-4.08 8.84-4.69 11.31-4.69 2.47 0 7.24.61 11.31 4.69L459.3 90.2c4.08 4.08 4.69 8.84 4.69 11.31s-.6 7.24-4.68 11.31z" class=""></path></svg>
              &#8202;
              Emily Fox
            </div>
            <div className="links">
              <div>Portfolio</div>
              <div>Services</div>
              <div>About</div>
              <div>Hire Emily</div>
            </div>
          </div>          
        </Sticky>

        <section className="portfolio">
          
          <h2 className="title">Portfolio</h2>
          <h4 className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

          <div className="article-filter">
          
          </div>

          <div className="portfolio-grid">
            {/* article */}
            <div>
              <div className="article-overlay">
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className="article-content">
                <span className="title">Article Title Goes Here</span>
                <span className="excerpt">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh...
                </span>
                <span className="view-on"><a href="#"><FontAwesomeIcon icon={faMedium} size="lg" /> View on Medium</a></span>              
              </div>
            </div>    
            {/* article */}
            <div>
              <div className="article-overlay">
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className="article-content">
                <span className="title">Article Title Goes Here</span>
                <span className="excerpt">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh...
                </span>
                <span className="view-on"><a href="#"><FontAwesomeIcon icon={faMedium} size="lg" /> View on Medium</a></span>              
              </div>
            </div> 
            {/* article */}
            <div>
              <div className="article-overlay">
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className="article-content">
                <span className="title">Article Title Goes Here</span>
                <span className="excerpt">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh...
                </span>
                <span className="view-on"><a href="#"><FontAwesomeIcon icon={faMedium} size="lg" /> View on Medium</a></span>              
              </div>
            </div> 
            {/* article */}
            <div>
              <div className="article-overlay">
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className="article-content">
                <span className="title">Article Title Goes Here</span>
                <span className="excerpt">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh...
                </span>
                <span className="view-on"><a href="#"><FontAwesomeIcon icon={faMedium} size="lg" /> View on Medium</a></span>              
              </div>
            </div> 
            {/* article */}
            <div>
              <div className="article-overlay">
                <img src="https://source.unsplash.com/random" />
              </div>
              <div className="article-content">
                <span className="title">Article Title Goes Here</span>
                <span className="excerpt">
                  Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh...
                </span>
                <span className="view-on"><a href="#"><FontAwesomeIcon icon={faMedium} size="lg" /> View on Medium</a></span>              
              </div>
            </div>             
          </div>
        </section>

        <section className="services">
          <h2 className="title">Services</h2>
          <p>Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </section>

        <section className="about">
          <h2 className="title">About</h2>
          <svg width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.2" cx="80.5" cy="80.5" r="80.5" fill="#A5142A"/>
          </svg>
          <p>Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </section>        

        <section className="contact">
          <h2 className="title">Contact</h2>
          <p>Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <a href="#" className="button inverse">Say Hello</a>
        </section> 

        <section className="footer">

        </section>         


      </div>
    );
  }
}

export default App;
