import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';

function ShelfPage() {

  const dispatch = useDispatch()

  const shelf = useSelector(store => store.shelf)
  const user = useSelector(store => store.user)
  // console.log('user', user);
  console.log('shelf:', shelf);
// console.log(shelf[0].user_id);
  const handleDelete = (event) => {
    const userID = event.target.closest('div').id
    console.log("USER ID:", user.id)
    console.log("USER... ID:", userID)
    const deleteItem = event.target.closest('button').id
    let deleteDescription = ''
    for (let item of shelf){
      if (item.id == deleteItem){
        deleteDescription = item.description
        console.log('in for loop', deleteDescription);
      }
 
    }

    console.log('delete item', deleteItem);
    if (user.id == userID){
      const payload = event.target.id
      // console.log('Payload:', payload)
       dispatch({type: 'DELETE_ITEM', payload: payload})
    }
    else(
      alert(`"${deleteDescription}" belongs to someone else`)
    )
    // console.log('user id:', shelf);
    // console.log('handle delete clicked');

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
          <div id={item.user_id} 
          key={i}>
            <p value="text">{item.description}</p>
            <button 
            onClick = {(event) => {handleDelete(event)}} 
            
            id={item.id}>
             Remove from shelf</button>
          </div>
        )
        })}
      <p>All of the available items can be seen here.</p>

 
    </div>
  );
}

export default ShelfPage;
