import React from "react";

import peopleLaughing from "../../img/peopleLaughing.png";
import granpsPainting from "../../img/granpsPainting.png";
import stitching from "../../img/stitching.png";
import lessThanSmall from "../../img/lessThan-small.png";

function GoodThingsSection() {
  const cards = [
    {
      imgSrc: peopleLaughing,
      imgAlt: "People laughing",
      logoAlt: "Less than symbol small logo",
      text: "Organize your daily job, enhance your life performance.",
    },
    {
      imgSrc: granpsPainting,
      imgAlt: "Grandparent painting",
      logoAlt: "Less than symbol small logo",
      text: "Mark one activity as done make your brain understand the power of doing.",
    },
    {
      imgSrc: stitching,
      imgAlt: "Person stitching",
      logoAlt: "Less than symbol small logo",
      text: "Careful with misunderstanding the difference between a list of things and a list of desires",
    },
  ];

  return (
    <section className='section-good-things'>
      <div className='green-box'>
        <h1 className='heading-secondary heading-secondary--in-black heading-secondary--bold heading-secondary--big'>
          good things
        </h1>
      </div>
      <div className='transparent-box'>
        <div className='carrousel'>
          <div className='carrousel__cards' role='list'>
            {cards.map((card, index) => (
              <article className='carrousel__card' role='listitem' key={index}>
                <img
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  className='carrousel__card-img'
                />
                <img
                  src={lessThanSmall}
                  className='carrousel__card-logo-small'
                  alt={card.logoAlt}
                />
                <div className='carrousel__card-details'>
                  <div className='carrousel__card-text'>
                    <button className='btn btn__function'>function</button>
                    <p className='paragraph-tertiary'>{card.text}</p>
                  </div>
                  <button className='btn btn__read'>read more</button>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className='carrousel__dots'>
          <span className='dot dot--green'></span>
          <span className='dot dot--gray'></span>
          <span className='dot dot--gray'></span>
        </div>
      </div>
    </section>
  );
}

export default GoodThingsSection;
