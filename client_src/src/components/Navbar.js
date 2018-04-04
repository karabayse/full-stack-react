import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-extended">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">MeetupsMN</a>
              <a href="/main" data-activates="main-menu"
                className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>

              <ul className="right hide-on-small-only">
                <li><Link to="/"><i className="fa fa-users"></i>Meetups</Link></li>
              </ul>
            </div>
            <ul className="side-nav" id="main-menu">

            </ul>
          </nav>
      </div>
    )
  }
}

export default Navbar;
