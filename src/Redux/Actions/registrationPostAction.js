import axios from 'axios';

export const registrationPost = (id) => {
  return {
    type: 'REGISTRATION_POSTED',
    id,
  };
};

export const postUser = async () => {
  return (dispatch) => {
    try {
      let dataPost = await axios.post(
        'https://osse-back-end-eg6hsrqnn-jonathanmartin-gif.vercel.app/registration'.then(
          ({ data }) => {
            dispatch({ type: 'REGISTRATION_POSTED', payload: data });
          }
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
};
