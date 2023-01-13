import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa'
import {Button, Input} from '../../../components'
import "./Login.scss";

const Login = () => {
  return (
    <div className="auth-inner">
      <div className="alerts alert-error" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
          <Input id='username' name='username' type="text" placeholder='Enter username' value={'text'} labelText='Username' handleChange={() => {}} />
          <Input id='password' name='password' type="password" placeholder='Enter password' value={'text'} labelText='Password' handleChange={() => {}} />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" type="checkbox" name="checkbox" value={'text'} />
            Keep me signed in
          </label>
        </div>
        <Button label={'SIGNIN'} className='auth-button button' disabled={true} />
        <Link to='/forgot-password'><span className="forgot-password">
          Forgot password? <FaArrowRight className='arrow-right' />
        </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
