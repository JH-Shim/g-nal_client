import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

function Hamburger({ isHamburger }) {
  // const history = useHistory();

  return (
    <div className={isHamburger ? 'hamburger_open' : 'hamburger_closed'}>
      Hamburger
    </div>
  );
}

export default Hamburger;
