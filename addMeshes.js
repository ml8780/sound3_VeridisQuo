import {
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	Mesh,
	SphereGeometry,
	CapsuleGeometry,
	RingGeometry,
	MeshPhongMaterial,
	MeshLambertMaterial,
	MeshPhysicalMaterial,
	TextureLoader,
	CylinderGeometry,
	TorusGeometry
} from 'three'

const loader = new TextureLoader()

export const cap = () =>{
	const capGeometry = new CapsuleGeometry(0.05, 0.08, 4, 8)
	const capMaterial = new MeshLambertMaterial({color:'orange', reflectivity:1})
	const capMesh = new Mesh(capGeometry,capMaterial)
	capMesh.position.set(3.5, -1.5,0)
	return capMesh
}

export const cube = () =>{
	const cubeGeometry = new BoxGeometry(0.1,0.1,0.1)
	const cubeMaterial = new MeshPhysicalMaterial({
		color:'yellow',
		metalness:0.7,
		roughness:0.5
	})
	const cubeMesh = new Mesh(cubeGeometry,cubeMaterial)
	cubeMesh.position.set(-3.5,1.5,0)
	return cubeMesh
}

export const ball = () => {
	const ballGeometry = new SphereGeometry(0.01, 20, 20)
	const ballMaterial = new MeshPhysicalMaterial({
		color: 'white',
		clearcoat:0,
		metalness:0.0,
		roughness: 0.8,
		wireframe: true
	})
	const ballMesh = new Mesh(ballGeometry,ballMaterial)
	ballMesh.position.set(0,0,1)
	return ballMesh
}

export const drum1 = () =>{
	const drum1Geometry = new CylinderGeometry(4, 0.3, 0, 450)
	const drum1Material = new MeshStandardMaterial({
		color:0x9203ff, 
		metalness: 0.3, 
		roughness:1,
		wireframe:true
	})
	const drum1Mesh = new Mesh(drum1Geometry,drum1Material)
	drum1Mesh.rotateX(96)
	drum1Mesh.position.set(0, 0, 0)
	
	return drum1Mesh
}

export const drum2 = () =>{
	const drum2Geometry = new CylinderGeometry(4, 0.3, 6, 200)
	const drum2Material = new MeshStandardMaterial({
		color:'gray', 
		metalness: 0.3, 
		roughness:1,
		wireframe:true
	})
	const drum2Mesh = new Mesh(drum2Geometry,drum2Material)
	drum2Mesh.rotateX(96)
	drum2Mesh.position.set(0, 0, 0)
	
	return drum2Mesh
}
