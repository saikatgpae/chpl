/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { saveUser } from '../../redux/reducers/user';
import './mobile.css';

export default function Mobile() {
  const phone = useRef(null);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user).userReducer;
  console.log(profile);

  // Add each inputs to the Inputs value
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputs(() => ({ [name]: value }));
  };

  //   Handle Submit
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUser(inputs));
    // console.log(inputs);
    navigate('/address');
    // console.log(window.location.href)
  };

  const cleareAsyncStore = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error('Error clearing app data.');
    }
  };

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('inputs')));
  });

  const clearLocalStorage = async () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="head p-4">
        <Link to="/nike">Nike page</Link>
        <h1>Enter Mobile to sign up</h1>
       
        <div>
          <button className="btn text-primary text-decoration-underline" type="button" onClick={cleareAsyncStore}>clear Async store</button>
          <button className="btn text-primary text-decoration-underline" type="button" onClick={clearLocalStorage}>clear Local Storage</button>
        </div>
      </div>
      <form className="mobile-form p-4" onSubmit={handelSubmit} id="mobileNumber" action="" method="POST" name="signupForm">
        <br />
        <input pattern="^\d{10}$" onChange={handleChange} required value={inputs.phone || ''} name="phone" autoComplete="true" id="mobile" ref={phone} className="m-1 p-1" type="phone" placeholder="9000000000" />
        <input className="btn btn-primary" id="submit" type="submit" />
      </form>
    </>
  );
}
