import './LoginForm.css';
import { useForm } from 'react-hook-form';

function LoginForm({ validCredentials, submit }) {
  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' });

  const onSubmit = (formData) => {
    submit(formData);
  };

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <div className="login__element">
        <label className="login__label" htmlFor="login">
          Логин
        </label>
        <input
          className="login__input"
          id="login"
          name="login"
          type="text"
          {...register('login', {
            validate: (value) => value === validCredentials.login,
          })}
        />
      </div>

      <div className="login__element">
        <label className="login__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="login__input"
          id="password"
          name="password"
          type="text"
          {...register('password', {
            validate: (value) => value === validCredentials.password,
          })}
        />
      </div>

      <button className="login__button" type="submit" disabled={!formState.isValid}>
        Войти
      </button>
    </form>
  );
}

export default LoginForm;
