var renderer,camera,circle1,circle2,circle3,circle4;

function init() {

    var container = document.getElementById("aircraft-canvas");
    var CANVAS_WIDTH = window.innerWidth;
    var CANVAS_HEIGHT = window.innerHeight;

    var scene=new THREE.Scene();
    //scene.background = new THREE.Color( 0xff0000 );//new THREE.TextureLoader().load( "images/ground.jpeg" );//new THREE.Color( 0x000000 );
    camera=new THREE.PerspectiveCamera(45,CANVAS_WIDTH/CANVAS_HEIGHT,1,1000);
    
    renderer=new THREE.WebGLRenderer( { alpha: true });
    renderer.setSize(CANVAS_WIDTH,CANVAS_HEIGHT);
    renderer.autoClear = false;
    renderer.setClearColor( 0x000000, 0 ); 
    container.appendChild( renderer.domElement );

    // Update Viewport on Resize
    window.addEventListener('resize',function(){
        var width=CANVAS_WIDTH;
        var height=CANVAS_HEIGHT;
        renderer.setSize(width,height);
        camera.aspect=width/height;
        camera.updateProjectionMatrix();
    });

    // Add orbit controls
    controls=new THREE.OrbitControls(camera,renderer.domElement);


    /* Lighting */
    // Ambient Light
    var ambientLight=new THREE.AmbientLight(0xFFFFFF,1.5);
    scene.add(ambientLight);


    // Options to be added to the GUI
    var options = {
        camera: {
            speed: 0.0001
        }
    };

    // //DAT.GUI Related Stuff
    // var gui = new dat.GUI();
    // var cam = gui.addFolder('Camera');
    // cam.add(options.camera, 'speed', 0, 0.0010).listen();
    // cam.add(camera.rotation, 'x', -100, 100).listen();
    // cam.add(camera.rotation, 'y', -100, 100).listen();
    // cam.add(camera.rotation, 'z', -100, 100).listen();
    // cam.add(camera.position, 'x', -100, 100).listen();
    // cam.add(camera.position, 'y', -100, 100).listen();
    // cam.add(camera.position, 'z', -100, 100).listen();
    // cam.open();

    // model
    var loader = new THREE.FBXLoader();
    loader.load( 'models/untitled.fbx', function ( object ) {
        scene.add( object );
    } );

    camera.rotation.x = 0;  
    camera.rotation.z = 0;
    camera.rotation.y = 0;

    camera.position.x = 17; 
    camera.position.z = 177;
    camera.position.y = 12;

    // Circle 1
    var geometry = new THREE.CircleGeometry( 4, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdf4b4e } );
    circle1 = new THREE.Mesh( geometry, material );
    //circle1.rotateX( 300 );
    circle1.position.y=-3;
    circle1.position.x=-17;
    circle1.position.z=-28;
    circle1.callback = function() { alert("Open issues of Right Engine"); }
    // var box = gui.addFolder('circle');
    // box.add(circle1.position, 'x', -70, 70).name('x').listen();
    // box.add(circle1.position, 'y', -70, 70).name('y').listen();
    // box.add(circle1.position, 'z', -70, 70).name('z').listen();
    // box.add(circle1.rotation, 'x', -70, 70).name('ro-x').listen();
    // box.add(circle1.rotation, 'y', -70, 70).name('ro-y').listen();
    // box.add(circle1.rotation, 'z', -70, 70).name('ro-z').listen();
    // box.open();
    circle1.callback = function() { alert("Open issues of Cockpit"); }
    scene.add( circle1 );
    controls.update();
    var loader = new THREE.FontLoader();
    loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
        var geometry = new THREE.TextGeometry( '1', {
            font: font,
            size: 4,
            height: 0,
            curveSegments: 5,
        } );
        var materials = [
            new THREE.MeshBasicMaterial( { color: 0xffffff } ),
            new THREE.MeshBasicMaterial( { color: 0x000000 } )
        ];
        var mesh = new THREE.Mesh( geometry, materials );
        //mesh.rotateX( 300 );
        mesh.position.y=-4.5;
        mesh.position.x=-20;
        mesh.position.z=-27.5;
        // var box = gui.addFolder('number');
        // box.add(mesh.position, 'x', -70, 70).name('x').listen();
        // box.add(mesh.position, 'y', -70, 70).name('y').listen();
        // box.add(mesh.position, 'z', -70, 70).name('z').listen();
        // box.open();
        scene.add( mesh );
        scene.add( mesh );
    } );

    // Circle 2
    var geometry = new THREE.CircleGeometry( 4, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdf4b4e } );
    circle2 = new THREE.Mesh( geometry, material );
    //circle2.rotateX( 300 );
    circle2.position.y=-3;
    circle2.position.x=63;
    circle2.position.z=-11;
    circle2.callback = function() { alert("Open issues of Right Engine"); }
    scene.add( circle2 );
    controls.update();
    var loader = new THREE.FontLoader();
    loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
        var geometry = new THREE.TextGeometry( '2', {
            font: font,
            size: 4,
            height: 0,
            curveSegments: 5,
        } );
        var materials = [
            new THREE.MeshBasicMaterial( { color: 0xffffff } ),
            new THREE.MeshBasicMaterial( { color: 0x000000 } )
        ];
        var mesh = new THREE.Mesh( geometry, materials );
        //mesh.rotateX( 300 );
        mesh.position.y=-4.5;
        mesh.position.x=61.5;
        mesh.position.z=-10.9;
        scene.add( mesh );
        scene.add( mesh );
    } );

    // Circle 3
    var geometry = new THREE.CircleGeometry( 4, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdf4b4e } );
    circle3 = new THREE.Mesh( geometry, material );
    //circle3.rotateY( 250 );
    circle3.position.y=4.5;
    circle3.position.x=34;
    circle3.position.z=21;
    // circle3.rotation.y=-7;
    // circle3.rotation.x=-6.5;
    // circle3.rotation.z=9;
    circle3.callback = function() { alert("Open issues of Left Engine"); }
    scene.add( circle3 );
    controls.update();
    var loader = new THREE.FontLoader();
    loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
        var geometry = new THREE.TextGeometry( '1', {
            font: font,
            size: 4,
            height: 0,
            curveSegments: 5,
        } );
        var materials = [
            new THREE.MeshBasicMaterial( { color: 0xffffff } ),
            new THREE.MeshBasicMaterial( { color: 0x000000 } )
        ];
        var mesh = new THREE.Mesh( geometry, materials );
        //mesh.rotateX( 300 );
        mesh.position.y=3.4;
        mesh.position.x=32;
        mesh.position.z=21.5;
        // mesh.rotation.y=-7;
        // mesh.rotation.x=-6.5;
        // mesh.rotation.z=9;
        scene.add( mesh );
        scene.add( mesh );
    } );

    // Circle 4
    var geometry = new THREE.CircleGeometry( 4, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdf4b4e } );
    circle4 = new THREE.Mesh( geometry, material );
    //circle4.rotateX( 240 );
    circle4.position.y=14.4;
    circle4.position.x=50;
    circle4.position.z=-15;
    circle4.callback = function() { alert("Open issues of Right Engine"); }
    scene.add( circle4 );
    controls.update();
    var loader = new THREE.FontLoader();
    loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
        var geometry = new THREE.TextGeometry( '1', {
            font: font,
            size: 4,
            height: 0,
            curveSegments: 5,
        } );
        var materials = [
            new THREE.MeshBasicMaterial( { color: 0xffffff } ),
            new THREE.MeshBasicMaterial( { color: 0x000000 } )
        ];
        var mesh = new THREE.Mesh( geometry, materials );
        //mesh.rotateX( 300 );
        mesh.position.y=12;
        mesh.position.x=48;
        mesh.position.z=-14.5;
        scene.add( mesh );
        scene.add( mesh );
    } );

    var update=function(){  
        controls.autoRotate=true;
        controls.update();
    }

    // Draw Scene
    var render=function(){
        renderer.render(scene,camera);
    }

    // Run game loop (update, render, repeat)
    var GameLoop=function(){
        requestAnimationFrame(GameLoop);
        update();
        render();
    }

    GameLoop();
}

window.onload = function() {
    init();

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    // See https://stackoverflow.com/questions/12800150/catch-the-click-event-on-a-specific-mesh-in-the-renderer
    // Handle all clicks to determine of a three.js object was clicked and trigger its callback
    function onDocumentMouseDown(event) {
        event.preventDefault();
        mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var meshObjects = [circle1,circle2,circle3,circle4]; // three.js objects with click handlers we are interested in
        var intersects = raycaster.intersectObjects(meshObjects);
        if (intersects.length!= 0) {
            intersects[0].object.callback();
        }

    }

    // Using the same logic as above, determine if we are currently mousing over a three.js object,
    // and adjust the animation to provide visual feedback accordingly
    function onDocumentMouseMove(event) {
        event.preventDefault();
        mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects([circle1,circle2,circle3,circle4]);
        var canvas = document.body.getElementsByTagName('canvas')[0];
        if (intersects.length != 0) {
            intersects[0].object.rotation.x += .005;
            canvas.style.cursor = "pointer";
        } else {
            canvas.style.cursor = "default";
        }

    }
    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
};