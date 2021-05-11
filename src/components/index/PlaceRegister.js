import React from 'react';
import axios from 'axios';
import { handleInputValue, handleFileUpload } from '../../modules/common';

// axios.defaults.headers.common['authorization'] = sessionStorage.getItem(
//   'accessToken', // ! check 위치
// );

class PlaceRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imgBase64: '',
      placeName: '',
      placeDescription: '',
    };
  }

  handleChangeFile = (e) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        this.setState({ imgBase64: base64.toString() }); // 파일 base64 상태 업데이트
      }
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      this.setState({ file: e.target.files[0] }); // 파일 상태 업데이트
    }
  };

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

    // ! check axios server
    axios
      .post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/image/place`,
        // .post(
        //   `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/image/place`,
        formData,
        { headers: { authorization: sessionStorage.getItem('accessToken') } },
      )
      .then((res) => {
        if (res.data.message === 'place uploaded') {
          alert('그날의 공기를 기록하였습니다.');
        } else {
          alert('기록되지 않았습니다.');
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div
        id="PlaceRegister_res"
        className="container_flex_column container_padding_1rem"
      >
        <div
          id="imageDiv_container"
          onClick={() => {
            let imageInput = document.querySelector('#imageInput');
            imageInput.click();
          }}
        >
          {this.state.imgBase64 ? (
            <img id="imageDiv" src={this.state.imgBase64} />
          ) : (
            <div id="imageDiv">클릭하여 사진등록</div>
          )}
        </div>
        <input
          className="display_none"
          id="imageInput"
          type="file"
          accept="image/*"
          // onChange={handleFileUpload.bind(this)}
          onChange={this.handleChangeFile}
        />
        <textarea
          className="flex10"
          placeholder="장소 이름"
          onChange={handleInputValue.call(this, 'placeName')}
        />
        <textarea
          className="flex20"
          placeholder="장소 설명"
          onChange={handleInputValue.call(this, 'placeDescription')}
        />
        <div
          className="flex20 container_grid center_grid bg_212"
          onClick={this.handlePlaceSubmit}
        >
          기록
        </div>
      </div>
    );
  }
}

export default PlaceRegister;

// ! sample code
// return (
//   <div>
//     {!places ? (
//       <div>PlaceRegister</div>
//     ) : (
//       <div>
//         {places.map((place, idx) => (
//           <PlaceElement key={idx} place={place} />
//         ))}
//       </div>
//     )}
//   </div>
// );