import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function PostItem () {
    const [shelfItem, setShelfItem] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        console.log('Putting item on shelf!');
        console.log('shelfItem:', shelfItem);

        dispatch({type:'POST_ITEM', payload: shelfItem})
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