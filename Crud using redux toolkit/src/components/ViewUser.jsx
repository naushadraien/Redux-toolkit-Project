import { useSelector } from "react-redux";

const ViewUser = ({id, popUp, setPopUp}) => {

    const state = useSelector((state)=>state.user.users);
    // console.log('I am view state:',state);

    const singleUser = state.filter((element)=>element.id === id);
    // console.log('I am single User', singleUser);

  return (
    <div className="d-flex justify-content-center p-2 position-fixed z-3 w-50">
      <div className="card text-center" style={{ width: "25rem" }}>
        <div className="card-body">
          <h2 className="card-title">{singleUser[0].name}</h2>
          <h3 className="card-subtitle mb-2 text-body-secondary">
            {singleUser[0].email}
          </h3>
          <h4>{singleUser[0].age}</h4>
          <h5>{singleUser[0].gender}</h5>
          <button onClick={()=>setPopUp(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
