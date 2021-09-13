import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//we need 3 things 1.camera 2.screen  3.renderer

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
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

const donut = new THREE.TextureLoader().load("earth.jpg");
const pink = new THREE.TextureLoader().load("text.jpg");
const life = new THREE.TextureLoader().load("life.jpg");
const geometry = new THREE.SphereGeometry(16, 30, 100);
const material = new THREE.MeshStandardMaterial({
  map: donut,
  normalTexture: pink
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffef78);
pointLight.position.set(5, 5);
const amb = new THREE.AmbientLight(0xffef78);
scene.add(pointLight, amb);
const lightHelper = new THREE.PointLightHelper(pointLight);
const grid = new THREE.GridHelper(400, 100);
scene.add(lightHelper, grid);
const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 240, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(800));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(600).fill().forEach(addStar);
//back
const spacetexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spacetexture;
//cube
const jeffTexture = new THREE.TextureLoader().load("aster.jpg");

const jeff = new THREE.Mesh(
  new THREE.SphereGeometry(1, 10, 6),
  new THREE.MeshBasicMaterial({ map: jeffTexture })
);

scene.add(jeff);
const a = new THREE.Mesh(
  new THREE.SphereGeometry(1, 10, 6),
  new THREE.MeshBasicMaterial({ map: jeffTexture })
);

scene.add(a);
//

//earth
const moonTexture = new THREE.TextureLoader().load("earth.jpg");
const normalTexture = new THREE.TextureLoader().load("text.jpg");
const mercury = new THREE.TextureLoader().load("mercury.jpg");
const venus = new THREE.TextureLoader().load("venus.jpg");
const earth = new THREE.TextureLoader().load("earthh.jpg");
const mars = new THREE.TextureLoader().load("mars.jpg");
const j = new THREE.TextureLoader().load("jupiter.jpg");
const s = new THREE.TextureLoader().load("saturn.jpg");
const u = new THREE.TextureLoader().load("uranus.jpg");
const n = new THREE.TextureLoader().load("neptune.jpg");

// const moon = new THREE.Mesh(
//   new THREE.SphereGeometry(3, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: moonTexture,
//     normalMap: normalTexture
//   })
// );

// scene.add(moon);

// const moonn = new THREE.Mesh(
//   new THREE.SphereGeometry(3, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: moonTexture,
//     normalMap: normalTexture
//   })
// );

// scene.add(moonn);
//mercury
const mercuryp = new THREE.Mesh(
  new THREE.SphereGeometry(2, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercury
  })
);

scene.add(mercuryp);

//venus
const venusp = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venus
  })
);

scene.add(venusp);

const earthlife = new THREE.Mesh(
  new THREE.BoxGeometry(15, 15, 15),
  new THREE.MeshBasicMaterial({ map: life })
);

scene.add(earthlife);
//earth
const earthp = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earth
  })
);

scene.add(earthp);
//mars
const marsp = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mars
  })
);

scene.add(marsp);
//jupyter
const jp = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: j
  })
);

scene.add(jp);
//saturn
const sp = new THREE.Mesh(
  new THREE.SphereGeometry(7, 32, 32),
  new THREE.MeshStandardMaterial({
    map: s
  })
);

scene.add(sp);
//uranus
const up = new THREE.Mesh(
  new THREE.SphereGeometry(8, 32, 32),
  new THREE.MeshStandardMaterial({
    map: u
  })
);

scene.add(up);
//neptune
const np = new THREE.Mesh(
  new THREE.SphereGeometry(9, 32, 32),
  new THREE.MeshStandardMaterial({
    map: n
  })
);

scene.add(np);

// torus.position.z = 60;
// torus.position.setX(-40);
// torus.position.z = -60;
// torus.position.setX(-40);
a.position.z = -200;
a.position.x = -140;
mercuryp.position.z = -10;
mercuryp.position.setX(0);
venusp.position.z = -20;
venusp.position.setX(10);
earthp.position.z = 40;
earthp.position.setX(-10);
marsp.position.z = 60;
marsp.position.setX(10);
jp.position.z = 80;
jp.position.setX(-14);
sp.position.z = 100;
sp.position.setX(6);
up.position.z = 120;
up.position.setX(-34);
np.position.z = 140;
np.position.setX(26);
jeff.position.z = 140;
jeff.position.x = 120;
// earthlife.position.setZ(-0);
// earthlife.position.z = -10;

// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;
//   moon.rotation.x += 0.05;
//   moon.rotation.y += 0.075;
//   moon.rotation.z += 0.05;

// jeff.rotation.y += 0.01;
// jeff.rotation.z += 0.01;

//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.rotation.y = t * -0.0002;
// }

// document.body.onscroll = moveCamera;
// moveCamera();

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  earthp.rotation.x += 0.01;
  earthp.rotation.y += 0.005;
  earthp.rotation.z += 0.01;
  marsp.rotation.x += 0.01;
  marsp.rotation.y += 0.005;
  marsp.rotation.z += 0.01;
  jp.rotation.x += 0.01;
  jp.rotation.y += 0.005;
  jp.rotation.z += 0.01;
  sp.rotation.x += 0.01;
  sp.rotation.y += 0.005;
  sp.rotation.z += 0.01;
  up.rotation.x += 0.01;
  up.rotation.y += 0.005;
  up.rotation.z += 0.01;
  np.rotation.x += 0.01;
  np.rotation.y += 0.005;
  np.rotation.z += 0.01;
  venusp.rotation.x += 0.01;
  venusp.rotation.y += 0.005;
  venusp.rotation.z += 0.01;
  mercuryp.rotation.x += 0.01;
  mercuryp.rotation.y += 0.005;
  mercuryp.rotation.z += 0.01;
  jeff.rotation.x += 0.01;
  jeff.rotation.y += 0.005;
  jeff.rotation.z += 0.01;
  jeff.scale.x += 0.1;
  jeff.scale.y += 0.1;
  jeff.scale.z += 0.1;
  a.rotation.x += 0.01;
  a.rotation.y += 0.005;
  a.rotation.z += 0.01;
  // earthlife.rotation.x += 0.007;
  // earthlife.rotation.y += 0.005;
  // earthlife.rotation.z += 0.007;
  a.scale.x -= 0.01;
  a.scale.y -= 0.01;
  a.scale.z -= 0.01;
  // earthlife.scale.x -= 0.01;
  // earthlife.scale.y -= 0.01;
  // earthlife.scale.z -= 0.01;
  // sp.scale.x += 0.1;
  // sp.scale.y += 0.1;
  // sp.scale.z += 0.1;
  controls.update();
  renderer.render(scene, camera);
}

animate();
