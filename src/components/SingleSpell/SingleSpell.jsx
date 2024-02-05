import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function SingleSpell () {
    const spell = useSelector( store => store.spells.spellURL)
    console.log('spell', spell);

    return (
        <>
        <p>here's your spell!</p>
        <li className = "spell-card">
            <hgroup><h4>{spell.name}</h4> 
            <small>
            {spell.level > 0 && `Level ${spell.level} `}
            {spell.school?.name}
            {spell.level === 0 && " cantrip"}
            </small>
            </hgroup>
            <div className='stats'>
                <p>
                    <strong>casting time </strong>
                {spell.casting_time}
                </p>
                <p>
          <strong>Range </strong>
          {spell.range}
        </p>
        <p>
          <strong>Components</strong>
          {spell.components?.join(", ")}
        </p>
        <p>
          <strong>Duration </strong>
          {spell.duration}
        </p>
            </div>
            <div> <b>Description:</b> {spell.desc}</div>
        {/* <li>level: </li>
        <li>description: {spell.desc}</li>
        <li>duration: {spell.duration}</li>
        <li> Classes Available:{spell.classes?.map((spellClass) => {
            return (
                <> 
                <span>{spellClass.name}, </span>
                </>
            )
        })}</li> */}
        </li>
        </>
    )
}

export default SingleSpell