import { Canvas } from "@react-three/fiber";
import React from 'react';
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'

const App = () => {
 
  return (
    <Canvas flat camera={{fov:75}}>
      <mesh>
        <ambientLight />
        <OrbitControls />
   <Cyl/>
   <EffectComposer>
<Bloom
   mipmapBlur
    intensity={5.0} 
    luminanceThreshold={0} 
    luminanceSmoothing={0} 

   />
   <ToneMapping/>
</EffectComposer>
 
      </mesh>
    </Canvas>
  );
}

export default App;
