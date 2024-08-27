import React, { useRef } from 'react'
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
const Cyl = () => {
    let t= useTexture("./image.png");
    let c=useRef(null);
    useFrame((state,delta)=>{
      c.current.rotation.y+=delta;
    })
 t.needsUpdate=true;
  return (
    <mesh ref={c} rotation={[0,1,0]}>
          <cylinderGeometry args={[2, 2, 2,30,30,true]} />
          <meshStandardMaterial map={t} transparent side={THREE.DoubleSide}/>
    </mesh>
  
  )
}

export default Cyl
