import React, { useEffect, useState } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import Map from '../components/index/Map';
import PlaceRegister from '../components/index/PlaceRegister';
import MobilePlaceRegister from '../components/index/MobilePlaceRegister';
import axios from 'axios';

function PageUser({}) {
  const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });
  const [isMobileRegister, setIsMobileRegister] = useState(false);
  const [places, setPlaces] = useState(null);

  const match = useRouteMatch(); // const { path, url, params } = useRouteMatch();
  const params = match.params.account;
  const account = params.slice(1);

  useEffect(() => {
    console.log(account);
  }, []);

  return params[0] !== '@' ? (
    <Redirect to="/" />
  ) : (
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

export default PageUser;
