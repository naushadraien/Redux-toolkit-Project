import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import UpdateUser from "./components/updateUser";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Form />} />
            <Route path="/read" exact element={<Read />} />
            <Route path="/update/:id" exact element={<UpdateUser />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
