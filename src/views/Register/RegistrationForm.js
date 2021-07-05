import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';

export default function RegistrationForm() {
  const initialForm = {
    id: uuid(),
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    email_match: '',
    password: '',
    password_match: '',
  };
  const history = useHistory();

  const [registrationForm, setRegistrationForm] = useState({ ...initialForm });

  const handleChange = ({ target }) => {
    setRegistrationForm({ ...registrationForm, [target.name]: target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const {
      id,
      first_name,
      last_name,
      username,
      email,
      email_match,
      password,
      password_match,
    } = registrationForm;
    if (
      registrationForm.email === registrationForm.email_match &&
      registrationForm.password === registrationForm.password_match
    ) {
      alert(`You're Email and Password Matches!`);
      useEffect(() => {
        const currentAPI = `https://osse-back-end.vercel.app/registration`;
        const abortController = new AbortController();
        async function postRegistration() {
          try {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id,
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: '',
                password_match: '',
              }),
            };
            const response = await fetch(currentAPI, requestOptions, {
              signal: abortController.signal,
            });
          } catch (error) {
            if (error.name === 'AbortError') {
              console.log('Post was no successful');
            } else {
              throw error;
            }
          }
        }
        postRegistration();
        return () => {
          abortController.abort();
        };
      }, []);
    } else {
      alert(`Email and Password Do Not Match!`);
    }
    console.log(
      id,
      first_name,
      last_name,
      username,
      email,
      email_match,
      password,
      password_match
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
          <label htmlFor='first_name' className='d-block'>
            First Name:
          </label>
          <input
            name='first_name'
            type='text'
            id='first_name'
            required
            onChange={handleChange}
            value={registrationForm.first_name}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='last_name' className='d-block'>
            Last Name:
          </label>
          <input
            name='last_name'
            type='text'
            id='last_name'
            required
            onChange={handleChange}
            value={registrationForm.last_name}
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
          <label htmlFor='email_match' className='d-block'>
            Confirm Email:
          </label>
          <input
            name='email_match'
            type='email'
            id='email_match'
            required
            onChange={handleChange}
            value={registrationForm.email_match}
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
          <label htmlFor='password_match' className='d-block'>
            Confirm password:
          </label>
          <input
            name='password_match'
            type='password'
            id='password_match'
            required
            onChange={handleChange}
            value={registrationForm.password_match}
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
