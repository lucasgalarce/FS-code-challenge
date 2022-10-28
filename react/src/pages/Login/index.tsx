import "./index.scss";
import { login } from "api/admin";

export const Login = () => {
  const handleLogin = async () => {
    await login()
  }

  return (
    <div className="login-page">
      <img
        src="https://www.deptagency.com/wp-content/themes/dept/public/logo-light-new.svg"
        alt="DEPT®"
        title="DEPT®"
      />
      <button onClick={handleLogin} className="glow-on-hover">
        LOG IN
      </button>
    </div>
  );
};
