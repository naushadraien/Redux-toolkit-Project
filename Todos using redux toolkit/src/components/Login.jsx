import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/userSlice";


const Login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(addUser({
            email,
            password,
            loggedIn: true,
        }));
        // console.log(email, password);
    };
  return (
    <>
    <form onSubmit={handleLogin} className="w-50 mx-auto py-5" >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </>
  )
}

export default Login