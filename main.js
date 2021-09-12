import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//we need 3 things 1.camera 2.screen  3.renderer

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// const geometry = new THREE.SphereGeometry(15, 32, 16);
// const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xff2ef
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
const pointLight = new THREE.PointLight(0xffef78);
pointLight.position.set(5, 5);
const amb = new THREE.AmbientLight(0xffef78);
scene.add(pointLight, amb);
const lightHelper = new THREE.PointLightHelper(pointLight);
const grid = new THREE.GridHelper(200, 50);
scene.add(lightHelper, grid);
const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(300).fill().forEach(addStar);
//back
const spacetexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spacetexture;
//cube
const jeffTexture = new THREE.TextureLoader().load("ranu.jpg");

const jeff = new THREE.Mesh(
  new THREE.BoxGeometry(6, 6, 6),
  new THREE.MeshBasicMaterial({ map: jeffTexture })
);

scene.add(jeff);

//earth
const moonTexture = new THREE.TextureLoader().load("earth.jpg");
const normalTexture = new THREE.TextureLoader().load("text.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

// jeff.position.z = -5;
// jeff.position.x = 2;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  moon.rotation.x += 0.01;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.01;
  jeff.rotation.x += 0.01;
  jeff.rotation.y += 0.005;
  jeff.rotation.z += 0.01;
  // torus.scale.x += 0.001;
  // torus.scale.y += 0.005;
  // torus.scale.z += 0.001;
  controls.update();
  renderer.render(scene, camera);
}

animate();