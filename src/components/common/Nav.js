import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

function Nav({ isMenu, setIsMenu }) {
  // const history = useHistory();

  return (
    <div className="flex10 container_grid center_grid sticky_nav">
      <span className="absolute_left_nav" onClick={() => setIsMenu(!isMenu)}>
        ☰
      </span>
      <span>
        <Link to="/">로고</Link>
      </span>
      <span className="absolute_right1_nav">
        <Link to="/">지도</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/signin">로그인</Link>
      </span>
      <span className="absolute_right2_nav">
        <Link to="/signin">로그인</Link>
      </span>
    </div>
  );
}

export default Nav;
