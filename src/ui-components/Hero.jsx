import './App.css';

import { useState } from 'react';

const Video = () => {
  const [muted, setMuted] = useState(true);
  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="App">
      <video
        muted
        autoPlay
        loop
        src="https://res.cloudinary.com/di0zpa5yw/video/upload/v1677165627/ff7/SnapSave.io-FINAL_FANTASY_VII___The_Famous_Opening___HD_online-video-cutter.com_smtht6.mp4"
        type="video/mp4"
      ></video>
      <button onClick={() => toggleMute()}>Mute</button>
    </div>
  );
};

export default Video;
