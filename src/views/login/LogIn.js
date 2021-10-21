import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import LoginForm from '../../components/login-form/LoginForm';
import { setUser } from '../../store/user';
import CenteredWrapper from '../../components/centered-wrapper/CenteredWrapper';

function LogIn() {
  const validCredentials = useSelector((state) => state.validCredentials);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (formData) => {
    dispatch(setUser(formData.login));
    history.push('/profile');
  };

  return (
    <CenteredWrapper>
      <LoginForm validCredentials={validCredentials} submit={submitHandler} />
    </CenteredWrapper>
  );
}

export default LogIn;
