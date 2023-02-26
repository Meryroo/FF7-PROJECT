import './globeMap.css';

import { useState } from 'react';

import Texture from './components/prueba';
import TextureGlobe from './components/prueba3';
const MapModal = () => {
  const [change, setChange] = useState(false);
  return (
    <div className="canvas-container">
      {change ? <Texture /> : <TextureGlobe />}
      <button
        className="btnMap"
        onClick={() => {
          setChange(!change);
        }}
      >
        {change ? 'globe' : 'map'}
      </button>
      <button className="btnMap btnClose">Close</button>
    </div>
  );
};

export default MapModal;
