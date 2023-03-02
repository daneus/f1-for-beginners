'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const returnSmallestViewport = (width: number, height: number): number => {
  if (width > height) return height
  if (width < height) return width
  if (width === height) return width
}

const EarthComponent: React.FC = () => {
  //Selecting the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null)

  //Creating scene
  const scene = new THREE.Scene()

  //Creating sphere
  const geometry = new THREE.SphereGeometry(3, 64, 64)
  const material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('/images/earthTexture.jpg')
  })
  const mesh = new THREE.Mesh(geometry, material)

  //Adding mesh to scene
  scene.add(mesh)

  //Creating light
  const light = new THREE.PointLight(0xffffff, 1, 100)
  light.position.set(0, 10, 10)

  //Adding light
  scene.add(light)

  //Creating camera
  const camera = new THREE.PerspectiveCamera(
    45,
    returnSmallestViewport(window.innerWidth, window.innerHeight) /
      returnSmallestViewport(window.innerWidth, window.innerHeight)
  )
  camera.position.z = 20

  //Adding camera to scene
  scene.add(camera)

  //Selecting renderer
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef?.current })
    renderer.setSize(
      returnSmallestViewport(window.innerWidth, window.innerHeight),
      returnSmallestViewport(window.innerWidth, window.innerHeight)
    )

    //Adding event listener for resize
    window.addEventListener('resize', () => {
      camera.updateProjectionMatrix()
      renderer.setSize(
        returnSmallestViewport(window.innerWidth, window.innerHeight),
        returnSmallestViewport(window.innerWidth, window.innerHeight)
      )
    })

    const loop = () => {
      mesh.rotation.y += 0.001
      renderer.render(scene, camera)
      window.requestAnimationFrame(loop)
    }
    loop()
  }, [])

  return (
    <div className="w-[100vmin] h-[100vmin] flex justify-center items-center mx-auto">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

export default EarthComponent
