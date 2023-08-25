import { useSelector, useDispatch } from "react-redux"
import { removeUser } from "../redux/slice/LoginSlice";


const Home = () => {

  const{user} = useSelector((state)=>state.login);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <div className="text-center">
      <h1>{user.username}</h1>
      <p>Id: {user.id}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout} className="btn btn-primary">Logout</button>
    </div>
  )
}

export default Home