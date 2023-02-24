import CheckEmail from './CheckEmail';
import checkPassword from './CheckPassword';
import checkUser from './CheckUser';
import { passwordParams, userParams } from './ObjectToCheck';

const handleSubmit = (
  ev,
  register,
  navigate,
  setUser,
  setPassword,
  setEmail,
  password,
) => {
  ev.preventDefault();

  if (register == 'login') {
    const emailValue = ev.currentTarget.previousSibling.value;
    const confirmValue = ev.currentTarget.previousSibling.previousSibling.value;
    const passwordValue =
      ev.currentTarget.previousSibling.previousSibling.previousSibling.previousSibling
        .value;
    const userValue =
      ev.currentTarget.previousSibling.previousSibling.previousSibling.previousSibling
        .previousSibling.value;
    const checkedUser = checkUser(userValue, userParams);
    if (checkedUser[0] == false) {
      if (checkedUser[1] == undefined) {
        alert('User cannot contain symbols or spaces');
      }
      if (checkedUser[1] != undefined) {
        alert(`The word ${checkedUser[1]} is not allowed`);
      }
    }
    if (checkPassword(passwordValue, passwordParams) == false) {
      alert(
        'Password must have a lowerCase and upperCase letter, a symbol and a number and canoot contain spaces',
      );
    }
    if (CheckEmail(emailValue) == false) {
      alert('Please enter a valid email');
    }
    if (passwordValue != confirmValue) {
      alert('The passwords does not match');
    }
    if (userValue.length <= 4 || userValue.length >= 13) {
      alert('User length has to be between 5 and 12 chars');
    }
    if (passwordValue.length <= 7 || passwordValue.length >= 16) {
      alert('Password length has to be between 8 and 15 chars');
    }
    if (emailValue && passwordValue && confirmValue == passwordValue && userValue) {
      setUser(userValue);
      setPassword(passwordValue);
      setEmail(emailValue);
      localStorage.setItem('prevUser', userValue);
      localStorage.setItem('user', userValue);
      localStorage.setItem('password', passwordValue);
      localStorage.setItem('email', emailValue);
      navigate('/');
    }
  } else {
    const passwordValue = ev.currentTarget.previousSibling.previousSibling.value;
    const userValue =
      ev.currentTarget.previousSibling.previousSibling.previousSibling.value;
    if (passwordValue == password && userValue == localStorage.getItem('prevUser')) {
      setUser(userValue);
      localStorage.setItem('user', userValue);
      navigate('/');
    } else {
      alert('Wrong user or password');
    }
  }
};
export default handleSubmit;
