import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { useState } from "react";
import logo from "../images_and_icons/logo.png";
import sticker from "../images_and_icons/sign_up.png";
import "../styles/login_page.scss";
import { useNavigate } from "react-router-dom";
const Login = () => {
  //add show/hide password
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }
  let navigate = useNavigate();
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
                {/* <input type="email" placeholder="Email" />
             
            <input type="password" placeholder="Password" /> */}
                <Input
                  width="50%"
                  type={showPassword ? "text" : "password"}
                  placeholder="Email"
                  m="0.5rem 0"
                  p="1.5rem"
                  border="0.1px solid #777"
                  borderRadius="5px"
                />
                <InputGroup width="55.5%">
                  <Input
                    width="100%"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    m="0.5rem 0"
                    p="1.5rem"
                    border="0.1px solid #777"
                    borderRadius="5px"
                  />
                  <InputRightElement>
                    <Button
                      onClick={togglePassword}
                      m="1rem .1rem"
                      border="none"
                      bg="none"
                      padding="1rem"
                      color="#39cdcc"
                      fontWeight="400"
                      fontSize="1.3rem"
                      textTransform="uppercase"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </div>
              <p>forgot password?</p>
              <button className="btn" onClick={() => navigate("/home")}>
                Log in
              </button>
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
