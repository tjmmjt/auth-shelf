import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleSpell from '../SingleSpell/SingleSpell';


function SpellsPage () {
    const dispatch = useDispatch()
    const spells = useSelector(store => store.spells)

    const handleClick = (event) => {
        const spellUrl = event.target.closest('button').id
        console.log('here is the button that i\'m clicking', spellUrl.substr(11, 100));
        dispatch({type:'SPELL_URL', payload:spellUrl})

       
    }

    useEffect(() => {
        getSpells()
      }, [])

    const getSpells = () => {
        dispatch({type:'FETCH_SPELLS'})
      }
    return (
        <>
        <h1> Here are the spells</h1>
        {spells.spellsReducer.results?.map((spell, i) => {
            return (
            <button id={spell.url}
            onClick={(event) => {handleClick(event)}}
            >{spell.name}</button>
            )
        })}
        <SingleSpell/>
        </>

    )

}

export default SpellsPage