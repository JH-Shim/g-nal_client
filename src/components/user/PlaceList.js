import React from 'react';
import PlaceListElement from './PlaceListElement';

function PlaceList({ geoListClick, setGeoListClick, isRegister, places }) {
  return (
    <div
      id="PlaceList_res"
      className={isRegister ? 'display_none scroll' : 'scroll'}
    >
      {places.length === 0 ? (
        <div className="cenMa">
          아직 그날의 공기를 기록하지 않은 유저입니다.
        </div>
      ) : (
        places.map((place) => (
          <PlaceListElement
            key={place.id}
            geoListClick={geoListClick}
            setGeoListClick={setGeoListClick}
            place={place}
          />
        ))
      )}
    </div>
  );
}

export default PlaceList;
