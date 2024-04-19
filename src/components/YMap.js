import "./styles.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YMap() {
  return (
    <div className="App">
      <YMaps>
        <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 9,
            controls: ["zoomControl", "fullscreenControl"]
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark defaultGeometry={[55.75, 37.57]} />
        </Map>
      </YMaps>
      ;
    </div>
  );
}
