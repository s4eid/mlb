"use client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from "./MyMapComponent";
const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <p>Loading...</p>;
    case Status.FAILURE:
      return <p>Error</p>;
    case Status.SUCCESS:
      return <MyMapComponent />;
  }
};

function MyMap() {
  return (
    // <div style={{ position: "relative", width: "500px", height: "500px" }}>
    <Wrapper render={render} apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP}>
      <MyMapComponent
        center={{
          // latitude: 38.71124148614522,
          // longitude: 34.834870182649674,
          lat: 38.71124148614522,
          lng: 34.834870182649674,
        }}
        zoom={11}
      />
    </Wrapper>
    // </div>
  );
}
export default MyMap;
