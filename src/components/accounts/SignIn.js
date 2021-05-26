import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
// import { withRouter } from 'react-router'; // ! check ?
import axios from 'axios';
import { handleInputValueSHA256, handleKeyDown } from '../../modules/common';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
    };
  }

  handleInputValue = (state) => (e) => {
    this.setState({ [state]: e.target.value }); // ! check VS SignUp(modules)
  };

  handleSignIn = () => {
    const { account, password } = this.state;

    if (!account || !password) {
      alert('모든 항목을 채워주세요.');
      return;
    }

    // ! check axios local
    axios
      // .post(`${process.env.REACT_APP_SERVER_DOMAIN}/accounts/signin`, {
      .post(
        `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}/accounts/signin`,
        {
          account: account,
          password: password,
        },
      )
      .then((res) => {
        if (res.data.message !== 'sign in succeeded') {
          alert(res.data.message);
        } else {
          sessionStorage.setItem('accessToken', res.data.accessToken);
          sessionStorage.setItem('account', account);
          this.props.history.push(`/@${account}`);
          this.props.setIsLogin(true); // ! check 바로 위의 코드 한 줄과 순서를 바꾸면 다음과 같은 error 발생 "Can't perform a React state update on an unmounted component."
          // ! 위의 에러가 발생한 이유 : 지도가 있는 페이지에 랜딩 시 비동기 작업들이 이루어지고, 그 작업들이 끝나기 전에 다른 페이지로 이동을 시켰을 경우, 비동기 작업이 끝난 후 unmounted component에서 state update가 발생하기 때문. (덧붙이자면 `/@${account}` 와 '/' 의 <Map />이 서로 다르고, unmounted 된 '/'의 <Map />에서 state update가 일어나며 error가 뜬다. '/'의 페이지를 tutorial 페이지로 구성하려고 하는데, 그렇게 되면 코드가 간소화되는 부분이 많을 것이며, 아울러 위와 같은 error에서도 해방된다.)
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return this.props.isLogin ? (
      <Redirect to="/" /> // ! check 로그인 상태에서 새로고침 시, 다시 SignIn 페이지로 오는 문제에 대응하기 위한 코드. 여기서 알 수 있는 것은, 상태가 변화하여 re-rendering이 된다고 할지라도 Switch를 다시 돌지는 않는다는 것.
    ) : (
      <div className="height1 CT_grid center_grid bg_contrast">
        <div className="CT_flex_column center_div_res_CT">
          <div className="signin_up flex80 CT_flex_column">
            <div className="flex10"></div>
            <div className="flex10 CT_padding">
              <input
                className="hw100"
                placeholder="아이디"
                onChange={this.handleInputValue('account')}
                onKeyDown={handleKeyDown('Enter', this.handleSignIn)}
              ></input>
            </div>
            <div className="flex10 CT_padding">
              <input
                className="hw100"
                placeholder="비밀번호"
                type="password"
                onChange={handleInputValueSHA256.call(this, 'password')}
                onKeyDown={handleKeyDown('Enter', this.handleSignIn)}
              ></input>
            </div>
            <div className="flex10 CT_padding">
              <div
                className="hw100 bg_eee CT_grid center_grid pointer"
                onClick={this.handleSignIn}
                tabIndex="0"
                onKeyDown={handleKeyDown('Enter', this.handleSignIn)}
              >
                로그인
              </div>
            </div>
          </div>
          <div
            className="signin_down flex20 CT_grid center_grid"
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
