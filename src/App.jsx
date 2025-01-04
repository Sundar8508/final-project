import React from "react";
import './App.css';
import Header from './components/header/Header';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Menu from "./components/menu/Menu";
import Choose from "./components/choose/choose";
import Stats from "./components/stats/Stats";
import Gallery from "./components/gallery/Gallery";
import Offer from "./components/offer/Offer";
import Reservation from "./components/reservation/Reservation";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";


function App() {
    return(
    <>
    <Header/>
    <Home/>
    <About/>
    <Features/>
    <Menu/>
    <Choose/>
    <Stats/>
    <Gallery/>
    <Offer/>
    <Reservation/>
    <Testimonials/>
    <Footer/>
    
    </>
    );
}

export default App;