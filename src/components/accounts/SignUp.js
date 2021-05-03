import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router'; // ! check withRouter
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      nickname: '',
      password: '',
      errorMessage: '',
      isPasswordShow: false,
    };
    // this.handleInputValue = this.handleInputValue.bind(this);
  }

  reverseIsPasswordShow = () => {
    this.setState({ isPasswordShow: !this.state.isPasswordShow });
  };

  handleInputValue = (state) => (e) => {
    this.setState({ [state]: e.target.value });
  };

  handleSignup = () => {
    const { userId, nickname, password } = this.state;
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/accounts/signup`, {
        userId: userId,
        nickname: nickname,
        password: password,
      })
      .then((res) => {
        this.props.history.push('/'); // ! check
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
              onChange={this.handleInputValue('userId')}
            ></input>
          </div>
          <div className="flex10 container_padding">
            <input
              className="hw100"
              placeholder="닉네임"
              onChange={this.handleInputValue('nickname')}
            ></input>
          </div>
          <div className="flex10 container_padding relative">
            <input
              className="hw100"
              placeholder="비밀번호"
              type={this.state.isPasswordShow ? 'text' : 'password'}
              onChange={this.handleInputValue('password')}
            ></input>
            <span
              className={
                this.state.isPasswordShow
                  ? 'signup_password display_none'
                  : 'signup_password'
              }
              onClick={this.reverseIsPasswordShow}
            >
              비밀번호 표시
            </span>
            <span
              className={
                this.state.isPasswordShow
                  ? 'signup_password'
                  : 'signup_password display_none'
              }
              onClick={this.reverseIsPasswordShow}
            >
              숨기기
            </span>
          </div>
          <div className="flex10 container_padding">
            <div className="hw100 bg_eee container_grid center_grid pointer">
              회원가입
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
function SignUp({}) {
  // const history = useHistory();
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <div className="rem35 container_grid center_grid bg_contrast">
      <div className="center_div_res container_flex_column">
        <div className="flex10 container_padding">
          <input className="hw100" placeholder="아이디"></input>
        </div>
        <div className="flex10 container_padding">
          <input className="hw100" placeholder="닉네임"></input>
        </div>
        <div className="flex10 container_padding relative">
          <input
            className="hw100"
            placeholder="비밀번호"
            type={isPasswordShow ? 'text' : 'password'}
          ></input>
          <span
            className={
              isPasswordShow
                ? 'signup_password display_none'
                : 'signup_password'
            }
            onClick={() => {
              setIsPasswordShow(!isPasswordShow);
            }}
          >
            비밀번호 표시
          </span>
          <span
            className={
              isPasswordShow
                ? 'signup_password'
                : 'signup_password display_none'
            }
            onClick={() => {
              setIsPasswordShow(!isPasswordShow);
            }}
          >
            숨기기
          </span>
        </div>
        <div className="flex10 container_padding">
          <div className="hw100 bg_eee container_grid center_grid pointer">
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
}
*/

export default withRouter(SignUp);
