import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import Map from '../components/index/Map';
import PlaceRegister from '../components/index/PlaceRegister';
import MobilePlaceRegister from '../components/index/MobilePlaceRegister';
import PlaceList from '../components/index/PlaceList';
import axios from 'axios';

function PageUser({}) {
  const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });
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
      .post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/place`,
        {
          // .post(
          //   `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/place`,
          //   {
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
          setIsOwner(true);
          setPlaces(res.data.placeInfo);
        }
      })
      .catch((err) => console.log(err));
  };

  return match.params.account[0] !== '@' ? (
    <Redirect to="/" />
  ) : places === 'waiting' ? (
    <div className="responsive_flex_r2c rem35"></div>
  ) : (
    <div className="responsive_flex_r2c rem35">
      <Map
        geolocation={geolocation}
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
      <PlaceList isRegister={isRegister} places={places} />
    </div>
  );
}

export default PageUser;
