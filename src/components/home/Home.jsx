import React from 'react'
import './home.css'

const Home = () => {
  return (
   <section className="home" id='home'>
    <div className='home__container container'>
        <div className='home__content'>
            <span className='home__subtitle'>
            Welcome to Coffero...
            </span>
            <h1 className='home__subtitle'>
            Change the world. Start with coffee..
            </h1>
            <p className='home__description'>
            Discover the perfect blend of taste, aroma, and ambiance. At Coffero, we don't just serve coffee; we serve unforgettable experiences crafted with passion
            </p>

            <div className="home__btns">
                <a href='#menu' className='btn'>
                    Check Menu.
                </a>

                <a href='#reservation' className='btn home__btn'>
                    Book Table
                </a>
            </div>
        </div>
    </div>

   </section>
  )
}

export default Home;