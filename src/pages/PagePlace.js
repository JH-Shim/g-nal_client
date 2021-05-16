import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Place from '../components/place/Place';
import axios from 'axios';

function PagePlace({}) {
  const [placeInfo, setPlaceInfo] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  const match = useRouteMatch();
  const placeId = match.params.placeId;
  const urlAccount = match.params.account.slice(1);

  const history = useHistory();

  useEffect(async () => {
    window.scrollTo(0, 0);
    getPlaceInfo();
  }, []);

  const getPlaceInfo = () => {
    // ! check axios server
    axios
      .get(`${process.env.REACT_APP_SERVER_DOMAIN}/place/${placeId}`, {
        // .get(
        //   `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/place/${placeId}`,
        //   {
        params: { urlAccount },
        headers: { authorization: sessionStorage.getItem('accessToken') },
      })
      .then((res) => {
        if (res.data.message === 'invalid token') {
          return history.push('/accounts/signin');
        } else if (res.data.message === 'no such place') {
          alert('존재하지 않는 기록입니다.');
          return history.push(`/@${urlAccount}`);
        } else if (res.data.message === '!owner') {
          setPlaceInfo(res.data.placeInfo);
        } else {
          setIsOwner(true);
          setPlaceInfo(res.data.placeInfo);
        }
      })
      .catch((err) => console.log(err));
  };

  return <Place placeInfo={placeInfo} isOwner={isOwner} />;
}

export default PagePlace;
