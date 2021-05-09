import React from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { handleInputValue, handleFileUpload } from '../../modules/common';

// axios.defaults.headers.common['authorization'] = sessionStorage.getItem(
//   'accessToken', // ! check 위치
// );

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      placeName: '',
      placeDescription: '',
    };
  }

  handlePlaceSubmit = () => {
    const { file, placeName, placeDescription } = this.state;

    if (!placeName || !placeDescription) {
      alert('모든 항목을 채워주세요.');
      return;
    } else if (!file) {
      alert('사진을 함께 업로드해 주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('placeName', placeName);
    formData.append('placeDescription', placeDescription);
    formData.append('lat', this.props.geolocation.lat);
    formData.append('lng', this.props.geolocation.lng);

    // ! check axios local
    axios
      // .post(
      //   `${process.env.REACT_APP_SERVER_DOMAIN}/image/place`,
      .post(
        `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/image/place`,
        formData,
        { headers: { authorization: sessionStorage.getItem('accessToken') } },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="flex30">
        <input type="file" onChange={handleFileUpload.bind(this)} />
        <input onChange={handleInputValue.call(this, 'placeName')}></input>
        <input
          onChange={handleInputValue.call(this, 'placeDescription')}
        ></input>
        <div onClick={this.handlePlaceSubmit}>submit</div>
      </div>
    );
  }
}

export default List;

// return (
//   <div className="flex30">
//     {!places ? (
//       <div>List</div>
//     ) : (
//       <div>
//         {places.map((place, idx) => (
//           <PlaceElement key={idx} place={place} />
//         ))}
//       </div>
//     )}
//   </div>
// );
