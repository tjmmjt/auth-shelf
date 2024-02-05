import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';


function EquipmentPage () {
    const dispatch = useDispatch()
    const equipment = useSelector( store => store.equipment)
    console.log('equipment', equipment);
    const equipArr = equipment.equipmentReducer?.results
  console.log('equipArr', equipArr);

    useEffect(() => {
        getEquipment()
      }, [])

    const getEquipment = () => {
        dispatch({type:'FETCH_EQUIPMENT'})
      }
    return (
      <>
        <div>This is the Equipment Page</div>
        {equipArr?.map((item) => { return (
          <button>{item.name}</button>
        )})}
        </>
    )
}

export default EquipmentPage