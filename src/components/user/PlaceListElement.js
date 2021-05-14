import React from 'react';

function PlaceListElement({ setGeoListClick, place }) {
  return (
    // <span>123123123123123123</span> // ! check
    <div
      key={place.id}
      className="PlaceListElement"
      onClick={() => {
        setGeoListClick({ lat: place.lat, lng: place.lng });
      }}
    >
      <img src={place.placePhoto} className="PLEimg flex10" />
      <div className="PLEdiv">
        <div>{place.createdAt}</div>
        <div>{place.placeName}</div>
      </div>
    </div>
  );
}

export default PlaceListElement;
