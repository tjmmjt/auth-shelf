import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {

  const dispatch = useDispatch()

  const shelf = useSelector(store => store.shelf)
  console.log('shelf:', shelf);

  const handleDelete = () => {
    console.log('handle delete clicked');
  }
  useEffect(() => {
    getItems()
  }, [])
  
  const getItems = () => {
    dispatch({type:'FETCH_ITEMS'})
  }

  return (
    
    <div className="container">
      <h2>Shelf</h2>
      {shelf?.map((item, i) => {
        return (
          <div key={i}>
            <span>{item.description}</span>
            <button onClick = {handleDelete} id={item.id}> Remove from shelf</button>
          </div>
        )
        })}
      <p>All of the available items can be seen here.</p>

 
    </div>
  );
}

export default ShelfPage;
