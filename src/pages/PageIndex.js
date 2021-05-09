import React, { useState } from 'react';
import Map from '../components/index/Map';
import List from '../components/index/List';

function PageIndex({}) {
  const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });

  return (
    <div className="rem35 responsive_flex_r2c">
      <Map geolocation={geolocation} setGeolocation={setGeolocation} />
      <List geolocation={geolocation} />
    </div>
  );
}

export default PageIndex;
