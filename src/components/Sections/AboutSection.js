import React from "react";

function AboutSection() {
  return (
    <section className='section-about' aria-labelledby='aboutSectionTitle'>
      <div className='section-about__box'>
        <h1
          id='aboutSectionTitle'
          className='heading-primary heading-primary--in-black'
        >
          To-do List
        </h1>
        <p
          id='aboutSectionDesc'
          className='big-text-paragraph big-text-paragraph--in-black'
        >
          Drag and drop to set your main priorities, check when done, and create
          what's new.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
