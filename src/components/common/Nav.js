import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

function Nav({ setIsMenu }) {
  // const history = useHistory();

  return (
    <div className="rem5 container_grid center_grid sticky_nav">
      <span className="absolute_nav_l_res" onClick={() => setIsMenu(true)}>
        ☰
      </span>
      <span>
        <Link to="/">로고</Link>
      </span>
      <span className="absolute_nav_r1_res">
        <Link to="/">지도</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/signin">로그인</Link>
      </span>
      <span className="absolute_nav_r2_res">
        <Link to="/signin">로그인</Link>
      </span>
    </div>
  );
}

export default Nav;
