import React from 'react';
import { handleKeyDown } from '../../modules/common';

function Footer({}) {
  return (
    <div className="rem7 footer container_grid center_grid">
      <div
        className="pointer"
        onClick={() => {
          if (confirm('sayhello.shim@gmail.com 으로 메일을 보내시겠습니까?')) {
            window.location.href = 'mailto:sayhello.shim@gmail.com';
          }
        }}
        tabIndex="0"
        onKeyDown={handleKeyDown('Enter', () => {
          if (confirm('sayhello.shim@gmail.com 으로 메일을 보내시겠습니까?')) {
            window.location.href = 'mailto:sayhello.shim@gmail.com';
          }
        })}
      >
        sayhello.shim@gmail.com
      </div>
    </div>
  );
}

export default Footer;
