import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

function Nav({ isLogin, setIsLogin, setIsMenu }) {
  const history = useHistory();

  return (
    <div className="rem5 sticky_nav container_grid center_grid">
      <span className="absolute_nav_l_res" onClick={() => setIsMenu(true)}>
        ☰
      </span>
      <span id="logo_res">
        <Link to="/">그날의 공기</Link>
      </span>
      <span className="absolute_nav_r1_res">
        <Link to="/">지도</Link>
        <Link to="/mypage">마이페이지</Link>
        {isLogin ? (
          <Link
            to="/"
            onClick={() => {
              sessionStorage.clear();
              setIsLogin(false);
            }}
          >
            로그아웃
          </Link>
        ) : (
          <Link to="/accounts/signin">로그인</Link>
        )}
      </span>
      {isLogin ? (
        <span
          className="absolute_nav_r2_res"
          onClick={() => {
            sessionStorage.clear();
            setIsLogin(false);
            history.push('/');
          }}
        >
          로그아웃
        </span>
      ) : (
        <span
          className="absolute_nav_r2_res"
          onClick={() => history.push('/accounts/signin')}
        >
          로그인
        </span>
      )}
    </div>
  );
}

export default Nav;
