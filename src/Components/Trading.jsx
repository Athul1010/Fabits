import React from 'react'
import '../Styles/Trading.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Trading = () => {
  return (
    <div className='container tradings'>
      <div className='trading-secion'>
        <div className='trade'>
          <h4>How much trading experience do you have?</h4>
          <button className='first'>1/2</button>
        </div>

        <div className='types'>

          <div className='catagory1'>
            <h5>None</h5>
            <p><MdKeyboardArrowLeft />1Y</p>
          </div>
          <div className='catagory2'>
            <h5>Beginner</h5>
            <p>1Y-3Y</p>
          </div>
          <div className='catagory3'>
            <h5>Mid</h5>
            <p>3Y-5Y</p>
          </div>
          <div className='catagory4'>
            <h5>Pro</h5>
            <p><MdKeyboardArrowRight />5Y</p>
          </div>

        </div>

        <div className="next">
          <p className='toNext'>Next</p>
          <p className='toNext-icon'><MdArrowRightAlt /></p>
        </div>
      </div>



      <div className='trading-secion'>
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
          <input type="text" class="form-control" placeholder=""/>
        </div>
        <div className='complete'>
          <button className='complete-btn'><FaLongArrowAltLeft /></button>
          <div className="nexts">
          <p className='toNexts'>Complete</p>
          <p className='toNext-icons'><MdArrowRightAlt /></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Trading