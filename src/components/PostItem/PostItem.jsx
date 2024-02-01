import React, { useState } from 'react';


function PostItem () {
    const [shelfItem, setShelfItem] = useState('')

    const handleSubmit = () => {
        console.log('Putting item on shelf!');
        console.log('shelfItem:', shelfItem);
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