import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { loginDetail } from "../redux/slice/LoginSlice";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  // const navigate = useNavigate();

  const handleLogin = (e) => {
      e.preventDefault();
      dispatch(loginDetail({email, password}));
    // navigate('/logout');
  }

  console.log(email, password);

  return (
    <div>
        <h2 className="mb-4 text-center my-2" >Please, Put Your Credentials:</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto" >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
