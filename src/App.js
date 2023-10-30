import React, { useCallback, useMemo, useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';
import './App.css';

function App() {
  const [listTitle, setListTitle] = useState('Descending Order');
  // const changeTitleHandler = useCallback(()=>{
  //   setListTitle("New Title");
  // },[]);

  const [desOrder, setDesOrder] = useState(true);
  const [btnTitle, setBtnTitle] = useState('Change To Ascending Order');
  const changeBtnTitleHandler = useCallback(()=>{
    if(desOrder){
      setBtnTitle('Change To Descending Order');
      setDesOrder(false);
      setListTitle('Ascending Order');
    }else{
      setBtnTitle('Change To Ascending Order');
      setDesOrder(true);
      setListTitle('Descending Order');
    } 
  },[desOrder]);

  const listItems = useMemo(()=>[5,2,6,1,8,3], []);
  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} desOrder={desOrder} />
      {/* <Button onClick={changeTitleHandler}>Change List Title</Button> */}
      <Button onClick={changeBtnTitleHandler}>{btnTitle}</Button>
    </div>
  );
}

export default App;
