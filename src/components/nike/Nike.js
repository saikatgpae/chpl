import React from 'react';
import { Link } from 'react-router-dom';
import nikeLogo from '../../images/nikelogo.png';
import shoe1 from '../../images/shoe1.svg';
import bag from '../../images/bag.png';
import menu from '../../images/menu.png';

import './nike.css';

export default function Nike() {
  return (
    <div style={{ backgroundColor: '#181820' }}>
      <div className="p-4">
        <Link to="/">Home</Link>
      </div>
      <div className="nike-head p-4">
        <img src={nikeLogo} alt="nike logo" className="nike-logo" style={{ height: '2rem', width: 'auto' }} />
        <div className="d-flex">
          <ul className="text-white d-flex menu m-0">
            <li>Home</li>
            <li>Offers</li>
            <li>Collection</li>
            <li>Contact</li>
          </ul>
          <div style={{ paddingRight: '2.5vw' }}>
            <input className="m-1" type="text" id="searchInput" placeholder="Search" />
          </div>
          <div className="d-flex" style={{ gap: '2.5vw' }}>
            <img src={bag} alt="nike logo" style={{ height: '2rem', width: 'auto' }} />
            <img src={menu} alt="nike logo" style={{ height: '2rem', width: 'auto' }} />
          </div>
        </div>
      </div>
      <div className="shoe">
        <div>
          Product details
        </div>
        <div>
          Shoe details
          <img src={shoe1} alt="nike logo" />
        </div>
        <div>
          Catalogue
        </div>
      </div>
    </div>
  );
}
