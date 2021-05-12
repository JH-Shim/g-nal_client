import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Nav({ isLogin, setIsLogin, setIsMenu }) {
  const history = useHistory();

  return (
    <div className="rem5 sticky_nav container_grid center_grid">
      <span className="absolute_nav_l_res" onClick={() => setIsMenu(true)}>
        ☰
      </span>
      <span id="logo_res">
        <Link
          to={
            sessionStorage.getItem('account')
              ? `/@${sessionStorage.getItem('account')}`
              : '/'
          }
        >
          그날의 공기
        </Link>
      </span>
      <span className="absolute_nav_r1_res">
        <Link
          to={
            sessionStorage.getItem('account')
              ? `/@${sessionStorage.getItem('account')}`
              : '/'
          }
        >
          지도
        </Link>
        <Link to={isLogin ? '/mypage' : '/accounts/signin'}>마이페이지</Link>
        {isLogin ? (
          <Link
            to="/"
            onClick={() => {
              sessionStorage.clear();
              setIsLogin(false);
              alert('로그아웃 되었습니다.');
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
            alert('로그아웃 되었습니다.');
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
