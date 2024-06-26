import React from "react";
import room from "../../img/room.png";
import lessThan from "../../img/lessThan.png";

const HeroSection = () => (
  <section
    className='section__hero'
    aria-labelledby='hero-title'
    aria-describedby='hero-subtitle'
  >
    <div className='hero__text-box'>
      <h1 id='hero-title' className='heading-primary'>
        <span className='heading-primary--main'>Organize</span>
        <span className='heading-primary--sub'>your daily jobs</span>
      </h1>
      <h2 id='hero-subtitle' className='heading-tertiary'>
        The only way to get things done
      </h2>
      <button
        className='btn btn__main btn__main--header'
        aria-label='Go to To-do list'
      >
        Go to To-do list
      </button>
    </div>
    <figure className='hero__picture-box' aria-hidden='true'>
      <img src={room} alt='room' className='hero__picture' />
      <img
        src={lessThan}
        alt='decorative big logo'
        className='hero__picture-logo'
      />
    </figure>
  </section>
);

export default HeroSection;
