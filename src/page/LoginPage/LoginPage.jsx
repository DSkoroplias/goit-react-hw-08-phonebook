import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import LoginForm from 'modules/LoginForm/LoginForm';

const LoginPage = () => {
  // const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <>
      <div className="container">
        <h1>Login Page</h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </>
  );
};

export default LoginPage;
