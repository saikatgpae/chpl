/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { saveUser } from '../../redux/reducers/user';

export default function Doc() {
  const bankAC = useRef(null);
  const bankName = useRef(null);
  const ifsc = useRef(null);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user).userReducer;
  useEffect(() => {
    console.log(profile);
  }, [profile]);

  // Add each inputs to the Inputs value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //   Handle Submit
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUser(inputs));
    navigate('/terms');
  };

  return (
    <>
      <p>Enter PAN AND ADDHAR DETAILS</p>
      <Link to="/address">back</Link>
      <form onSubmit={handelSubmit} id="mobileNumber" action="" method="POST" name="signupForm">
        <br />
        <input
          onChange={handleChange}
          required
          value={inputs.bankACnumber || ''}
          name="bankACnumber"
          autoComplete="true"
          id="bank-AC"
          ref={bankAC}
          className="m-1 p-1"
          type="password"
          placeholder="Bank AC number"
        />
        <br />
        <input
          onChange={handleChange}
          required
          value={inputs.bankACname || ''}
          name="bankACname"
          autoComplete="true"
          id="bank-name"
          ref={bankName}
          className="m-1 p-1"
          type="text"
          placeholder="Bank Name"
        />
        <br />
        <input
          onChange={handleChange}
          required
          value={inputs.bankIFSC || ''}
          name="bankIFSC"
          autoComplete="true"
          id="IFSC-code"
          ref={ifsc}
          className="m-1 p-1"
          type="text"
          placeholder="IFSC code"
        />
        <br />
        <input className="btn btn-primary" id="submit" type="submit" />
      </form>
    </>
  );
}
