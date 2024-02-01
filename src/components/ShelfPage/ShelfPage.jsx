import React from 'react';
import { useSelector } from 'react-redux';

function ShelfPage() {

  const shelf = useSelector(store => store.shelf)
  console.log('shelf:', shelf);

  return (
    
    <div className="container">
      <h2>Shelf</h2>
      <p>{shelf.map((item) => {
        return (
          <>{item}</>
        )
        })}</p>
      <p>All of the available items can be seen here.</p>

 
    </div>
  );
}

export default ShelfPage;
