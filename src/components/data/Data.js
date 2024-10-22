/* eslint-disable */
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../redux/reducers/user';
import './data.css';

export default function Data() {
  const profile = useSelector((state) => state.user).userReducer;
  console.log(Object.keys(profile));
  console.log(Object.values(profile));

  return (
    <>
      <div className="data-head p-4">
        <h3>All your DATA</h3>
        <Link to="/">Home</Link>
      </div>
      <ul className="data-form p-4">
        { Object.keys(profile).map((item, i) => (
          <li key={item}>{item.toUpperCase()}:&nbsp;<span className="text-primary">{profile[item].toString()}</span></li>
        ))}
      </ul>
    </>
  );
}
