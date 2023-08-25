import { useDispatch } from "react-redux"
import { removeTodo } from "../redux/slice/todoSlice";


const Item = ({id, name}) => {
    const dispatch = useDispatch();

    const handleDelete=()=>{
        dispatch(removeTodo({
            id: id
        }))
    };

    

  return (
    <div className="w-50 mx-auto py-2 d-flex flex-row ">
    <li className="list-group-item mb-2 form-control mx-4">{name}</li>
    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
    </div>
  )
}

export default Item;