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
  }
`;

const Video = () => {
  const [muted, setMuted] = useState(true);
  const toggleMute = (ev) => {
    setMuted(!muted);
    muted
      ? (ev.currentTarget.previousSibling.muted = false)
      : (ev.currentTarget.previousSibling.muted = true);
  };

  return (
    <StyledHero>
      <button className="mute" onClick={(ev) => toggleMute(ev)}>
        Mute
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
