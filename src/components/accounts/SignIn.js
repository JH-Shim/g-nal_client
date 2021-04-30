import React from 'react';
import { useHistory } from 'react-router-dom';

function SignIn({}) {
  const history = useHistory();

  return (
    <div className="rem35 container_grid center_grid bg_contrast">
      <div className="center_div_res_container container_flex_column">
        <div className="signin_up flex80"></div>
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
