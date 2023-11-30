import React from 'react';

const Head = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="flex">
        <img
          className="h-8"
          alt="ham menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="h-8"
          alt="logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
        />
      </div>
      <div>
        <input type="text" />
        <button>search</button>
      </div>
      <div>
        <img
          className="h-8"
          alt="user"
          src="https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
