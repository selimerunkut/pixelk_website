import React from 'react';

import './index.scss';
import avatar from '../../../assets/img/avatar.png';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="header">
      <div className="profile">
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
          <Navbar />
        </div>
        <div>Player</div>
      </div>
      <div className="user-holdings">
        <div>
          <span>$567</span>
          <span>|</span>
          <span>4231</span>
          <span className="coins">coins</span>
        </div>
      </div>
    </div>
  );
};

export default Header;