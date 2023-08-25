
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice/userSlice';

const Logout = () => {

    const user = useSelector((state)=>state.users.user);
    const dispatch = useDispatch();

    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(removeUser());
    }


  return (
    <div className='text-center mt-4'>
    {user && <h2>{user.email}</h2>}
    <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
    </div>
  )
}

export default Logout