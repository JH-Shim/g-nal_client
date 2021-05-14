import React from 'react';
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
  return (
    <div id="Map_res">
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVER_MAP_NCPCLIENTID}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <Geolocation setGeolocation={setGeolocation} />
        <NaverMap
          // mapDivId={'naver_map'} // default: react-naver-map
          style={{
            width: '100%',
            height: '100%',
          }}
          defaultZoom={12}
          center={geoListClick.lat !== 0 ? geoListClick : geolocation}
          // defaultCenter={geolocation} // ! check center와의 차이
          onClick={(e) => {
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
                  setIsMobileRegister(true);
                }
              }
            }}
          />
          {!places ? (
            <div className="display_none"></div> // ! check
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
                  // onClick={() => {}} // ! check onClick.
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
