"use client";
import { Wrapper } from "@googlemaps/react-wrapper";
import React from "react";

function MapC() {
  return (
    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP!}>
      <Map latitude={38.64403004130668} longitude={34.83221456271912} />
    </Wrapper>
  );
}

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new google.maps.Map(ref.current, {
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          center: {
            lat: latitude ?? 0,
            lng: longitude ?? 0,
          },
          zoom: 11,
        })
      );
    }
  }, [ref, map, latitude, longitude]);

  return <div ref={ref} style={{ height: "100%", width: "100%" }} />;
};
export default MapC;
