var scene, camera, renderer;

// LIGHTS
var pointLight1 = new THREE.PointLight(0xffffff, 1.5, 800);
var pointLight2 = new THREE.PointLight(0xffffff, 1.5, 800);
var ambientLight = new THREE.AmbientLight(0xE686E6, 1.0);
var spotLight = new THREE.SpotLight( 0x2866EF);

function setPointLighting1() 
{
    scene.remove(pointLight2);
    scene.remove(ambientLight);
    scene.remove(spotLight);

    if (document.getElementById("pointLight1").checked) 
    {
        pointLight1.position.set( 55, 55, 15 );     

        scene.add(pointLight1);
    }
}

function setPointLighting2() 
{
    scene.remove(pointLight1);
    scene.remove(ambientLight);
    scene.remove(spotLight);

    if (document.getElementById("pointLight2").checked) 
    {
        pointLight2.position.set( -55, -55, -15);         

        scene.add(pointLight2);
    }
}

function setPointLighting1n2() 
{
    scene.remove(ambientLight);
    scene.remove(spotLight);

    if (document.getElementById("pointLight1n2").checked) 
    {
        pointLight1.position.set( 55, 55, 15 );    
        pointLight2.position.set( -55, -55, -15);         

        scene.add(pointLight1);
        scene.add(pointLight2);
    }
}

function setSpotLighting() 
{
    scene.remove(ambientLight);
    scene.remove(pointLight1);
    scene.remove(pointLight2);

    if (document.getElementById("spotLight").checked) 
    {
        spotLight.position.set( 100, 100, 100 );
        spotLight.castShadow = true;
        
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        
        spotLight.shadow.camera.near = 500;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 30;
        
        scene.add( spotLight );
    }
}

function setAmbientLighting() 
{
    scene.remove(pointLight1);
    scene.remove(pointLight2);
    scene.remove(spotLight);

    if (document.getElementById("ambientLight").checked) 
    {
        scene.add(ambientLight);
    }
}

function cameraDisplay()
{
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    camera.position.z = 7;

    document.getElementById("pointLight1").onchange = setPointLighting1;
    document.getElementById("pointLight2").onchange = setPointLighting2;
    document.getElementById("pointLight1n2").onchange = setPointLighting1n2;
    document.getElementById("spotLight").onchange = setSpotLighting;
    document.getElementById("ambientLight").onchange = setAmbientLighting;
}


function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight );
}

window.addEventListener('resize', onWindowResize, false);

