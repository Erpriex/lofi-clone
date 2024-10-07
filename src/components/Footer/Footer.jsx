import React, { useState } from 'react';

import {songs} from '../../data/songData';
import './Footer.scss';
import Player from '../Player/Player';

const Footer = () => {

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className='footer'>
        <div className='author'>
            <span>{songs[currentSongIndex].name}</span>
        </div>
        <div className='controller'>
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                songs={songs}
            />
      </div>
    </div>
  );
};

export default Footer;
