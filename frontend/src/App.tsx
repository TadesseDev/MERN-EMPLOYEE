import React, { useEffect } from 'react'
import {StoreType} from './Global/types'
import AddUser from './pages/AddEmployee'
import ListUser from './pages/ListEmployee';
import {useDispatch,useSelector} from 'react-redux'
import { getUsers } from './Redux-Saga/ActionCreators/App'

const App: React.FC=()=>{
  const dispatch = useDispatch();
  const employees = useSelector((store: StoreType) => store.employees);
  
  useEffect(() => { 
    console.log("fetching data");
    dispatch(getUsers());
  }, [dispatch]);
  
  return (
    <div>
      <AddUser />
      <ListUser employees={ employees}/>
    </div>
  );
}

export default App;
