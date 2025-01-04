import React from 'react';
import coffeeShop from '../../assets/coffee-shop.svg';
import experience from '../../assets/experience.svg';
import coffeeCup from '../../assets/coffee-cup.svg';
import chef from '../../assets/chef.svg';
import './stats.css';

const Stats = () => {
  return (
    <section className="stats section">
        <div className="stats__grid container grid">
            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src= {coffeeShop}alt=""
                     className="stats__img" />
                </div>
                <div>
                    <p className="stats__no">20</p>
                    <h3 className="stats__title">Total Brances</h3>
                </div>
            </div>

            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src= {coffeeCup}alt=""
                     className="stats__img" />
                </div>
                <div>
                    <p className="stats__no">20,000</p>
                    <h3 className="stats__title">Happy Customers</h3>
                </div>
            </div>
            <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src= {chef}alt=""
                     className="stats__img" />
                </div>
                <div>
                    <p className="stats__no">120</p>
                    <h3 className="stats__title">Professional Chefs</h3>
                </div>
            </div>
    <div className="stats__item">
                <div className="stats__img-wrapper">
                    <img src= {experience}alt=""
                     className="stats__img" />
                </div>
                <div>
                    <p className="stats__no">40</p>
                    <h3 className="stats__title">Years of experience</h3>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Stats;