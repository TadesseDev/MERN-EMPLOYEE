import React, { useEffect } from 'react'
import AddUser from './pages/AddEmployee.tsx'
import ListUser from './pages/ListEmployee.tsx';
import {useDispatch,useSelector} from 'react-redux'
import { getUsers } from './Redux-Saga/ActionCreators/App.ts'

function App() {
  const dispatch = useDispatch();
  const employees = useSelector((store: Object) => store.employees);
  
  useEffect(() => { 
    dispatch(getUsers());
  }, []);
  
  return (
    <div>
      <AddUser />
      <ListUser employees={ employees}/>
    </div>
  );
}

export default App;
