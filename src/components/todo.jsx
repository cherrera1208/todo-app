import React, { useEffect, useState, useContext } from 'react';
import Header from './Header.jsx';
import ItemForm from './ItemForm.jsx';
import ItemList from './ItemList.jsx';
import Nav from './Nav.jsx';
import '../styles/todo.css';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  useEffect(() => {

    getIncompleteCount();
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  function getIncompleteCount() {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
  }

  return (
    <>
      <Nav />
      <Header incomplete={incomplete} />
      <div className='listBody'>
        <ItemForm list={list} setList={setList} />
        <ItemList list={list} setList={setList} />
      </div>
    </>
  );
};

export default ToDo;