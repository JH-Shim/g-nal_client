import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

function Nav({ setIsMenu }) {
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
        <Link to="/accounts/signin">로그인</Link>
      </span>
      <span
        className="absolute_nav_r2_res"
        onClick={() => history.push('/accounts/signin')}
      >
        로그인
      </span>
    </div>
  );
}

export default Nav;
