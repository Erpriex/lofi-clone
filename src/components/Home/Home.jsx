import React, {useEffect, useState} from 'react';

import './Home.scss';
import { useSelector } from 'react-redux';
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

  const [currentScene, setCurrentScene] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);

    useEffect(() => {
        const changeScene = () => {
            setIsFadingOut(true);

            setTimeout(() => {
                switch (sceneValue) {
                    case 'chillVibes':
                        if (combineMode === 'night-clear') {
                            setCurrentScene('/assets/videos/chill_vibes/Chill_night.mp4');
                        } else if (combineMode === 'night-rain') {
                            setCurrentScene('/assets/videos/chill_vibes/Chill_night_rain.mp4');
                        } else if (combineMode === 'day-clear') {
                            setCurrentScene('/assets/videos/chill_vibes/Chill_day.mp4');
                        } else if (combineMode === 'day-rain') {
                            setCurrentScene('/assets/videos/chill_vibes/Chill_day_rain.mp4');
                        }
                        break;
                    case 'chillVibes2':
                        if (combineMode === 'night-clear') {
                            setCurrentScene('/assets/videos/chill_vibes2/Chill2_night.mp4');
                        } else if (combineMode === 'night-rain') {
                            setCurrentScene('/assets/videos/chill_vibes2/Chill2_night_rain.mp4');
                        } else if (combineMode === 'day-clear') {
                            setCurrentScene('/assets/videos/chill_vibes2/Chill2_day.mp4');
                        } else if (combineMode === 'day-rain') {
                            setCurrentScene('/assets/videos/chill_vibes2/Chill2_day_rain.mp4');
                        }
                        break;
                    case 'cozyStudio':
                        if (combineMode === 'night-clear') {
                            setCurrentScene('/assets/videos/cozy_studio/Cozy_night.mp4');
                        } else if (combineMode === 'night-rain') {
                            setCurrentScene('/assets/videos/cozy_studio/Cozy_night_rain.mp4');
                        } else if (combineMode === 'day-clear') {
                            setCurrentScene('/assets/videos/cozy_studio/Cozy_day.mp4');
                        } else if (combineMode === 'day-rain') {
                            setCurrentScene('/assets/videos/cozy_studio/Cozy_day_rain.mp4');
                        }
                        break;
                    case 'cozyRoomSunset':
                        setCurrentScene('/assets/videos/cozy_room_sunset/cozy-room-sunset.mp4');
                        break;
                    case 'forestHouse':
                        setCurrentScene('/assets/videos/forest_house/forest-house.mp4');
                        break;
                    case 'cozyAutumnRoom':
                        setCurrentScene('/assets/videos/cozy_autumn_room/cozy-autumn-room.mp4');
                        break;
                    case 'halloweenCat':
                        setCurrentScene('/assets/videos/halloween_cat/halloween-cat.mp4');
                        break;
                    default:
                        setCurrentScene('');
                }

                setTimeout(() => {
                    setIsFadingOut(false);
                    setIsFadingIn(true);
                }, 100);
            }, 500);
        };

        changeScene();
    }, [sceneValue, combineMode]);

  return (
      <>
          <video
              key={currentScene}
              className={`videoIn ${isFadingOut ? 'fadeOut' : ''} ${isFadingIn ? 'fadeIn' : ''}`}
              autoPlay
              loop
              muted
              onTransitionEnd={() => setIsFadingIn(false)}
          >
              <source src={currentScene} type='video/mp4'/>
          </video>
          <ModifierBoard/>
          <Footer/>
      </>
  );
};

export default Home;
