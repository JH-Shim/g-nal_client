import React from 'react';

function Place({ placeInfo, isOwner }) {
  return !placeInfo ? (
    <div id="Place_res"></div>
  ) : (
    <div id="Place_res">
      <div id="PlaceImgCT_res">
        <img src={placeInfo.placePhoto} id="PlaceImg_res" />
      </div>
      <div id="PlaceDes_res" className="scroll">
        <div>{placeInfo.nickname}</div>
        <div>{placeInfo.placeName}</div>
        <div>{placeInfo.placeDescription}</div>
        <div>{placeInfo.createdAt}</div>
      </div>
    </div>
  );
}

export default Place;
