import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {

  const dispatch = useDispatch()
  
  const shelf = useSelector(store => store.shelf)
  console.log('shelf:', shelf);

  const handleDelete = () => {
    console.log('handle delete clicked');
  }

  return (
    
    <div className="container">
      <h2>Shelf</h2>
      <p>{shelf.map((item, i) => {
        return (
          <Fragment key={i}>
          <li >{item}</li>
          <button onClick = {handleDelete}> Remove from shelf</button>
          </Fragment>
        )
        })}</p>
      <p>All of the available items can be seen here.</p>

 
    </div>
  );
}

export default ShelfPage;
