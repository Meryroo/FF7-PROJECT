//import { useContext } from 'react';
//import { useNavigate } from 'react-router-dom';

//import { EmailContext } from '../context/EmailContext';
//import { PasswordContext } from '../context/PasswordContext';
//import { UserContext } from '../context/UserContext';
import CheckEmail from './CheckEmail';
import checkPassword from './CheckPassword';
import checkUser from './CheckUser';
import { passwordParams, userParams } from './ObjectToCheck';

const handleSubmit = (ev, register) => {
  //const navigate = useNavigate();
  //const { setUser } = useContext(UserContext);
  //const { password, setPassword } = useContext(PasswordContext);
  //const { email, setEmail } = useContext(EmailContext);
  ev.preventDefault();

  if (register == 'login') {
    const email = ev.currentTarget.previousSibling.value;
    const confirm = ev.currentTarget.previousSibling.previousSibling.value;
    const password =
      ev.currentTarget.previousSibling.previousSibling.previousSibling.previousSibling
        .value;
    const user =
      ev.currentTarget.previousSibling.previousSibling.previousSibling.previousSibling
        .previousSibling.value;
    if (checkUser(user, userParams)[0] == false) {
      alert('user');
    }
    if (checkPassword(password, passwordParams) == false) {
      alert('password');
    }
    if (CheckEmail(email) == false) {
      alert('email');
    }
    if (password != confirm) {
      alert('confirm');
    }
  } else {
    const password = ev.currentTarget.previousSibling.previousSibling.value;
    const user = ev.currentTarget.previousSibling.previousSibling.previousSibling.value;
    if (checkUser(user, userParams)[0] == false) {
      alert('user');
    }
    if (checkPassword(password, passwordParams) == false) {
      alert('password');
    }
  }
};
export default handleSubmit;
