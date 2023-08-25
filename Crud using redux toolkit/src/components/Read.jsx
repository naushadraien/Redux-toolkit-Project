import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { deleteUser, getAllData } from "../redux/slice/UserSlice";
import ViewUser from "./ViewUser";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, isLoading, searchData } = useSelector((state) => state.user); //extracting users and isLoading from the user store
//   console.log(users);

const [userId, setUserId] = useState();

const [radioData, setRadioData] = useState('');

const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    dispatch(getAllData());
    // console.log(dispatch)
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
  <>
  {popUp && <ViewUser id={userId} popUp={popUp} setPopUp={setPopUp} />}
  <h2 className="text-center mt-4">All posts:</h2>
  <div className="d-flex w-50 mx-auto justify-content-center p-2">
  <div className="form-check">
  <input className="form-check-input" type="radio" value = '' name="gender" checked={radioData === ''} onChange={(e)=>setRadioData(e.target.value)} />
  <label className="form-check-label mx-1">
    All
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" value='Male' name="gender" checked={radioData === 'Male'} onChange={(e)=>setRadioData(e.target.value)} />
  <label className="form-check-label mx-1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" value='Female' name="gender" checked={radioData === 'Female'} onChange={(e)=>setRadioData(e.target.value)} />
  <label className="form-check-label mx-1">
    Female
  </label>
</div>
</div>
    {users && 
      users.filter((element)=>{
        if(searchData.length === 0){
          return element; //If searchData is an empty string, it returns all the elements of the users array.
        }else{
          return element.name.toLowerCase().includes(searchData.toLowerCase()); //If searchData has a value, it returns only those elements whose name property includes the search string. The comparison is case-insensitive because both the name and searchData strings are converted to lowercase using the toLowerCase() method before the comparison.
        }
      }).filter((element)=>{
        if(radioData === 'Male'){
          return element.gender === radioData;
        } else if(radioData === 'Female'){
          return element.gender === radioData;
        }
        else{
          return element;
        }
      })
      .map((element)=><div className="d-flex justify-content-center p-2" key={element.id}>
      <div className="card text-center" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">{element.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {element.email}
          </h6>
          <p className="card-text">
            {element.gender}
          </p>
          <button className="card-link btn btn-primary mt-1" onClick={()=>[setUserId(element.id), setPopUp(true)]}>
            View
          </button>
          <Link to={`/update/${element.id}`} className="card-link">
            Edit
          </Link>
          <Link onClick={()=>dispatch(deleteUser(element.id))} className="card-link">
            Remove
          </Link>
        </div>
      </div>
    </div>)}
    </>
  );
};

export default Read;
