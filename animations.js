var animating = false;

function animateCube () 
{
    if (animating) 
    {
        requestAnimationFrame( animateCube );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    }
}

function doAnimateCheckbox() 
{
    var anim = document.getElementById("animate").checked;
    if (anim != animating) 
    {
        animating = anim;
        
        if (animating) 
        {
            animateCube();
            animateRengPrism();
            animateSphere();
            animatePyramid();
            animateCone();
            animateTop();
		}
    }  
}