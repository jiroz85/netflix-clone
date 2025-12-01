import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Sign In</h1>

        <form className="login-form">
          <input
            type="text"
            className="login-input"
            placeholder="Email or mobile number"
          />

          <input
            type="password"
            className="login-input"
            placeholder="Password"
          />

          <button className="login-button" type="submit">
            Sign In
          </button>
        </form>

        <div className="login-options">
          <div className="login-remember">
            <input type="checkbox" id="remember" className="login-checkbox" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <a href="#" className="login-forgot">
            Forgot password?
          </a>
        </div>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <button className="login-code-button">Use a Sign-In Code</button>

        <p className="login-signup">
          New to Netflix? <a href="#">Sign up now.</a>
        </p>

        <p className="login-recaptcha">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#">Learn more.</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
