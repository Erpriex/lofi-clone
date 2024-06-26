import React from 'react';

import './Home.scss';
import { useSelector } from 'react-redux';
import RainToggleButton from '../RainToggleButton/RainToggleButton';
import ModifierBoard from '../ModifierBoard/ModifierBoard';
import Footer from '../Footer/Footer';

const Home = () => {
  const daynight = useSelector((state) => state.modeState);
  const rain = useSelector((state) => state.rainState);
  const scene = useSelector((state) => state.sceneState);

  const { mode } = daynight;
  const { rainMode } = rain;
  const { sceneValue } = scene;

  const combineMode = `${mode}-${rainMode}`;

  return (
      <>
          {/* Chill Vibes */}
          {/* Night */}
          <video
              className={combineMode === 'night-clear' && sceneValue === 'chillVibes' ? 'videoIn' : 'videoOut'}
              autoPlay
              loop
              muted
          >
              <source src='/assets/videos/chill_vibes/Chill_night.mp4' type='video/mp4'/>
          </video>
          <video
              className={combineMode === 'night-rain' && sceneValue === 'chillVibes' ? 'videoIn' : 'videoOut'}
              autoPlay
              loop
              muted
          >
              <source src='/assets/videos/chill_vibes/Chill_night_rain.mp4' type='video/mp4'/>
          </video>
          {/* Day */}
          <video
              className={combineMode === 'day-clear' && sceneValue === 'chillVibes' ? 'videoIn' : 'videoOut'}
              autoPlay
              loop
              muted
          >
              <source src='/assets/videos/chill_vibes/Chill_day.mp4' type='video/mp4'/>
          </video>
          <video
              className={combineMode === 'day-rain' && sceneValue === 'chillVibes' ? 'videoIn' : 'videoOut'}
              autoPlay
              loop
              muted
          >
              <source src='/assets/videos/chill_vibes/Chill_day_rain.mp4' type='video/mp4'/>
          </video>

          {/* Cozy Studio */}
          {/* Night */}
          <video
              className={combineMode === 'night-clear' && sceneValue === 'cozyStudio' ? 'videoIn' : 'videoOut'}
              autoPlay
              loop
              muted
          >
              <source src='/assets/videos/cozy_studio/Cozy_night.mp4' type='video/mp4'/>
          </video>
          <video
              className={combineMode === 'night-rain' && sceneValue === 'cozyStudio' ? 'videoIn' : 'videoOut'}
              autoPlay
              loop
              muted
          >
              <source src='/assets/videos/cozy_studio/Cozy_night_rain.mp4' type='video/mp4'/>
          </video>
          {/* Day */}
          <video
              className={combineMode === 'day-clear' && sceneValue === 'cozyStudio' ? 'videoIn' : 'videoOut'}
              autoPlay
              loop
              muted
          >
              <source src='/assets/videos/cozy_studio/Cozy_day.mp4' type='video/mp4'/>
          </video>
          <video
              className={combineMode === 'day-rain' && sceneValue === 'cozyStudio' ? 'videoIn' : 'videoOut'}
              autoPlay
              loop
              muted
          >
              <source src='/assets/videos/cozy_studio/Cozy_day_rain.mp4' type='video/mp4'/>
          </video>
          <RainToggleButton/>
          <ModifierBoard/>
          <Footer/>
      </>
  );
};

export default Home;
