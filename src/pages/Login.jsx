import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { EmailContext } from '../context/EmailContext';
import { PageContext } from '../context/PageContext';
import { PasswordContext } from '../context/PasswordContext';
import { UserContext } from '../context/UserContext';
import Button from '../ui-components/Button';
import Input from '../ui-components/InputForm';
import Form from '../ui-components/LoginForm';
import Main from '../ui-components/Main';
import ButtonRegister from '../ui-components/Register';
import handleSubmit from '../utils/HandleSubmit';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const { password, setPassword } = useContext(PasswordContext);
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('login');
  }, []);
  const handleSub = (ev) => {
    ev.preventDefault();
  };
  const navigate = useNavigate();
  const { email, setEmail } = useContext(EmailContext);
  const [see, setSee] = useState(false);
  const [register, setRegister] = useState(email == null ? 'login' : 'register');
  return (
    <Main>
      <h1>{page}</h1>
      <Form
        size="lg"
        action={(ev) => {
          handleSub(ev);
        }}
      >
        <Input placeholder="user" type="text"></Input>
        <Input placeholder="password" type={see ? 'text' : 'password'}></Input>
        <Button
          variant={'dark'}
          size="xm"
          text={'See Password'}
          action={(ev) => {
            ev.preventDefault();
            setSee(!see);
          }}
        ></Button>
        {email == null && (
          <Input placeholder="confirm password" type={see ? 'text' : 'password'}></Input>
        )}
        {email == null && <Input placeholder="email" type="text"></Input>}
        <Button
          text={register == 'login' ? 'register' : 'login'}
          size="sm"
          type="submit"
          action={(ev) => {
            handleSubmit(
              ev,
              register,
              navigate,
              setUser,
              setPassword,
              setEmail,
              password,
            );
          }}
        ></Button>
        <ButtonRegister
          color="dark"
          text={register}
          action={(ev) => {
            ev.preventDefault();
            email == null ? setEmail(' ') : setEmail(null);
            setRegister(register == 'login' ? 'register' : 'login');
          }}
        ></ButtonRegister>
      </Form>
    </Main>
  );
};
export default Login;
