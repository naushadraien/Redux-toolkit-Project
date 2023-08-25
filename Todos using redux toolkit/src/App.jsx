import List from "./components/List";
import Login from "./components/Login";
import TodoAdd from "./components/TodoAdd";
import Logout from "./components/Logout";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.users.user);
  // const isLoggedIn = !!user;
  // console.log(user);

  return (
    <>
        {user ? (
          <>
            <TodoAdd /> 
            <List />
            <Logout /> 
          </>
        ) : 
        <Login/>}
    </>
  );
};

export default App;
