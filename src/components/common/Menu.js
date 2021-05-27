import React from 'react';
import { useHistory } from 'react-router-dom';

function Menu({ isLogin, setIsLogin, isMenu, setIsMenu }) {
  const history = useHistory();

  return (
    <div id={isMenu ? 'Menu_open' : 'Menu_closed'}>
      <div className="rem5 CT_grid center_grid sticky_nav">
        <span className="absolute_nav_l" onClick={() => setIsMenu(false)}>
          ✕
        </span>
        <span
          className="absolute_nav_r display_none"
          onClick={() => alert('성함이 참 아름다우시네요.')}
        >
          성함
        </span>
      </div>
      <div className="height2">
        {isLogin ? (
          <div
            onClick={() => {
              sessionStorage.clear();
              setIsLogin(false);
              setIsMenu(false);
              history.push('/');
              alert('로그아웃 되었습니다.');
            }}
          >
            <span className="inline_block_l">로그아웃</span>
          </div>
        ) : (
          <div
            onClick={() => {
              setIsMenu(false);
              history.push('/accounts/signin');
            }}
          >
            <span className="inline_block_l">로그인</span>
          </div>
        )}
        <div
          onClick={() => {
            setIsMenu(false);
            if (isLogin) {
              history.push(`/@${sessionStorage.getItem('account')}`);
            } else {
              history.push('/accounts/signin');
            }
          }}
        >
          <span className="inline_block_l">나의 기록</span>
        </div>
        <div
          onClick={() => {
            setIsMenu(false);
            isLogin
              ? history.push('/mypage')
              : history.push('/accounts/signin');
          }}
        >
          {/* <span className="inline_block_l">마이페이지</span> */}
        </div>
      </div>
    </div>
  );
}

export default Menu;
