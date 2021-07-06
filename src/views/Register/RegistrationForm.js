import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';

const initialForm = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  email_match: '',
  password: '',
  password_match: '',
};

const RegistrationForm = () => {
  const [registrationForm, setRegistrationForm] = useState({ ...initialForm });

  const history = useHistory();

  // It's only responsibility is handling form input changes
  const handleChange = ({ target }, event) => {
    event.preventDefault();
    setRegistrationForm({ ...registrationForm, [target.name]: target.value });
  };

  // It's only responsibility is handling the submit
  const submitHandler = (event) => {
    event.preventDefault();
    const { first_name, last_name, username, email, password, password_match } =
      registrationForm;

    console.log(
      first_name,
      last_name,
      username,
      email,
      password,
      password_match
    );

    // this is now in a helper function -- easier to debug if something breaks,
    // it also then breaks apart the responsibilities
    validateForm();
  };

  // It's only responsibility is handling the POST
  const postRegistration = async () => {
    const abortController = new AbortController();
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registration_id: uuid(),
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_match: '',
        }),
      };
      //eslint-disable-next-line
      const response = await fetch(currentAPI, requestOptions, {
        signal: abortController.signal,
      });

      // not sure what your response looks like, but I would check for a 200
      // usually I return a success boolean so it would be -- if (response.success)
      if (response) {
        // not sure if you need anything from it, but you would do it here

        //finally, reset the registration form and navigate
        setRegistrationForm({ ...initialForm });
        history.push('/Login');
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        abortController.abort();
        console.log('Post was not successful');
      } else {
        throw error;
      }
    }
  };

  // It's responsibility is validating if the form is complete and ready to submit
  const validateForm = () => {
    /**
     * bouncer pattern -- early return if either of these are true
     * you can check any other field for empty values too
     * bouncer is one of my favorites, its an early check for edge cases such as nulls
     * or form data -- it stops it from executing anything else
     */
    if (registrationForm.email === '' || registrationForm.password.length < 8) {
      alert(
        `Email must be filled in and password must be 8 characters or more.`
      );
      return false;
    }

    // this will work now because the bouncer pattern catches the initial error
    if (
      registrationForm.email === registrationForm.email_match &&
      registrationForm.password === registrationForm.password_match
    ) {
      alert(`You're Email and Password Matches!`);
      // everything validated, so now we want to post
      postRegistration();
    } else {
      alert(`Email and Password Do Not Match!`);
    }
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
};

export default RegistrationForm;
