import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

function PlaceListElement({ geoListClick, setGeoListClick, place }) {
  const history = useHistory();
  const match = useRouteMatch();
  const urlAccount = match.params.account;

  return (
    <div
      key={place.id}
      className="PlaceListElement"
      onClick={() => {
        if (geoListClick.lat === place.lat && geoListClick.lng === place.lng) {
          history.push(`/${urlAccount}/${place.id}`);
        }
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
