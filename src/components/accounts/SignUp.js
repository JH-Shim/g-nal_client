import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  reverseBoolean,
  handleInputValue,
  handleInputValueSHA256,
  handleKeyDown,
} from '../../modules/common';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      nickname: '',
      password: '',
      errorMessage: '', // ! check
      isPasswordShow: false,
    };
  }

  handleSignUp = () => {
    const { userId, nickname, password } = this.state;

    if (!userId || !nickname || !password) {
      alert('모든 항목을 채워주세요.'); //! check 유효성 검사 추가
      return;
    }

    // ! check axios server
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/accounts/signup`, {
        // .post(
        //   `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/accounts/signup`,
        //   {
        userId: userId,
        nickname: nickname,
        password: password,
      })
      .then((res) => {
        if (res.data.message !== 'sign up succeeded') {
          alert(res.data.message);
        } else {
          this.props.history.push('/accounts/signin'); // ! check
          alert('가입되었습니다. 로그인을 해주세요.');
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="rem35 container_grid center_grid bg_contrast">
        <div className="center_div_res container_flex_column">
          <div className="flex10 container_padding">
            <input
              className="hw100"
              placeholder="아이디"
              onChange={handleInputValue.call(this, 'userId')}
              onKeyDown={handleKeyDown('Enter', this.handleSignUp)}
            ></input>
          </div>
          <div className="flex10 container_padding">
            <input
              className="hw100"
              placeholder="닉네임"
              onChange={handleInputValue.call(this, 'nickname')}
              onKeyDown={handleKeyDown('Enter', this.handleSignUp)}
            ></input>
          </div>
          <div className="flex10 container_padding relative">
            <input
              className="hw100"
              placeholder="비밀번호"
              type={this.state.isPasswordShow ? 'text' : 'password'}
              onChange={handleInputValueSHA256.call(this, 'password')}
              onKeyDown={handleKeyDown('Enter', this.handleSignUp)}
            ></input>
            <span
              className={
                this.state.isPasswordShow
                  ? 'signup_password display_none'
                  : 'signup_password'
              }
              onClick={reverseBoolean.bind(this, 'isPasswordShow')}
              tabIndex="0"
              onKeyDown={handleKeyDown(
                'Enter',
                reverseBoolean.bind(this, 'isPasswordShow'),
              )}
            >
              비밀번호 표시
            </span>
            <span
              className={
                this.state.isPasswordShow
                  ? 'signup_password'
                  : 'signup_password display_none'
              }
              onClick={reverseBoolean.bind(this, 'isPasswordShow')}
              tabIndex="0"
              onKeyDown={handleKeyDown(
                'Enter',
                reverseBoolean.bind(this, 'isPasswordShow'),
              )}
            >
              숨기기
            </span>
          </div>
          <div className="flex10 container_padding">
            <div
              className="hw100 bg_eee container_grid center_grid pointer"
              onClick={this.handleSignUp}
              tabIndex="0"
              onKeyDown={handleKeyDown('Enter', this.handleSignUp)}
            >
              회원가입
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
