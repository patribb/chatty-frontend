import { Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'
import {Button, Input} from '../../../components'
import bgImage from "../../../assets/images/background.jpg";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs" style={{ height: `${bgImage ? '300px' : ''}` }}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                <form className="forgot-password-form" onSubmit={() => {}}>
                  <div className="form-input-container">
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      value={'email'}
                      labelText="Email"
                      placeholder="Enter Email"
                      //style={{ border: `${showAlert ? '1px solid #fa9b8a' : ''}` }}
                      handleChange={() => {}}
                    />
                  </div>
                  <Button
                    //label={`${loading ? 'FORGOT PASSWORD IN PROGRESS...' : 'FORGOT PASSWORD'}`}
                    label={'FORGOT PASSWORD'}
                    className="auth-button button"
                    //disabled={!email}
                  />

                  <Link to={'/'}>
                    <span className="login">
                      <FaArrowLeft className="arrow-left" /> Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

