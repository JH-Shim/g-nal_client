import React from 'react';
import PlaceListElement from './PlaceListElement';

function PlaceList({ isRegister, places }) {
  return isRegister ? (
    <div className="display_none"></div>
  ) : (
    <div className="flex30 scroll">
      {!places ? (
        <div>아직 그날의 공기를 기록하지 않은 유저입니다.</div>
      ) : (
        places.map((place) => <PlaceListElement key={place.id} place={place} />)
      )}
    </div>
  );
}

export default PlaceList;
