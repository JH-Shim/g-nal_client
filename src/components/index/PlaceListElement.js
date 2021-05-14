import React from 'react';

function PlaceListElement({ place }) {
  return (
    // <span>123123123123123123</span> // ! check
    <div key={place.id} className="PlaceListElement">
      <img src={place.placePhoto} className="PLEimg flex10" />
      <div className="PLEdiv">
        <div>{place.createdAt}</div>
        <div>{place.placeName}</div>
        <div className="absRB">자세히 보기</div>
      </div>
    </div>
  );
}

export default PlaceListElement;
