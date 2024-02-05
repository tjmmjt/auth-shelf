import { useDispatch, useSelector } from 'react-redux';


const FilterButton = () => {

    const dispatch = useDispatch()
    const filteredStore = useSelector( store => store.spells.filterSpells)
    console.log('filtered store', filteredStore);



    const handleChange = (event) => {

        let filteringValue = event.target.value
        dispatch({type:'SPELL_FILTER', payload: filteringValue})

      

        console.log('filter changed', filteringValue);
    }

    return (
        <div>
            <label>
                Filter Spells
                <select value="filteredLevel" onChange={(event) => { handleChange(event) }}>

                    <option value="?level=0&level=1&level=2&level=3&level=4&level=5&level=6&level=7&level=7&level=9">No Filter</option>


                    <option value="?level=0">Level 0</option>

                    <option value="?level=1">Level 1</option>

                    <option value="?level=2">Level 2</option>

                    <option value="?level=3">Level 3</option>

                    <option value="?level=4">Level 4</option>

                    <option value="?level=5">Level 5</option>

                    <option value="?level=6">Level 6</option>

                    <option value="?level=7">Level 7</option>

                    <option value="?level=8">Level 8</option>

                    <option value="?level=9">Level 9</option>

                </select>
            </label>
            <a id="url" href="?action=IT">IT</a>

        </div>
    )
}

export default FilterButton