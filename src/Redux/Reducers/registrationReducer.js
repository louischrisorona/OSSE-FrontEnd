import { uuid } from 'assert-plus';

const initialState = {
  registration: [
    {
      id: uuid,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    },
  ],
};
const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_POSTED':
      return {
        ...state,
        registration: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;
