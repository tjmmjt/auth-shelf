import { useDispatch, useSelector } from 'react-redux';


function SingleSpell () {
    const singleSpell = useSelector( store => store.spells.spellURL)
    console.log('singleSpell', singleSpell);

    return (
        <>
        <p>here's your spell!</p>
        <li>name: {singleSpell.name}</li>
        <li>level: {singleSpell.level}</li>
        <li>description: {singleSpell.desc}</li>
        <li>duration: {singleSpell.duration}</li>
        <li>casting time: {singleSpell.casting_time}</li>
        <li>range: {singleSpell.range}</li>
        <li> Classes Available:{singleSpell.classes?.map((spellClass) => {
            return (
                <> 
                <span>{spellClass.name}, </span>
                </>
            )
        })}</li>
        </>
    )
}

export default SingleSpell