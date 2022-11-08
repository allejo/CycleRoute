import LoginButton from "../../Auth0/Buttons/login-button";
import LogoutButton from "../../Auth0/Buttons/logout-button";

function Login() {


  return (
<div>
  <h2>This is the login page</h2>
  <LoginButton/>
  <LogoutButton/>
</div>
  );
}

export default Login;