import './YMap.css'
import { YMaps, Map, Placemark, FullscreenControl } from "@pbe/react-yandex-maps";
import logo from '../../media/images/logo1.png'

export default function YMap(props) {
  const mapState = { center: [55.76, 37.64], zoom: props.zoom};

  return (
    <div className="yMap">
      <YMaps
        
      >
        <Map 
          state={mapState}
          width={'100%'}
          height={'100%'}
        >
          {
            props.coordinates.map((index) => 
            <Placemark 
            key={Math.random()}
            geometry={index.coordinate}
            properties={{
              hintContent: logo,
              balloonContent: logo
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: logo,
              iconImageSize: [30, 40],
              iconImageOffset: [-3, -42]
            }}
          />  
          )}


        </Map>
      </YMaps>
    </div>
  );
}
