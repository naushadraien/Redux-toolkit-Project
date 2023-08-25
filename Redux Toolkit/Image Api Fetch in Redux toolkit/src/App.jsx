import { useDispatch, useSelector } from "react-redux"
import { fetchImage } from "./store/slice/ImageSlice"


const App = () => {

  const dispatch = useDispatch();

  const state = useSelector((state)=>state);
  console.log(state);

  const handleClick = ()=>{
    return dispatch(fetchImage());
  }

  if(state.image.isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <button onClick={(e)=>handleClick()} >Get Image</button>
      {
        state.image.data && state.image.data.map((e)=>{
          return <img src={e.download_url} alt={e.author} height={300} width={300} key={e.id}  style={{margin: '1rem', borderRadius: '3rem'}} />
        })
      }
    </div>
  )
}

export default App