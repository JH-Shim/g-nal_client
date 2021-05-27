import React from 'react';
import PlaceComment from './PlaceComment';
import { handleInputValue, handleKeyDown } from '../../modules/common';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: '',
    };
  }
  // ! check this.props.isOwner

  handleSubmit = () => {
    const { newComment } = this.state;
    if (!newComment) {
      alert('comment를 작성해주세요.');
      return;
    }

    const placeId = this.props.match.params.placeId;

    // ! check axios local
    axios
      // .post(`${process.env.REACT_APP_SERVER_DOMAIN}/place/comment/${placeId}`, {
      .post(
        `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/place/comment/${placeId}`,
        {
          newComment,
        },
        {
          headers: { authorization: sessionStorage.getItem('accessToken') },
        },
      )
      .then((res) => {
        if (res.data.message === 'comment added') {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return !this.props.placeInfo ? (
      <div id="Place_res"></div>
    ) : (
      <div id="Place_res">
        <div id="PlaceImgCT_res">
          <img src={this.props.placeInfo.placePhoto} id="PlaceImg_res" />
        </div>
        {/* <div id="PlaceDes_res"> check scroll */}
        <div id="PlaceDes_res" className="scroll">
          <div className="PlaceDes1">
            {this.props.placeInfo.nickname} 님의{' '}
            {this.props.placeInfo.createdAt}
          </div>
          <div className="PlaceDes2">
            장소 이름 : {this.props.placeInfo.placeName}
          </div>
          <div className="PlaceDes2">
            장소 설명 : {this.props.placeInfo.placeDescription}
          </div>
          <textarea
            placeholder="comment..."
            id="commentT"
            onChange={handleInputValue.call(this, 'newComment')}
          ></textarea>
          <div
            id="commentC"
            onClick={this.handleSubmit}
            tabIndex="0"
            onKeyDown={handleKeyDown('Enter', this.handleSubmit)}
          >
            등록
          </div>
          <PlaceComment comments={this.props.placeInfo.comments} />
        </div>
      </div>
    );
  }
}

export default withRouter(Place);
