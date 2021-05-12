import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import Map from '../components/index/Map';
import PlaceRegister from '../components/index/PlaceRegister';
import MobilePlaceRegister from '../components/index/MobilePlaceRegister';
import axios from 'axios';

function PageUser({}) {
  const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });
  const [isMobileRegister, setIsMobileRegister] = useState(false);
  const [places, setPlaces] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  const match = useRouteMatch(); // const { path, url, params } = useRouteMatch();
  const urlAccount = match.params.account.slice(1);

  const history = useHistory();

  useEffect(async () => {
    getPlaces();
  }, []);

  const getPlaces = () => {
    // ! check axios local
    axios
      // .post(`${process.env.REACT_APP_SERVER_DOMAIN}/place`, {
      .post(
        `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/place`,
        {
          urlAccount,
        },
        { headers: { authorization: sessionStorage.getItem('accessToken') } },
      )
      .then((res) => {
        if (res.data.message === 'invalid token') {
          return history.push('/'); // ! check error message
        } else if (res.data.message === 'no such account') {
          alert('존재하지 않는 유저입니다.');
          return history.push('/'); // ! check error message
        } else if (res.data.message === '!owner') {
          setPlaces(res.data.placeInfo);
        } else {
          setPlaces(res.data.placeInfo);
          setIsOwner(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return match.params.account[0] !== '@' ? (
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
        places={places}
      />
      <PlaceRegister geolocation={geolocation} />
    </div>
  );
}

export default PageUser;
