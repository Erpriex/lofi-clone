import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import './Header.scss';
import { Link } from 'react-router-dom';
import DarkLightSwitch from '../DarkLightSwitch/DarkLightSwitch';

const Header = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const daynight = useSelector((state) => state.modeState);
  const scene = useSelector((state) => state.sceneState);

  const { mode } = daynight;
  const { sceneValue } = scene;

  const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true);
      const e = document.documentElement;
      e.requestFullscreen();
    } else {
      setFullscreen(false);
      if (!document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  const showDarkLightSwitch = () => {
    switch(sceneValue) {
      case 'chillVibes':
      case 'chillVibes2':
      case 'cozyStudio':
            return true;
      default:
        return false;
    }
  };

  return (
    <nav className='wrap'>
      <Link to='/'>
        <img src='/assets/icons/lofi-logo.gif' alt='' />
      </Link>
      <div className='nav-menu'>
        {showDarkLightSwitch() && (
            <div>
              <DarkLightSwitch theme={mode}/>
            </div>
        )}

        <button onClick={fullscreenHandler} className='fullscreen-btn'>
          <i className='fas fa-expand fa-lg'></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
