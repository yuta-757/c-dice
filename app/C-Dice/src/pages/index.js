import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/index/Header';
import Scroll from '../components/index/Scroll';
import Footer from '../components/index/Footer';
import Social from '../components/index/Social';

import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Fight is not fun,<br />
                Victory is fun.
              </h1>
              <Scroll type="id" element="download">
                <a href="#download" className="btn btn-outline btn-xl">
                     Download
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Make sure you win
            </h2>
            <p>
              Our app is available on any mobile device! Download now to get
              started!
            </p>
            <div className="badges">
              <a className="badge-link" href="/#">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/#">
                <img src={astore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>C-Dice function</h2>
          <p >
            Check out what you can do with this app theme!
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Cheat</h3>
                    <p >
                      You can roll a specific dice by tapping a specific place
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Sounds</h3>
                    <p>
                      Makes a sound when tapped
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Free to Use</h3>
                    <p >
                      As always, this theme is free to download and use for any
                      purpose!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Prevent cheating</h3>
                    <p >
                      You need to tap different places for even and odd times
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          Contact
        </h2>
        <Social />
      </div>
    </section>
    <Footer />
  </Layout>
);

export default IndexPage;
