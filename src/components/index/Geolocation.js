import React, { useEffect, useState } from 'react';
import { geolocated } from 'react-geolocated';
// ! https://www.npmjs.com/package/react-geolocated
// ! https://blog.naver.com/sayhello_shim/222341670287

function Geolocation({
  isGeolocationAvailable,
  isGeolocationEnabled,
  coords,
  setGeolocation,
}) {
  useEffect(() => {
    if (coords) {
      setGeolocation({ lat: coords.latitude, lng: coords.longitude });
    }
  }, [coords]);

  return (
    <div className="display_none">
      {!isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
      ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
      ) : coords ? (
        <div>
          latitude : {coords.latitude}, longitude : {coords.longitude}
        </div>
      ) : (
        <div>Getting the location data&hellip;</div>
      )}
    </div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  // watchPosition: true,
  userDecisionTimeout: 5000,
})(Geolocation);

// class Geolocation extends React.Component {
//   render() {
//     return (
//       <div>
//         {!this.props.isGeolocationAvailable ? (
//           <div>Your browser does not support Geolocation</div>
//         ) : !this.props.isGeolocationEnabled ? (
//           <div>Geolocation is not enabled</div>
//         ) : this.props.coords ? (
//           <div>
//             <div>latitude {this.props.coords.latitude}</div>
//             <div>longitude {this.props.coords.longitude}</div>
//           </div>
//         ) : (
//           <div>Getting the location data&hellip;</div>
//         )}
//       </div>
//     );
//   }
// }
