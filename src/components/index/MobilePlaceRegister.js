import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { handleInputValue, handleFileUpload } from '../../modules/common';

class MobilePlaceRegister extends React.Component {
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
      const base64 = reader.result;
      if (base64) {
        this.setState({ imgBase64: base64.toString() });
      }
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      this.setState({ file: e.target.files[0] });
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
        id={
          this.props.isMobileRegister
            ? 'MobileRegister_open'
            : 'MobileRegister_closed'
        }
        className="MobilePlaceRegister_res"
      >
        <div className="rem5 container_grid center_grid sticky_nav">
          <span
            className="absolute_nav_l"
            onClick={() => this.props.setIsMobileRegister(false)}
          >
            ✕
          </span>
        </div>
        <div className="rem35 container_flex_column container_padding_1rem">
          <div
            id="imageDiv_container"
            onClick={() => {
              let imageInputMobile = document.querySelector(
                '#imageInputMobile',
              );
              imageInputMobile.click();
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
            id="imageInputMobile"
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
            className="flex20 container_grid center_grid bg_212 pointer"
            onClick={this.handlePlaceSubmit}
          >
            기록
          </div>
        </div>
      </div>
    );
  }
}

// function MobilePlaceRegister({ isMobileRegister, setIsMobileRegister }) {
//   // const history = useHistory();

//   return (
//     <div
//       id={isMobileRegister ? 'MobileRegister_open' : 'MobileRegister_closed'}
//     >
//       <div className="rem5 container_grid center_grid sticky_nav">
//         <span
//           className="absolute_nav_l"
//           onClick={() => setIsMobileRegister(false)}
//         >
//           ✕
//         </span>
//       </div>
//       <div className="rem35"></div>
//     </div>
//   );
// }

export default MobilePlaceRegister;
