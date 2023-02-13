import { useRef, useEffect } from "react";
import myMap from "./myMap.module.css";
function MyMapComponent({ center, zoom }) {
  // : {
  //     center: google.maps.LatLngLiteral;
  //   zoom: number;
  // })
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return (
    //     <div >
    <div className={myMap.holder} ref={ref} id="map" />
    //     </div>
  );
}
export default MyMapComponent;
