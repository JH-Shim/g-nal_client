import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
// import { withRouter } from 'react-router'; // ! check ?
import axios from 'axios';
import { handleInputValueSHA256, handleKeyDown } from '../../modules/common';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
    };
  }

  handleInputValue = (state) => (e) => {
    this.setState({ [state]: e.target.value }); // ! check VS SignUp(modules)
  };

  handleSignIn = () => {
    const { userId, password } = this.state;

    if (!userId || !password) {
      alert('모든 항목을 채워주세요.');
      return;
    }

    // ! check axios server
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/accounts/signin`, {
        // .post(
        //   `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/accounts/signin`,
        //   {
        userId: userId,
        password: password,
      })
      .then((res) => {
        if (res.data.message !== 'sign in succeeded') {
          alert(res.data.message);
        } else {
          sessionStorage.setItem('accessToken', res.data.accessToken);
          this.props.setIsLogin(true);
          this.props.history.push('/');
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return this.props.isLogin ? (
      <Redirect to="/" />
    ) : (
      <div className="rem35 container_grid center_grid bg_contrast">
        <div className="container_flex_column center_div_res_container">
          <div className="signin_up flex80 container_flex_column">
            <div className="flex10"></div>
            <div className="flex10 container_padding">
              <input
                className="hw100"
                placeholder="아이디"
                onChange={this.handleInputValue('userId')}
                onKeyDown={handleKeyDown('Enter', this.handleSignIn)}
              ></input>
            </div>
            <div className="flex10 container_padding">
              <input
                className="hw100"
                placeholder="비밀번호"
                type="password"
                onChange={handleInputValueSHA256.call(this, 'password')}
                onKeyDown={handleKeyDown('Enter', this.handleSignIn)}
              ></input>
            </div>
            <div className="flex10 container_padding">
              <div
                className="hw100 bg_eee container_grid center_grid pointer"
                onClick={this.handleSignIn}
                tabIndex="0"
                onKeyDown={handleKeyDown('Enter', this.handleSignIn)}
              >
                로그인
              </div>
            </div>
          </div>
          <div
            className="signin_down flex20 container_grid center_grid"
            onClick={() => {
              this.props.history.push('/accounts/signup');
            }}
            tabIndex="0"
            onKeyDown={handleKeyDown('Enter', () => {
              this.props.history.push('/accounts/signup');
            })}
          >
            가입하기
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
