import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Stats, Stars, Sky, HTML, MapControls } from 'drei';


import FlipButton from '../flip-button/flip-button.component.jsx';
import Ground from '../ground/ground.component.jsx';
import FrontEndCity from '../front-end/front-end-city.component.jsx';

import './app.style.css';

const App = () => {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  const fogColor = flipped ? 'black' : '#dee5e7';

  return (
    <>
      <FlipButton flip={flip} />
      <Canvas
        gl={{ logarithmicDepthBuffer: true, alpha: false }}
        shadowMap
        camera={{ position: [-2, 2, 3] }}
      >
        <fog attach="fog" args={[fogColor, 5, 15]} />
        {/* <color attach="background" args={["#012"]} /> */}
        

        {flipped ? <Stars radius={300} /> : <Sky />}
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[0, 100, 100]} />
          {/* <MapControls /> */}
          <Stats />
          <Ground />
          <FrontEndCity />

        </Suspense>
      </Canvas>
    </>
  );
};


export default App;
