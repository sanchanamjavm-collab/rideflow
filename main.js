const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);

const roadGeometry = new THREE.PlaneGeometry(10, 200);
const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = -Math.PI / 2;
scene.add(road);

const bikeGeometry = new THREE.BoxGeometry(1, 1, 2);
const bikeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const bike = new THREE.Mesh(bikeGeometry, bikeMaterial);
bike.position.y = 0.5;
scene.add(bike);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
