import React, { useState } from 'react';
import Map from '../components/index/Map';
import PlaceRegister from '../components/index/PlaceRegister';
import MobilePlaceRegister from '../components/index/MobilePlaceRegister';

function PageIndex({}) {
  const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });
  const [isMobileRegister, setIsMobileRegister] = useState(false);

  return (
    <div id="PageIndex_container">
      <MobilePlaceRegister
        geolocation={geolocation}
        isMobileRegister={isMobileRegister}
        setIsMobileRegister={setIsMobileRegister}
      />
      <Map
        geolocation={geolocation}
        setGeolocation={setGeolocation}
        setIsMobileRegister={setIsMobileRegister}
      />
      <PlaceRegister geolocation={geolocation} />
    </div>
  );
}

export default PageIndex;
