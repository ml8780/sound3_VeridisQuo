import './style.css'
import * as THREE from 'three'
import { ball } from './addMeshes'
import { cube } from './addMeshes'
import { cap } from './addMeshes'

import { drum1 } from './addMeshes'
import { drum2 } from './addMeshes'

// import { addBoilerPlateMeshes, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
const scene = new THREE.Scene()

const meshes = {}
const lights = {}
const clock = new THREE.Clock()


init()
function init() {
    //set up our renderer default settings, add scene/canvas to webpage
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    meshes.ball = ball()
    meshes.cube = cube()
    meshes.cap = cap()
    meshes.drum1 = drum1()

    meshes.drum2 = drum2()

    lights.default = addLight()

    scene.add(lights.default)
    scene.add(meshes.cap)
    scene.add(meshes.ball)
    scene.add(meshes.cube)
    scene.add(meshes.drum1)
    // scene.add(meshes.drum2)

    camera.position.set(0, 0, 5)
    resize()
    animate()
}

function resize() {
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
}

function animate() {
    requestAnimationFrame(animate)
    const tick = clock.getElapsedTime()

    //y&z together
    // meshes.drum1.rotation.y += 0.02
    // meshes.drum1.scale.y = Math.cos(tick * 0.7) * 2
    // meshes.drum1.scale.z = Math.cos(tick * 0.7) * 2

    //only y
    meshes.drum1.rotation.y += 0.02
    meshes.drum1.scale.y = Math.cos(tick * 0.7) * 2

    meshes.cube.rotation.y = Math.cos(tick * 0.2) * 2
    meshes.cube.rotation.x = Math.sin(tick * 0.2) * 2
    meshes.cube.position.z = Math.sin(tick * -0.05) * 4

    meshes.cap.rotation.y = Math.cos(tick * -0.5) * 2
    meshes.cap.rotation.x = Math.sin(tick * -0.5) * 2
    meshes.cap.position.z = Math.sin(tick * -0.05) * 5

    meshes.ball.position.z = Math.sin(tick * 0.1) * 10

    meshes.drum2.rotation.z = Math.sin(tick * 0.3) * 2


    renderer.render(scene, camera)
}