// /* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import nikeLogo from '../../images/nikelogo.png';
import shoe1 from '../../images/shoe1.svg';
import shoe11 from '../../images/shoe11.png';
import shoe12 from '../../images/shoe12.png';
import shoe13 from '../../images/shoe13.png';
import bag from '../../images/bag.png';
import menu from '../../images/menu.png';

import './nike.css';

export default function Nike() {
  return (
    <div style={{ }}>
      <div className="p-4">
        <Link to="/">Signup Stepper App</Link>
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
      <div className="product" style={{ height: '100vh' }}>
        <div className="product-info p-4">
          <p style={{ fontWeight: '900', fontSize: '2rem' }}>
            Nike Impact&nbsp;
            <span style={{ color: '#ED3B6B' }}>4</span>
          </p>
          <p>$250.90</p>
          <div>
            <p>colors</p>
            <div className="d-flex" style={{ gap: '5px' }}>
              <span className="color" style={{ backgroundColor: '#bbb' }} />
              <span className="color" style={{ backgroundColor: 'red' }} />
              <span className="color" style={{ backgroundColor: 'green' }} />
              <span className="color" style={{ backgroundColor: 'orange' }} />
            </div>
          </div>
          <div>
            <p>size</p>
            <div className="d-flex" style={{ gap: '5px' }}>
              <span className="size" style={{ backgroundColor: '#bbb' }}>6</span>
              <span className="size" style={{ backgroundColor: '#626266' }}>7</span>
              <span className="size" style={{ backgroundColor: '#626266' }}>8</span>
              <span span className="size" style={{ backgroundColor: '#626266' }}>9</span>
            </div>
            <button type="button" className="btn btn-lg text-white px-5 mt-4" style={{ backgroundColor: '#ED3B6B' }}>BUY</button>
          </div>
        </div>
        <div className="shoe-image-div" style={{ backgroundColor: 'transperent' }}>
          <div className="shoe-big">
            <img src={shoe1} alt="shoe" className="shoe1" />
          </div>
          <div className="shoe-mini-all" style={{ }}>
            <img src={shoe11} alt="nike logo" className="shoe-mini" style={{ }} />
            <img src={shoe12} alt="nike logo" className="shoe-mini" style={{ }} />
            <img src={shoe13} alt="nike logo" className="shoe-mini" style={{ }} />
          </div>
        </div>
        <div>
          Catalogue
        </div>
      </div>
    </div>
  );
}
