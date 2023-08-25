import { useSelector } from "react-redux" //this is used for displaying the userData
import { removeUser } from "../../store/slices/UserSlice"
import { useDispatch } from "react-redux"

const DisplayUserData = () => {

  const dispatch = useDispatch();

  const deleteUser=(id)=>{
    dispatch(id);
  }

    const data = useSelector((state)=>{ //here state is the complete app state i.e store's data and have the state for whole components of our app which uses such states
        return state.users
    })
    console.log(data);

  return (
    <>
    {data.map((user,id)=>{
       return <div key={id} style={{color:'black', fontWeight:'600'}}> {user} <button onClick={()=>deleteUser(removeUser(id))} style={{marginLeft:'3rem', marginBottom:'1rem', backgroundColor:'red', color:'white'}} >Delete</button> </div>
    })}
    </>
  )
}

export default DisplayUserData