import { useState } from "react";
import logo from "../images_and_icons/logo.png";
import sticker from "../images_and_icons/sign_up.png";
import "../styles/login_page.scss";
const Login = () => {
  //add show/hide password
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="login_page">
      <figure>
        <img src={logo} alt="logo" className="logo" />
      </figure>
      <section>
        <div className="left_side">
          <figure>
            <img src={sticker} alt="signup sticker" className="sticker" />
          </figure>
        </div>

        <main className="right_side">
          <div>
            <h2>Welcome!</h2>
            <h4> Enter details to login</h4>
            <form>
              <div className="input_section">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
              </div>
              <p>forgot password?</p>
              <button>Log in</button>
            </form>
            <div>
              <p>don't have an account? sign up!</p>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Login;
