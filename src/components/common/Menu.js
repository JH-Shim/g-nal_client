import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

function Menu({ isMenu }) {
  // const history = useHistory();

  return <div className={isMenu ? 'menu_open' : 'menu_closed'}>Menu</div>;
}

export default Menu;
