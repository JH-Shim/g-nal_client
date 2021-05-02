import React from 'react';
import { useHistory } from 'react-router-dom';

function SignIn({}) {
  const history = useHistory();

  return (
    <div className="rem35 container_grid center_grid bg_contrast">
      <div className="container_flex_column center_div_res_container">
        <div className="signin_up flex80 container_flex_column">
          <div className="flex10"></div>
          <div className="flex10 container_padding">
            <input className="hw100" placeholder="아이디"></input>
          </div>
          <div className="flex10 container_padding">
            <input
              className="hw100"
              placeholder="비밀번호"
              type="password"
            ></input>
          </div>
          <div className="flex10 container_padding">
            <div className="hw100 bg_eee container_grid center_grid pointer">
              로그인
            </div>
          </div>
        </div>
        <div
          className="signin_down flex20 container_grid center_grid"
          onClick={() => {
            history.push('/accounts/signup');
          }}
        >
          가입하기
        </div>
      </div>
    </div>
  );
}

export default SignIn;
