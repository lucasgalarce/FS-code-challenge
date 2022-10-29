import "./index.scss";
import { login } from "api/admin";
import { useContext } from "react";
import { AuthContext } from './../../contexts/AuthContext';

export const Login = () => {
  const { setToken } = useContext(AuthContext)
  const HandleLogin = async () => {
    console.log("HandleLogin")
    const token = await login()
    console.log(token)
    setToken(token)
  }

  return (
    <div className="login-page">
      <img
        src="https://www.deptagency.com/wp-content/themes/dept/public/logo-light-new.svg"
        alt="DEPT®"
        title="DEPT®"
      />
      <button onClick={HandleLogin} className="glow-on-hover">
        LOG IN
      </button>
    </div>
  );
};
