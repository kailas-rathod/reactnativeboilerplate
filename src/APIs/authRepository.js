import {UATRepository} from './Repository';

const singup = "signupWithPassword"

export default {
  Registration(payload) {
    return UATRepository.post(transformRoute(singup), payload);
  },
};

const transformRoute = (route) => {
  return `/api/auth/${route}`;
};
