//import { useContext } from 'react';
//import { useNavigate } from 'react-router-dom';

//import { EmailContext } from '../context/EmailContext';
//import { PasswordContext } from '../context/PasswordContext';
//import { UserContext } from '../context/UserContext';

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
    console.log(email, confirm, password, user);
    console.log('login');
  } else {
    const password = ev.currentTarget.previousSibling.previousSibling.value;
    const user = ev.currentTarget.previousSibling.previousSibling.previousSibling.value;
    console.log(password, user);
    console.log('register');
  }
};
export default handleSubmit;
