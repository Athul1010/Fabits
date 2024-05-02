import React, { useState } from 'react';
import '../Styles/Trading.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdArrowRightAlt } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Trading = () => {
  const [showFirstSection, setShowFirstSection] = useState(true);

  const toggleSections = () => {
    setShowFirstSection(!showFirstSection);
  };

  const resetSections = () => {
    setShowFirstSection(true);
  };

  return (
    <div className='container tradings'>
      {showFirstSection ? (
        <div className='trading-section'>
          <div className='trade'>
            <h4>How much trading experience do you have?</h4>
            <button className='first'>1/2</button>
          </div>

          <div className='types'>
            <div className='category1'>
              <h5>None</h5>
              <p><MdKeyboardArrowLeft />1Y</p>
            </div>
            <div className='category2'>
              <h5>Beginner</h5>
              <p>1Y-3Y</p>
            </div>
            <div className='category3'>
              <h5>Mid</h5>
              <p>3Y-5Y</p>
            </div>
            <div className='category4'>
              <h5>Pro</h5>
              <p><MdKeyboardArrowRight />5Y</p>
            </div>
          </div>

          <div className="next" onClick={toggleSections}>
            <p className='toNext'>Next</p>
            <p className='toNext-icon'><MdArrowRightAlt /></p>
          </div>
        </div>
      ) : (
        <div className='trading-section'>
          <div className='trade'>
            <h4>Please enter your PAN details to complete verification</h4>
            <button className='first'>2/2</button>
          </div>
          <div className='verification'>
            <p>Verification method</p>
            <p></p>
          </div>
          <div className='manual'>
            <p>Manual</p>
            <button>Automatic</button>
          </div>
          <div className='pan'>
            <h4>PAN Card Number</h4>
            <input type="text" className="form-control" placeholder=""/>
          </div>
          <div className='complete'>
            <button className='complete-btn' onClick={resetSections}><FaLongArrowAltLeft /></button>
            <div className="nexts">
              <p className='toNexts'>Complete</p>
              <p className='toNext-icons'><MdArrowRightAlt /></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trading;
