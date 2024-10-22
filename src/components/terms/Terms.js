/* eslint-disable */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../redux/reducers/user';
// import { saveUser } from '../redux/reducers/user';

export default function Terms() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const terms = useRef(null);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user).userReducer;
  console.log(profile);
  // Add each inputs to the Inputs value
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setInputs((values) => ({ ...values, [name]: checked }));
  };

  //   Handle Submit
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(terms.current.checked);
    if (terms.current.checked) {
      dispatch(saveUser(inputs));
      localStorage.setItem('inputs', JSON.stringify(profile));
      navigate('/');
    }
  };

  return (
    <>
      <p>Terms & condition</p>
      <form onSubmit={handelSubmit} id="mobileNumber" action="" method="POST" name="signupForm">
        {/* <input type="checkbox" id="terms" name="t&c" value="" /> */}
        <input
          onChange={handleChange}
          required
          value={inputs.termsCondition || ''}
          name="termsCondition"
        // autoComplete="true"
          id="terms-condition"
          ref={terms}
          className="m-1 p-1"
          type="checkbox"
        />
        <input className="btn btn-primary" id="submit" type="submit" />
      </form>
    </>
  );
}
