import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SpellsPage () {
    const dispatch = useDispatch()
    const spells = useSelector(store => store.spells)

    useEffect(() => {
        getSpells()
      }, [])

    const getSpells = () => {
        dispatch({type:'FETCH_SPELLS'})
      }
    return (
        <>
        <h1> Here are the spells</h1>
        <p> Spelllssssss</p>
        {spells.results?.map((spell, i) => {
            return <li id={i}>{spell.name}</li>
        })}
        <p> hi </p>
        </>

    )

}

export default SpellsPage