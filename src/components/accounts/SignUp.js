import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

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

export default SignUp;
