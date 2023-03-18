import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'modules/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <div className="container">
        <h1>Register Page</h1>
        <RegisterForm onSubmit={handleSignup} />
      </div>
    </>
  );
};

export default RegisterPage;
