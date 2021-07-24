import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/privacy_policy/Header';
import Scroll from '../components/privacy_policy/Scroll';
import Footer from '../components/privacy_policy/Footer';
import Social from '../components/privacy_policy/Social';

import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';


const privacy_policy = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Privacy Policy<br/>
              </h1>
              <h2 className="langCng" lang="ja">
                このアプリケーションは、広告配信ツールとしてAdMob（Google Inc.）を使用しています。<br/>
                AdMobはユーザー情報を自動的に取得する場合があります。
              </h2>
              <h2 className="langCng" lang="en">
                This application uses AdMob (Google Inc.) as an advertisement distribution tool, <br/>
                and AdMob may automatically acquire user information.
              </h2>
              <h2 className="langCng" lang="ko">
              이 애플리케이션은 AdMob(Google Inc.)를 광고 배포 도구로 사용합니다. <br/>
              AdMob은 자동으로 사용자 정보를 얻을 수 있습니다.
              </h2>
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

export default privacy_policy;
