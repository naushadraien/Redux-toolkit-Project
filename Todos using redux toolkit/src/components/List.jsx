import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { removeAllTodos } from "../redux/slice/todoSlice";

const List = () => {
  const dispatch = useDispatch();

  // Get the logged-in user's information from the state
  const user = useSelector((state) => state.users.user);

  // Get the posts for the logged-in user
  const posts = useSelector((state) => state.posts);

  // Filter the posts to get only the ones for the logged-in user
  const todos = posts.filter((post) => post.userEmail === user.email);
  // console.log(todos);

  const handleAllDelete = () => {
    dispatch(removeAllTodos(user.email));
  };
  // console.log(user.email)

  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => {
          return <Item id={todo.id} name={todo.name} key={todo.id} />;
        })}
        {/* this && for showing button only if the state has length of more than 0 */}
        {todos.length> 0 && <button
          onClick={handleAllDelete}
          className="btn btn-danger  w-50 mx-auto"
        >
          Delete All List
        </button> }
      </ul>
    </>
  );
};

export default List;
