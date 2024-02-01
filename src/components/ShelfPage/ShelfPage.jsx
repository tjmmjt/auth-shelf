import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';

function ShelfPage() {

  const dispatch = useDispatch()

  const shelf = useSelector(store => store.shelf)
  console.log('shelf:', shelf);

  const handleDelete = (event) => {
    console.log('handle delete clicked');
    const payload = event.target.id
    console.log('Payload:', payload)
    // dispatch({type: 'DELETE_ITEM, payload:'})
  }
  
  useEffect(() => {
    getItems()
  }, [])
  
  const getItems = () => {
    dispatch({type:'FETCH_ITEMS'})

  }

  return (
    
    <div className="container">
      <PostItem/>
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
