import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
  <div className='footer'>
    <ul className='footerList'>
      <li>
        <div className="footerItem">
          <span>03:00</span>
          <image className='img' src={crop} alt="temp" />
          <span>4°C</span>
        </div>
      </li>
      <li>
      <div className="footerItem">
          <span>06:00</span>
          <image src="#" alt="temp" />
          <span>9°C</span>
        </div>
      </li>
      <li>
      <div className="footerItem">
          <span>09:00</span>
          <image src="#" alt="temp" />
          <span>12°C</span>
        </div>
      </li>
      <li>
      <div className="footerItem">
          <span>12:00</span>
          <image src="#" alt="temp" />
          <span>25°C</span>
        </div>
      </li>
      <li>
      <div className="footerItem">
          <span>15:00</span>
          <image src="#" alt="temp" />
          <span>27°C</span>
        </div>
      </li>
      <li>
      <div className="footerItem">
          <span>18:00</span>
          <image src="#" alt="temp" />
          <span>15°C</span>
        </div>
      </li>
      <li>
      <div className="footerItem">
          <span>21:00</span>
          <image src="#" alt="temp" />
          <span>13°C</span>
        </div>
      </li>
    </ul>
</div>
)
  
}

export default Footer