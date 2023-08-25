import { useDispatch } from "react-redux"
import { clearAllUsers } from "../../actions/ClearAllUser";

const DeleteUser = () => {

  const dispatch = useDispatch();

  const deleteAllUser = (payload) => {
    dispatch(payload)
  }

  return (
    <>
    <hr />
    <button onClick={()=> deleteAllUser(clearAllUsers())} style={{backgroundColor:'red', color:'white'}}>Delete User</button>
    </>
  )
}

export default DeleteUser