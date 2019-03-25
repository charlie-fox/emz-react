import React, { Component } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import Sticky from 'react-sticky-state';

    const scrollClass = {
        down: 'sticky-scroll-down',
        up: 'sticky-scroll-up'
    }

class App extends Component {
  render() {    
    return (
      <div className="App">
        
        <section className="intro">
          <div className="hero-overlay"/>
          
          <div className="intro-panel">
            <h2 className="title">Emily Fox</h2>
            <h3 className="subtitle">Freelance Writer</h3>
            <a className="button">Contact Me</a>
          </div>
        </section>

        <Sticky scrollClass={scrollClass}>
          <div className="App-navigation">
            <div className="logo">
              logo
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
          <a className="button inverse">Say Hello</a>
        </section> 

        <section className="footer">

        </section>         


      </div>
    );
  }
}

export default App;
