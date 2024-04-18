import './Geography.css';
import MyButton from '../UI/MyButton/MyButton'
import { useState } from 'react';


export default function Geography() {
    const [allActive, setAllActive] = useState('active')
    const [legalActive, setLegalActive] = useState('')
    const [naturalActive, setNaturalActive] = useState('')

    const SetAllActive = () =>{
      setAllActive('active')
      setLegalActive('')
      setNaturalActive('')
    }
    const SetLegalActive = () =>{
      setAllActive('')
      setLegalActive('active')
      setNaturalActive('')
    }
    const SetNaturalActive = () =>{
      setAllActive('')
      setLegalActive('')
      setNaturalActive('active')
    }

    return(
      <div className="geoBlock">
        <div className="geoHead">
          география
        </div>
        <div className="geoBody">

        </div>
        <div className="geoButtons">
          <MyButton onClick={SetLegalActive} className={'geoButton ' +`${legalActive}`}>юрлица</MyButton>
          <MyButton onClick={SetNaturalActive} className={'geoButton ' +`${naturalActive}`}>физлица</MyButton>
          <MyButton onClick={SetAllActive} className={'geoButton ' +`${allActive}`}>показать всё</MyButton>
        </div>
      </div>
    )
}