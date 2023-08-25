import DeleteUser from "./DeleteUser";
import {fakeUserData} from "../../api";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/UserSlice"; //this is action creator which is imported from the UserSlice.jsx file to be used by the dispatch
import DisplayUserData from "./DisplayUserData";

const UserDetails = () => {

    const dispatch = useDispatch();
  
    const addNewUser=(payload) => {
        console.log(payload);

        dispatch(addUser(payload)); //for directly calling of addUser reducer function from the UserSlice.jsx file and add the data i.e payload when Add New User button is clicked
    };
  return (
    <>
      <h1 style={{color:'black'}}>List of User Details</h1>
      <button onClick={()=>addNewUser(fakeUserData())} style={{backgroundColor:'green', color:'white'}}>Add New User</button>
      <hr />
      <DisplayUserData/>
      <DeleteUser/>
    </>
  );
};

export default UserDetails;
