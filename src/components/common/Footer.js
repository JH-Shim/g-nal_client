import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

function Footer({}) {
  // const history = useHistory();

  return (
    <div className="rem7 footer container_grid center_grid">
      <div
        className="pointer"
        onClick={() => {
          if (confirm('sayhello.shim@gmail.com 으로 메일을 보내시겠습니까?')) {
            window.location.href = 'mailto:sayhello.shim@gmail.com';
          }
        }}
      >
        sayhello.shim@gmail.com
      </div>
    </div>
  );
}

export default Footer;
