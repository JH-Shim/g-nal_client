import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import Geolocation from './Geolocation';

function Map({
  geolocation,
  setGeolocation,
  geoListClick,
  setGeoListClick,
  setIsRegister,
  setIsMobileRegister,
  places,
  isOwner,
}) {
  const history = useHistory();
  const match = useRouteMatch();
  const urlAccount = match.params.account;

  const [relocate, setRelocate] = useState(false);

  useEffect(() => setRelocate(true), [relocate]);

  return (
    <div id="Map_res">
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVER_MAP_NCPCLIENTID}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <div
          id="GeoEle1_res"
          className="GeoEle_res"
          onClick={() => {
            setGeoListClick({ lat: 0, lng: 0 });
            setRelocate(false);
          }}
        >
          현재 위치
        </div>

        {isOwner ? (
          <div
            id="GeoEle2_res"
            className="GeoEle_res"
            onClick={() => {
              if (window.innerWidth > 700) {
                setIsRegister(true);
              } else {
                window.scrollTo(0, 0);
                setIsMobileRegister(true);
              }
            }}
          >
            기록하기
          </div>
        ) : (
          <div className="display_none"></div>
        )}

        {relocate ? (
          <Geolocation setGeolocation={setGeolocation} />
        ) : (
          <div className="display_none"></div>
        )}

        <NaverMap
          style={{
            width: '100%',
            height: '100%',
          }}
          defaultZoom={15}
          center={geoListClick.lat !== 0 ? geoListClick : geolocation}
          onClick={(e) => {
            // ! check 반경 1km 안으로 제한
            // ! console.log(e);
            // ! console.log(e.coord);
            setGeolocation({ lat: e.coord._lat, lng: e.coord._lng });
            setGeoListClick({ lat: 0, lng: 0 });
          }}
        >
          <Marker
            position={geolocation}
            animation={1}
            onClick={() => {
              if (isOwner) {
                if (window.innerWidth > 700) {
                  setIsRegister(true);
                } else {
                  window.scrollTo(0, 0);
                  setIsMobileRegister(true);
                }
              }
            }}
          />
          {!places ? (
            <div className="display_none"></div>
          ) : (
            <div>
              {places.map((place) => (
                <Marker
                  animation={geoListClick.lat === place.lat ? 1 : 0}
                  key={place.id}
                  position={{
                    lat: place.lat,
                    lng: place.lng,
                  }}
                  onClick={() => {
                    history.push(`/${urlAccount}/${place.id}`);
                  }}
                />
              ))}
            </div>
          )}
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

export default Map;
