import './Geography.css';
import MyButton from '../UI/my_button/MyButton'
import { useState } from 'react';
import YMap from '../y_maps/YMap';
import GetInitCoordinates from '../../init_data/initCoordinates';


export default function Geography() {
    const [allActive, setAllActive] = useState('active')
    const [legalActive, setLegalActive] = useState('')
    const [naturalActive, setNaturalActive] = useState('')
    const [zoom, setZoom] = useState(10);

    const initCoordinates = GetInitCoordinates();
    const [onMapCoordinates, setOnmapCoordinates] = useState(initCoordinates)

    const SetAllActive = () =>{
      setOnmapCoordinates(initCoordinates)
      setAllActive('active')
      setLegalActive('')
      setNaturalActive('')
    }
    const SetLegalActive = () =>{
      setOnmapCoordinates(initCoordinates.filter(initCoordinates => initCoordinates.type === "legal"))
      setAllActive('')
      setLegalActive('active')
      setNaturalActive('')
    }
    const SetNaturalActive = () =>{
      setOnmapCoordinates(initCoordinates.filter(initCoordinates => initCoordinates.type === "natural"))
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
          <YMap zoom={zoom} coordinates={onMapCoordinates}/>
        </div>
        <div className="geoButtons">
          <MyButton onClick={SetLegalActive} className={'geoButton ' +`${legalActive}`}>юрлица</MyButton>
          <MyButton onClick={SetNaturalActive} className={'geoButton ' +`${naturalActive}`}>физлица</MyButton>
          <MyButton onClick={SetAllActive} className={'geoButton ' +`${allActive}`}>показать всё</MyButton>
        </div>
        <div className='zoomButtons'>
          <MyButton onClick={() => setZoom((zoom) => (zoom += 1))} className={'zoomButton'}>+</MyButton>
          <MyButton onClick={() => setZoom((zoom) => (zoom -= 1))} className={'zoomButton'}>-</MyButton>
        </div>
      </div>
    )
}