import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import Geolocation from './Geolocation';

function Map({}) {
  const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });
  const [places, setPlaces] = useState(null);

  // const history = useHistory();

  return (
    <div className="flex70">
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
          defaultZoom={15}
          center={geolocation}
          // defaultCenter={geolocation} // ! check center와의 차이
          onClick={(e) => {
            // ! console.log(e);
            // ! console.log(e.coord);
            setGeolocation({ lat: e.coord._lat, lng: e.coord._lng });
          }}
        >
          <Marker position={geolocation} animation={1} onClick={() => {}} />
          {!places ? (
            <div className="display_none"></div>
          ) : (
            <div>
              {places.map((place) => (
                <Marker
                  key={place.id}
                  position={{
                    lat: place.lat,
                    lng: place.lng,
                  }}
                  // onClick={() => {}} // ! check onClick. 위에 Marker onClick도 신경쓰길
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
