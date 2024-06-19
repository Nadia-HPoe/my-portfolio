import React from "react";
import "./sections.scss";

const Main = () => {
  return (
    <section className='main__container'>
      <div className='main__wrapper'>
        <h1 className='main__title'>
          I do code with passion <span className='color'>&</span> skills.
        </h1>
        <div className='main__buttons'>
          <button className='main__portfolio-button'>My Portfolio</button>
          <button className='main__contacts-button'>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export { Main };
