import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import validator from 'email-validator';

export default function RegistrationForm() {
  const initialForm = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  };
  const history = useHistory();

  const [registrationForm, setRegistrationForm] = useState({ ...initialForm });

  const handleChange = ({ target }) => {
    setRegistrationForm({ ...registrationForm, [target.name]: target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      username,
      email,
      confirmEmail,
      password,
      confirmPassword,
    } = registrationForm;
    if (
      registrationForm.email === registrationForm.confirmEmail &&
      registrationForm.password === registrationForm.confirmPassword
    ) {
      alert(`You're Email and Password Matches!`);
    } else {
      alert(`Email and Password Do Not Match!`);
    }

    console.log(
      firstName,
      lastName,
      username,
      email,
      confirmEmail,
      password,
      confirmPassword
    );
    setRegistrationForm({ ...initialForm });
    history.push('/Login');
  };

  return (
    <div style={{ padding: '30px 0px' }}>
      <div className='p-3 rounded' style={{ border: '2px solid #42fcfc' }}>
        <div
          className='card-title'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <h3 className='page-title'>Register</h3>
        </div>
        <form
          onSubmit={submitHandler}
          className='card-body'
          style={{ color: '#fff' }}
        >
          <label htmlFor='firstName' className='d-block'>
            First Name:
          </label>
          <input
            name='firstName'
            type='text'
            id='firstName'
            required
            onChange={handleChange}
            value={registrationForm.firstName}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='lastName' className='d-block'>
            Last Name:
          </label>
          <input
            name='lastName'
            type='text'
            id='lastName'
            required
            onChange={handleChange}
            value={registrationForm.lastName}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='username' className='d-block'>
            Username:
          </label>
          <input
            name='username'
            type='text'
            id='username'
            required
            onChange={handleChange}
            value={registrationForm.username}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='email' className='d-block'>
            Email:
          </label>
          <input
            name='email'
            type='text'
            id='email'
            required
            onChange={handleChange}
            value={registrationForm.email}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='confirmEmail' className='d-block'>
            Confirm Email:
          </label>
          <input
            name='confirmEmail'
            type='email'
            id='confirmEmail'
            required
            onChange={handleChange}
            value={registrationForm.confirmEmail}
            style={{ width: '100%' }}
          />
          <label htmlFor='password' className='d-block'>
            Password:{' '}
          </label>
          <input
            name='password'
            type='password'
            id='password'
            required
            onChange={handleChange}
            value={registrationForm.password}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='confirmPassword' className='d-block'>
            Confirm password:
          </label>
          <input
            name='confirmPassword'
            type='password'
            id='confirmPassword'
            required
            onChange={handleChange}
            value={registrationForm.confirmPassword}
            style={{ width: '100%' }}
          />
          <button type='submit' className='btn btn-primary mt-3'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
