import React from 'react';
import '../Styles/Home.css';
import car from '../Assets/car-removebg-preview.png';
import animation from '../Assets/Animation.png'
import Trading from './Trading';

import { IoMdCloseCircle } from "react-icons/io";

const Home = () => {
  return (
    <div className='home'>
      
      <div className='close'>
        <span><IoMdCloseCircle /></span>
      </div>
      <div className='container'>
          <img src={animation} class="background-img w-100" alt="" />
          <img src={car} className="car-img " alt="Car" />
      </div>
      <Trading/>
    </div>
  );
};

export default Home;
