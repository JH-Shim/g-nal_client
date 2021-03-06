import React from 'react';
import Footer from '../components/common/Footer';

function PageIndex({}) {
  return (
    <div>
      <div className="height1">tutorial page 준비 중</div>
      {window.innerWidth <= 700 ? (
        <Footer />
      ) : (
        <div className="display_none"></div>
      )}
    </div>
  );
}

export default PageIndex;

// import React, { useState } from 'react';
// import Map from '../components/index/Map';
// import PlaceRegister from '../components/index/PlaceRegister';
// import MobilePlaceRegister from '../components/index/MobilePlaceRegister';

// function PageIndex({}) {
//   const [geolocation, setGeolocation] = useState({ lat: 0, lng: 0 });
//   const [isMobileRegister, setIsMobileRegister] = useState(false);

//   return (
//     <div className="height1">
//       <MobilePlaceRegister
//         geolocation={geolocation}
//         isMobileRegister={isMobileRegister}
//         setIsMobileRegister={setIsMobileRegister}
//       />
//       <Map
//         geolocation={geolocation}
//         setGeolocation={setGeolocation}
//         setIsMobileRegister={setIsMobileRegister}
//       />
//       <PlaceRegister geolocation={geolocation} />
//     </div>
//   );
// }

// export default PageIndex;
