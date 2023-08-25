import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../redux/slice/UserSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getUsers = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value }); //this is for targetting the name component of the form that is assigned as value
    // console.log(users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(users));
    navigate("/read");
    // console.log(users);
  };

  return (
    <>
      <h2 className="text-center my-4">Make a Post:</h2>
      <form className="w-50 mx-auto my-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="name"
            onChange={getUsers}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={getUsers}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="age"
            onChange={getUsers}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Male"
            name="gender"
            onChange={getUsers}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Female"
            name="gender"
            onChange={getUsers}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
