import { useState } from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  & video {
    width: 100%;
    transform: scale(1.2);
    object-fit: cover;
  }

  & .mute {
    z-index: 100;
    position: absolute;
    background: none;
    padding: 1rem;
    right: 0;
    top: 20%;
    border: none;
  }

  & .mute-icon {
    width: 15px;
    filter: invert(100);
  }
`;

const Video = () => {
  const [muted, setMuted] = useState(true);
  const toggleMute = (ev) => {
    setMuted(!muted);
    muted
      ? (ev.currentTarget.nextSibling.muted = false)
      : (ev.currentTarget.nextSibling.muted = true);
  };

  return (
    <StyledHero>
      <button className="mute" onClick={(ev) => toggleMute(ev)}>
        {muted ? (
          <img
            className="mute-icon"
            src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1677245783/mute_bt641i.png"
            alt="muted Icon"
          />
        ) : (
          <img
            className="mute-icon"
            src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1677245778/volume_shqhai.png"
            alt="muted Icon"
          />
        )}
      </button>
      <video
        muted
        autoPlay
        loop
        src="https://res.cloudinary.com/di0zpa5yw/video/upload/v1677165627/ff7/SnapSave.io-FINAL_FANTASY_VII___The_Famous_Opening___HD_online-video-cutter.com_smtht6.mp4"
        type="video/mp4"
      ></video>
    </StyledHero>
  );
};

export default Video;
