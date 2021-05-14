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
        <div className="PlaceDes1">
          {placeInfo.nickname} 님의 {placeInfo.createdAt}
        </div>
        <div className="PlaceDes2">장소 이름 : {placeInfo.placeName}</div>
        <div className="PlaceDes2">
          장소 설명 : {placeInfo.placeDescription}
        </div>
        <textarea placeholder="comment..." className="comment"></textarea>
        <span className="commentC">등록</span>
      </div>
    </div>
  );
}

export default Place;
