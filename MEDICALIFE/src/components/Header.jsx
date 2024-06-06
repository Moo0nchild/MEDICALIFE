
import React, { useState } from 'react';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}


const Header = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className="header">
      <div className="logo">LOGOTIPO</div>
      <div className="date-user-info">{currentDate}</div>
    </div>
  );
}

export default Header;
