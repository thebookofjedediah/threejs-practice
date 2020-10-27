let cube;
let cube_material;

// I got rid of the cube_texture variable - no need this way but if you want to bring it back I can

// This will result in a CORS error locally, to stop this run an http server. I added this to the README file
const loader = new THREE.TextureLoader();

// I added this just to shorten the code below
const textureCheckbox = document.getElementById("cubeTexture");

// Set all possible texture options in an array
let allTextures = [
    'textures/brick_diffuse.jpg',
    'textures/brick_bump.jpg',
    'textures/disturb.jpg',
    'textures/earth_atmos_4096.jpg',
    'textures/golfball.jpg',
    'textures/hardwood2_diffuse.jpg'
];

function doChangeMaterial1() {
    if (textureCheckbox.checked) {
        // select a random texture image and set it as the texture
        let randomTexture = Math.floor(Math.random()*allTextures.length);
        cube_material.map = loader.load(allTextures[randomTexture]) ;
    } else {
        cube_material.map = null;
    }

    cube_material.needsUpdate = true;
    renderer.render(scene, camera);
}


function doCube() {
    //  cube design
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    cube_material = new THREE.MeshLambertMaterial({ 
        map: null
    });
    cube = new THREE.Mesh(geometry, cube_material);
    scene.add( cube );

    cube.position.x = -2; 
    cube.position.y = 2;

	document.getElementById("animate").onchange = doAnimateCheckbox;
    textureCheckbox.checked = false;
    textureCheckbox.addEventListener("change", doChangeMaterial1);
}
