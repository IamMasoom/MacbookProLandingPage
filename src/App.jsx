import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'

import MacContainer from './MacContainer'

const App = () => {
  return (
    <>
      <div className='w-full h-screen bg-black'>
        <div className='navbar flex gap-10 py-12 absolute top-0 left-1/2 -translate-x-1/2'>
          {["iPhone","iPad", "services", "support", "products"].map((e)=>(
            <a href="" className='text-white capitalize'>{e}</a>
          ))}
        </div>
        <div className='absolute flex flex-col items-center top-32 left-1/2 -translate-x-1/2 text-white'>

          <h3 className='masked text-7xl tracking-tight font-bold' data-text="macbook pro">macbook pro</h3>
          <h5>Oh so pro !</h5>
          <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium facere facilis!</p>
        </div>
        <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
          <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]} />
          <ScrollControls pages={2}>
            <MacContainer />
          </ScrollControls>
        </Canvas>

      </div>
    </>
  )
}

export default App