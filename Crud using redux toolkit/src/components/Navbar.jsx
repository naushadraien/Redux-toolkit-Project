
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { searchUser } from "../redux/slice/UserSlice";

const Navbar = () => {

    const dispatch = useDispatch();

    const state = useSelector((state)=>state.user.users);
    // console.log(state);

    const [searchData, setSearchData] = useState('');

    useEffect(() => {
      dispatch(searchUser(searchData));
    // console.log('search js',searchData);
    }, [searchData]);

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Crud in RTK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Make Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/read">All Posts ({state.length}) </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchData} onChange={(e)=>setSearchData(e.target.value)} />
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar