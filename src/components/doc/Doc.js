/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { saveUser } from '../../redux/reducers/user';

export default function Doc() {
  const pan = useRef(null);
  const addhar = useRef(null);
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
    navigate('/bank');
    // console.log(inputs);
  };

  // Handle image upload
  const handleImageInput = (event) => {
    const { name, files } = event.target;
    setInputs((values) => ({ ...values, [name]: URL.createObjectURL(files[0]) }));
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
          value={inputs.pan || ''}
          name="pan"
          autoComplete="true"
          id="pan"
          ref={pan}
          className="m-1 p-1"
          type="text"
          placeholder="PAN NUMBER"
        />
        <input onChange={handleImageInput} type="file" id="pan-image" name="panImage" accept="image/png" />
        <br />
        <input
          onChange={handleChange}
          required
          value={inputs.addhar || ''}
          name="addhar"
          autoComplete="true"
          id="addhar"
          ref={addhar}
          className="m-1 p-1"
          type="text"
          placeholder="ADDHAR"
        />
        <input onChange={handleImageInput} type="file" id="addhar-image" name="addharImage" accept="image/png" />
        <br />
        <input className="btn btn-primary" id="submit" type="submit" />
      </form>
    </>
  );
}
