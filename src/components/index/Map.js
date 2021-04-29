import React from 'react';
// import { useHistory } from 'react-router-dom';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
// import Geolocation from './Geolocation';

function Map({}) {
  // const history = useHistory();

  return (
    <div className="flex70">
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVER_MAP_NCPCLIENTID}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMap
          // mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
          style={{
            width: '100%',
            height: '100%',
          }}
          defaultCenter={{ lat: 37.486592, lng: 126.943232 }}
          defaultZoom={15}
        />
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

export default Map;
