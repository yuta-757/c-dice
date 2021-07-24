import React, { Component } from 'react';
import config from '../../../config';
import Scroll from './Scroll';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  langChange = () => {
    const languages = document.getElementById('languages');
    if (languages) {
      const selectedLang = languages.value;
      var elm = document.getElementsByClassName("langCng");
      for (var i = 0; i < elm.length; i++) {
        // --- 選択された言語と一致は表示、その他は非表示 -------
        if(elm[i].getAttribute("lang") == selectedLang){
          elm[i].style.display = '';
        }
        else{
          elm[i].style.display = 'none';
        }
      }
    }
  }

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };
  componentDidMount() {
    this.langChange();
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            {config.siteTitle}
          </a>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="download"
                >
                  <a className="nav-link" href="#download">
                    PRIVACY
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="contact"
                >
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <select id="languages" className="langSelect" onChange={_ => this.langChange()}>
                  <option value="ja">日本語</option>
                  <option value="en">英語</option>
                  <option value="ko">韓国語</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
