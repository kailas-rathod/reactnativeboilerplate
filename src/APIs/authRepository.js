// import {UATRepository} from './Repository';

// const singup = "signupWithPassword"

// export default {
//   Registration(payload) {
//     return UATRepository.post(transformRoute(singup), payload);
//   },
// };

// const transformRoute = (route) => {
//   return `/api/auth/${route}`;
// };
import {UATRepository} from './Repository';

const signupRoute = 'signupWithPassword';

const Registration = payload =>
  UATRepository.post(transformRoute(signupRoute), payload);

export default Registration;
const transformRoute = route => `/api/auth/${route}`;
