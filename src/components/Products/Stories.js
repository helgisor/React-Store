import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import aboutUs2 from '../../assets/aboutUs2.jpg';
import aboutUs3 from '../../assets/category4.jpg';
import aboutUs4 from '../../assets/aboutUs4.jpg';

const Stories = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <main className='wrapper'>
      <section
        className='aboutHero'
        data-aos='fade-out'
        data-aos-delay='250'
        data-aos-duration='1600'
      >
        <h1>It started with a dream...</h1>
        <article>
          <p>
            The same old, outdated brands and designs. Sizes that were either
            way too big or too small. And even if they fit, there would be a
            tear in a month. Not anymore!
          </p>
        </article>
      </section>
      <section className='breweries' id='breweries'>
        <ul>
          <li
            data-aos='flip-left'
            data-aos-delay='250'
            data-aos-duration='1600'
          >
            <figure>
              <img src={aboutUs2} />
              <figcaption>
                <h3>Niche Brands</h3>
              </figcaption>
            </figure>
            <p>
              We're always on top of the latest releases. We hunt down the
              internet so you don't have to. Whether it's cool, quirky or
              sustainable that you're looking for, we probably have it.
            </p>
          </li>
          <li
            data-aos='flip-left'
            data-aos-delay='250'
            data-aos-duration='1600'
          >
            <figure>
              <img src={aboutUs3} />
              <figcaption>
                <h3>Customisation</h3>
              </figcaption>
            </figure>
            <p>
              Found something but it could be better? Our designers have all the
              tools to modify a pair based on your specific needs. Customise
              your shoes to truly stand out.
            </p>
          </li>
          <li
            data-aos='flip-left'
            data-aos-delay='250'
            data-aos-duration='1600'
          >
            <figure>
              <img src={aboutUs4} />
              <figcaption>
                <h3>Order Anything</h3>
              </figcaption>
            </figure>
            <p>
              Send us a link and we will do all the ordering for you. Save
              yourself the hassle of dealing with delivery issues and other
              problems. For a nominal fee, we will take care of everything for
              you.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Stories;
