import {Button, Input} from '../../../components'
import "./Register.scss";

const Register = () => {
  return (
    <div className="auth-inner">
      <div className="alerts alert-error" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
          <Input id='username' name='username' type="text" placeholder='Enter username' value={'username'} labelText='Username' handleChange={() => {}} />
          <Input id='email' name='email' type="text" placeholder='Enter email' value={'test@gmail.com'} labelText='Email' handleChange={() => {}} />
          <Input id='password' name='password' type="password" placeholder='Enter password' value={'******'} labelText='Password' handleChange={() => {}} />
        </div>
        <Button label={'SIGNUP'} className='auth-button button' disabled={true} />
      </form>
    </div>
  );
};

export default Register;
