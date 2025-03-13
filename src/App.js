import React, { useState, useEffect, useRef } from 'react';
import seaGif from "./img/listen_sea.gif";
import listen_sea from './audio/listen_sea.mp3'
import moonlight_secret from './audio/moonlight_secret.mp3'
import water_whisper from './audio/water_whisper.mp3'
import './App.scss';

const soundList = [
  listen_sea,  // 0: 聽海的呢喃
  moonlight_secret,  // 1: 月夜秘境
  water_whisper  // 2: 水韻微語
];

const App = () => {
  const [soundIndex, setSoundIndex] = useState(-1);
  const audioRef = useRef(null);

  // 切換音樂
  useEffect(() => {
    if (soundIndex === -1) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // 重置音樂
    } else {
      audioRef.current.src = soundList[soundIndex]; // 切換音樂
      audioRef.current.play();
    }
  }, [soundIndex]);

  return (
    <div className='background'>
      <img src={seaGif} className="bg-gif" draggable="false" alt="background gif" />

      <div className='button_list'>
        <div className={soundIndex===0?'playing_button':'sound_button' } onClick={() => setSoundIndex(soundIndex === 0 ? -1 : 0)}>
          聽海的呢喃
        </div>
        <div className={soundIndex===1?'playing_button':'sound_button' } onClick={() => setSoundIndex(soundIndex === 1 ? -1 : 1)}>
          月夜秘境
        </div>
        <div className={soundIndex===2?'playing_button':'sound_button' } onClick={() => setSoundIndex(soundIndex === 2 ? -1 : 2)}>
          水韻微語    
        </div>
      </div>

      {/* 隱藏音樂播放器 */}
      <audio ref={audioRef} loop />
    </div>
  );
};

export default App;