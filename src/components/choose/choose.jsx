import React from 'react'
import chooseImg from "../../assets/choose.jpg";
import CoffeeMug  from "../../assets/coffee-mug.svg";
import CoffeeBeans2  from "../../assets/coffee-beans-2.svg";
import CoffeeBeans3  from "../../assets/coffee-beans-3.svg";
import './choose.css';



const Choose = () => {
    return (
      <section className="choose section">
        <div className="choose__grid container grid">
          <div className="choose__content">
            <h2
              className="section__title title-left"
              data-title="WHY Choose us"
            >
              Coffero - Get the Most Out of Your Favorite & Tasty Coffee
            </h2>
  
            <p className="choose__description">
            At Coffero, we believe that every cup of coffee should not only 
            taste great but also enrich your senses and well-being. Here’s what makes us stand out:
            </p>
  
            <div className="choose__details grid">
              <div className="choose__details-item">
                <div className="choose__details-img-wrapper">
                  <img src={CoffeeMug} alt="Coffee Mug" className="choose__details-img" />
                </div>
                <div>
                  <h3 className="choose__details-title">Awesome Aroma</h3>
                  <p className="choose__details-description">
                  From the moment you step in, the rich, captivating scent of freshly brewed coffee welcomes you, awakening your senses..
                  </p>
                </div>
              </div>
  
              <div className="choose__details-item">
                <div className="choose__details-img-wrapper">
                  <img src={CoffeeBeans2} alt="Coffee Beans" className="choose__details-img" />
                </div>
                <div>
                  <h3 className="choose__details-title">Pure Grades</h3>
                  <p className="choose__details-description">
                  We use only the finest, premium-grade coffee beans, ensuring unmatched purity and quality in every sip..
                  </p>
                </div>
              </div>
  
              <div className="choose__details-item">
                <div className="choose__details-img-wrapper">
                  <img src={CoffeeBeans3} alt="Healthy Coffee" className="choose__details-img" />
                </div>
                <div>
                  <h3 className="choose__details-title">Healthy Coffee</h3>
                  <p className="choose__details-description">
                  We use only premium-grade, organic coffee beans, free from artificial additives or harmful chemicals..
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={chooseImg} alt="Choose Us" className="choose__img" />
        </div>
      </section>
    );
  };
  
  export default Choose;
  