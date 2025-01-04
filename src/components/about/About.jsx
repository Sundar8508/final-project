import React from 'react'
import aboutImg from'../../assets/about-img.jpg';
import { FiCheck } from "react-icons/fi";
import './about.css';


const About = () => {
  return (
    <section className="about section" id="about">
        <div className='about__grid container grid'>
            <div className="about__img-wrapper">
                <img src={aboutImg} alt="" className="about__img"/>
            </div>

            <div className="about__content">
                <h2 className="section__title title-left"
                 data-title='About us'>
                    Fresh Quality And Organic Tasty coffee House For You!
                </h2>

                <p className=" about__description">
                At Coffero, we craft the perfect brew with passion and care using sustainably sourced beans.
                 Our cozy atmosphere is designed for you to relax, connect, and enjoy every moment. 
                 Join us and discover the true essence of coffee in every cup.
                </p>

              <div className="about__details grid">
                <p className="about__details-description">
                <FiCheck />
                We are Happy to says we are  the best...
                </p>

                <p className="about__details-description">
                <FiCheck  />
                coffero is the finest coffee shop..
                </p>

                <p className="about__details-description">
                <FiCheck  />
                And we promise you we Will never disapoint you...
                </p>

                </div> 

                <a href="#team" className="btn">
                    Our Expects.
                </a>

            </div>
        </div>
    </section>

  )
}

export default About