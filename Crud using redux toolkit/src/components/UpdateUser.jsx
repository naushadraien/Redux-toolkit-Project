import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../redux/slice/UserSlice";

const UpdateUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { users, isLoading } = useSelector((state) => state.user);

  const [updateData, setUpdateData] = useState('');

  useEffect((id) => {
    if (id) {
      const singleUser = users.filter((element) => element.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [id]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  // console.log(updateData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2 className="text-center my-4">Edit a Post:</h2>
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
            value={updateData && updateData.name}
            onChange={newData}
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
            value={updateData && updateData.email}
            onChange={newData}
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
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Male"
            name="gender"
            onChange={newData}
            checked={updateData && updateData.gender == "Male"}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="Female"
            name="gender"
            onChange={newData}
            checked={updateData && updateData.gender == "Female"}
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

export default UpdateUser;
