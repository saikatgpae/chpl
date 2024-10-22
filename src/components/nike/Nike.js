import React from 'react';
import { Link } from 'react-router-dom';

import './nike.css';

export default function Nike() {
  return (
    <div className="p-4">
      <Link to="/">Home</Link>
      <h3>Nike</h3>
    </div>
  );
}
