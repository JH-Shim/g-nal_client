import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import Map from '../components/user/Map';
import PlaceRegister from '../components/user/PlaceRegister';
import MobilePlaceRegister from '../components/user/MobilePlaceRegister';
import PlaceList from '../components/user/PlaceList';
import axios from 'axios';

function PageUser({}) {
  const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });
  const [geoListClick, setGeoListClick] = useState({ lat: 0, lng: 0 });
  const [isRegister, setIsRegister] = useState(false);
  const [isMobileRegister, setIsMobileRegister] = useState(false);
  const [places, setPlaces] = useState('waiting');
  const [isOwner, setIsOwner] = useState(false);

  const match = useRouteMatch(); // const { path, url, params } = useRouteMatch();
  const urlAccount = match.params.account.slice(1);

  const history = useHistory();

  useEffect(async () => {
    getPlaces();
  }, []);

  const getPlaces = () => {
    // ! check axios server
    axios
      .get(`${process.env.REACT_APP_SERVER_DOMAIN}/place`, {
        // .get(
        //   `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/place`,
        //   {
        params: { urlAccount },
        headers: { authorization: sessionStorage.getItem('accessToken') },
      })
      .then((res) => {
        if (res.data.message === 'invalid token') {
          return history.push('/accounts/signin');
        } else if (res.data.message === 'no such account') {
          alert('존재하지 않는 유저입니다.');
          return history.push('/');
        } else if (res.data.message === '!owner') {
          setPlaces(res.data.placeInfo);
        } else {
          setIsOwner(true);
          setPlaces(res.data.placeInfo);
        }
      })
      .catch((err) => console.log(err));
  };

  return match.params.account[0] !== '@' ? (
    <Redirect to="/" />
  ) : places === 'waiting' ? (
    <div id="PageUser_res"></div>
  ) : (
    <div id="PageUser_res">
      <Map
        geolocation={geolocation}
        geoListClick={geoListClick}
        setGeoListClick={setGeoListClick}
        setGeolocation={setGeolocation}
        setIsRegister={setIsRegister}
        setIsMobileRegister={setIsMobileRegister}
        places={places}
        isOwner={isOwner}
      />
      <PlaceRegister geolocation={geolocation} isRegister={isRegister} />
      <MobilePlaceRegister
        geolocation={geolocation}
        isMobileRegister={isMobileRegister}
        setIsMobileRegister={setIsMobileRegister}
      />
      <PlaceList
        geoListClick={geoListClick}
        setGeoListClick={setGeoListClick}
        isRegister={isRegister}
        places={places}
      />
    </div>
  );
}

export default PageUser;
