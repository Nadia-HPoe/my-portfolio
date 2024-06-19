import React from "react";

const Header = () => {
  return (
    <div className='header__container'>
      <nav class='header__menu'>
        <ul class='header__list'>
          <li class='header__list-item'>HOME</li>
          <li class='header__list-item'>ABOUT</li>
          <li class='header__list-item'>PORTFOLIO</li>
          <li class='header__list-item'>CONTACTS</li>
        </ul>
      </nav>
    </div>
  );
};

export { Header };
