/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { saveUser } from '../../redux/reducers/user';
import './address.css';

export default function Address() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const address = useRef(null);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user).userReducer;
  useEffect(() => {
    console.log(profile);
  }, [profile]);

  // Add each inputs to the Inputs value
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //   Handle Submit
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUser(inputs));
    navigate('/doc');
  };
  return (
    <>
      <div className="address-head p-4">
        <h1>Enter your name and address</h1>
        <Link to="/">back</Link>
      </div>
      <form className="address-form" onSubmit={handelSubmit} id="mobileNumber" action="" method="POST" name="signupForm">
        <input
          onChange={handleChange}
          required
          value={inputs.firstName || ''}
          name="firstName"
          autoComplete="true"
          id="first-name"
          ref={firstName}
          className="m-1 p-1"
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          required
          value={inputs.email || ''}
          name="email"
          autoComplete="true"
          id="email"
          ref={email}
          className="m-1 p-1"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          required
          value={inputs.lastName || ''}
          name="lastName"
          autoComplete="true"
          id="last-name"
          ref={lastName}
          className="m-1 p-1"
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          required
          value={inputs.address || ''}
          name="address"
          autoComplete="true"
          id="laddress"
          ref={address}
          className="m-1 p-1"
          type="text"
          placeholder="Addresse"
        />
        <input className="btn btn-primary m-2" id="submit" type="submit" />
      </form>
    </>
  );
}
