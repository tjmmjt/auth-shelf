import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function PostItem () {
    const userStore = useSelector(store => store.user)
    // console.log('userStore:', userStore);
    const [shelfItem, setShelfItem] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        // console.log('Putting item on shelf!');
        // console.log('shelfItem:', shelfItem);
        const objectExporting = {user_id: userStore.id, description: shelfItem}

        dispatch({type:'POST_ITEM', payload: objectExporting})
        dispatch({type:'FETCH_ITEMS'})
    }

    return(
        <div>
            <h2>Put an item on the shelf!</h2>
        <div>
            <input 
            value={shelfItem}
            onChange={(event) => setShelfItem(event.target.value)}
            placeholder="description"
            ></input>
            <button onClick={handleSubmit}> Place Item on Shelf</button>
        </div>
        </div>
    )
}


export default PostItem