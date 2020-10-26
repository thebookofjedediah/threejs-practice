var cube;

var cube_texture = null;
var cube_material;

function doChangeMaterial1() 
{
    if (document.getElementById("cubeTexture").checked) 
    {
        cube_material.map = cube_texture;
    }
    else 
    {
        cube_material.map = null;
    }

    cube_material.needsUpdate = true;
    renderer.render( scene, camera );
}

function applyTexture1(textureURL, cube_material) 
{

    cube_texture = THREE.TextureLoader(textureURL);

    cube_material.map = cube_texture; 
    cube_material.needsUpdate = true;  
 }

function doCube()
{
    //  cube design
    const geometry = new THREE.BoxGeometry( 1, 1, 1);
    cube_material = new THREE.MeshLambertMaterial( { map: cube_texture } );
    cube = new THREE.Mesh(geometry, cube_material);
    scene.add( cube );

    cube.position.x = -2; 
    cube.position.y = 2;

	document.getElementById("animate").onchange = doAnimateCheckbox;
    document.getElementById("cubeTexture").checked = true;
    document.getElementById("cubeTexture").addEventListener("change", doChangeMaterial1, false);
    applyTexture1("textures/brick_diffuse.jpg", cube_material);
}


