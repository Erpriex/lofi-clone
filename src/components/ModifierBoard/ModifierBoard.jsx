import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ModifierBoard.scss';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

import ReactAudioPlayer from 'react-audio-player';
import {changeRainStatus, changeScene} from '../../redux/actions';
import { changeVolume } from '../../redux/actions';

const ModifierBoard = () => {
  const dispatch = useDispatch();
  const rainData = useSelector((state) => state.rainState);
  const volumeData = useSelector((state) => state.volumeState);
  const sceneData = useSelector((state) => state.sceneState);

  const { rainValue } = rainData;
  const { volumeValue } = volumeData;
  const { sceneValue } = sceneData;

  const [openMood, setOpenMood] = useState(false);
  const [openScenes, setOpenScenes] = useState(false);

  const [cityTraffic, setCityTraffic] = useState(0);
  const [cityRain, setCityRain] = useState(rainValue);
  const [fireplace, setFireplace] = useState(0);
  const [snow, setSnow] = useState(0);
  const [summerStorm, setSummerStorm] = useState(0);
  const [fan, setFan] = useState(0);
  const [forestNight, setForestNight] = useState(0);
  const [wave, setWave] = useState(0);
  const [wind, setWind] = useState(0);
  const [people, setPeople] = useState(0);
  const [river, setRiver] = useState(0);
  const [rainForest, setRainForest] = useState(0);

  const rainSliderHandler = (e) => {
    // if slide then make it rain
    if (e.target.value > 0) dispatch(changeRainStatus('clear', cityRain));
    // if value = 0 then stop rain
    else if (e.target.value === 0) dispatch(changeRainStatus('rain', 0));
    setCityRain(e.target.value);
  };

  const openMoodHandler = () => {
    setOpenMood(!openMood);
    setOpenScenes(false);
  };

  const openScenesHandler = () => {
    setOpenScenes(!openScenes);
    setOpenMood(false);
  };

  const changeVolumeHandler = (e) => {
    dispatch(changeVolume(e.target.value));
  };

  const changeSceneHandler = (value) => {
    dispatch(changeScene(value));
  };

  return (
    <>
      {!openMood && (
        <div>
          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/sounds/city_traffic.mp3'
            loop
            volume={cityTraffic / 100}
          />

          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/sounds/fireplace.mp3'
            loop
            volume={fireplace / 100}
          />

          <ReactAudioPlayer
            preload='auto'
            autoPlay
            src='./assets/sounds/rain_city.mp3'
            loop
            volume={rainValue / 100}
          />
        </div>
      )}
      <div
        className={
          `modifier ` + (openMood && 'mood ') + (openScenes && ' focus ')
        }
      >
        <div className='modifier__icon'>
          <div className={`icon ` + (openMood && 'active')}>
            <i onClick={openMoodHandler} className='fas fa-sliders-h fa-2x'></i>
          </div>
          {openMood && (
            <div className='modifierBox'>
              <h4>Volume principal</h4>
              <div className='options'>

              </div>
              <div className='volume'>
                <Stack
                  spacing={2}
                  direction='row'
                  sx={{ mb: 1 }}
                  alignItems='center'
                >
                  <i className='fas fa-volume-down fa-lg'></i>
                  <Slider
                    className='volume-slider'
                    value={volumeValue}
                    onChange={changeVolumeHandler}
                  />
                  <i className='fas fa-volume-up fa-lg'></i>
                </Stack>
              </div>
              <h5>Sons d'ambiance</h5>
              <div className='backgroundNoise'>
                <div className='noise-option'>
                  <p>Trafic urbain</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/city_traffic.mp3'
                    loop
                    volume={cityTraffic / 100}
                  />
                  <Slider
                    className='slider'
                    value={cityTraffic}
                    onChange={(e) => setCityTraffic(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Pluie en ville</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/rain_city.mp3'
                    loop
                    volume={rainValue / 100}
                  />
                  <Slider
                    className='slider'
                    value={rainValue}
                    onChange={rainSliderHandler}
                  />
                </div>
                <div className='noise-option'>
                  <p>Cheminée</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/fireplace.mp3'
                    loop
                    volume={fireplace / 100}
                  />
                  <Slider
                    className='slider'
                    value={fireplace}
                    onChange={(e) => setFireplace(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Neige</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/snow.mp3'
                    loop
                    volume={snow / 100}
                  />
                  <Slider
                    className='slider'
                    value={snow}
                    onChange={(e) => setSnow(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Tempête d'été</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/summer_storm.mp3'
                    loop
                    volume={summerStorm / 100}
                  />
                  <Slider
                    className='slider'
                    value={summerStorm}
                    onChange={(e) => setSummerStorm(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Ventilateur</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/fan.mp3'
                    loop
                    volume={fan / 100}
                  />
                  <Slider
                    className='slider'
                    value={fan}
                    onChange={(e) => setFan(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Nuit en forêt</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/forest_night.mp3'
                    loop
                    volume={forestNight / 100}
                  />
                  <Slider
                    className='slider'
                    value={forestNight}
                    onChange={(e) => setForestNight(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Vague</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/waves.mp3'
                    loop
                    volume={wave / 100}
                  />
                  <Slider
                    className='slider'
                    value={wave}
                    onChange={(e) => setWave(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Vent</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/wind.mp3'
                    loop
                    volume={wind / 100}
                  />
                  <Slider
                    className='slider'
                    value={wind}
                    onChange={(e) => setWind(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Personnes</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/people_talk_inside.mp3'
                    loop
                    volume={people / 100}
                  />
                  <Slider
                    className='slider'
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Rivière</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/river.mp3'
                    loop
                    volume={river / 100}
                  />
                  <Slider
                    className='slider'
                    value={river}
                    onChange={(e) => setRiver(e.target.value)}
                  />
                </div>
                <div className='noise-option'>
                  <p>Pluie en forêt</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/sounds/rain_forest.mp3'
                    loop
                    volume={rainForest / 100}
                  />
                  <Slider
                    className='slider'
                    value={rainForest}
                    onChange={(e) => setRainForest(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='modifier__icon'>
          <div className={'icon ' + (openScenes && 'active')}>
            <i
                onClick={openScenesHandler}
                className='fas fa-images fa-2x'
            ></i>
          </div>
        </div>
        {openScenes && (
            <div className='modifierBox'>
              <h4>Lieux</h4>
              <div className={`sceneselector ${sceneValue === "chillVibes" ? "currentscene" : ""}`}
                   onClick={(e) => changeSceneHandler("chillVibes")}>
                <img className="sceneselector__thumb" src="./assets/thumbnails/chillVibes.png" alt="Chill Vibes"/>
              </div>
              <div className={`sceneselector ${sceneValue === "cozyStudio" ? "currentscene" : ""}`}
                   onClick={(e) => changeSceneHandler("cozyStudio")}>
                <img className="sceneselector__thumb" src="./assets/thumbnails/cozyStudio.png" alt="Cozy Studio"/>
              </div>
            </div>
        )}
      </div>
    </>
  );
};

export default ModifierBoard;
