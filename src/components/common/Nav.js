import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

function Nav({ isLogin, setIsLogin, setIsMenu }) {
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    <div className="rem5 sticky_nav CT_grid center_grid">
      <span
        className="absolute_nav_l_res"
        onClick={() => {
          window.scrollTo(0, 0);
          setIsMenu(true);
        }}
      >
        ☰
      </span>
      <span id="logo_res">
        <Link
          to={
            path[0] !== '@' && sessionStorage.getItem('account')
              ? `/@${sessionStorage.getItem('account')}`
              : path[0] !== '@'
              ? '/'
              : path.indexOf('/') === -1
              ? `${path}`
              : `/${path.slice(0, path.indexOf('/'))}`
          }
        >
          그날의 공기
        </Link>
      </span>
      <span className="absolute_nav_r1_res">
        <Link
          to={`/@${sessionStorage.getItem('account')}`}
          className={isLogin ? '' : 'display_none'}
        >
          나의 기록
        </Link>
        {/* <Link to="/mypage" className={isLogin ? '' : 'display_none'}>
          마이페이지
        </Link> */}
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
