import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/slice/todoSlice';
import { useState } from 'react';

const TodoAdd = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.users.user.email); // get the user's email

  const [data, setdata] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.trim().length === 0) {
      console.log('Enter new task before adding');
      setdata('');
      return;
    }
    dispatch(addTodo({
      task: data,
      userEmail: userEmail, // pass the user's email to addTodo
    }));
    setdata('');
  };

  return (
    <>
    <h2 className='w-50 mx-auto'>Todos List:</h2>
      <form className='w-50 mx-auto mb-3' onSubmit={handleSubmit}>
        <div className='mb-3 my-4'>
          <input
            type='text'
            className='form-control'
            value={data}
            onChange={(e) => setdata(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Add to List
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
