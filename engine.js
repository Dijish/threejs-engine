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

    //DAT.GUI Related Stuff
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

    // Instantiate a loader
    var loader = new THREE.GLTFLoader();
    // //Load a glTF resource
    loader.load('models/engine2/untitled1.gltf',// resource URL
        function ( gltf ) { // called when the resource is loaded
            scene.add( gltf.scene );
        },function ( xhr ) {// called while loading is progressing
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },function ( error ) {// called when loading has errors
            console.log( 'An error happened' );
        }
    );

    // Load Object
    // var loader=new THREE.ObjectLoader();
    // loader.load("models/engine1/jet_engine.obj",function(object){
    //     scene.add(object);
    // },function ( err ) {
    //     console.error( 'An error happened',err );
    // });
    
    camera.rotation.x = 3;  
    camera.rotation.z = 3;
    camera.rotation.y = -1;

    camera.position.x = -34; 
    camera.position.z = -5;
    camera.position.y = -1;

    // Circle 1
    var geometry = new THREE.CircleGeometry( 0.5, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdf4b4e } );
    circle1 = new THREE.Mesh( geometry, material );
    //circle1.rotateX( 300 );
    circle1.position.y=6.4;
    circle1.position.x=2;
    circle1.position.z=2.2;
    circle1.callback = function() { alert("Open issues of Cockpit"); }
    
    scene.add( circle1 );
    controls.update();
    var loader = new THREE.FontLoader();
    loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
        var geometry = new THREE.TextGeometry( '1', {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
        } );
        var materials = [
            new THREE.MeshBasicMaterial( { color: 0xffffff } ),
            new THREE.MeshBasicMaterial( { color: 0x000000 } )
        ];
        var mesh = new THREE.Mesh( geometry, materials );
        //mesh.rotateX( 300 );
        mesh.position.y=6.2;
        mesh.position.x=1.8;
        mesh.position.z=2.2;
        scene.add( mesh );
        scene.add( mesh );
    } );

    // Circle 2
    var geometry = new THREE.CircleGeometry( 0.5, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdf4b4e } );
    circle2 = new THREE.Mesh( geometry, material );
    //circle2.rotateZ( 100 );
    circle2.position.y=6.6;
    circle2.position.x=9;
    circle2.position.z=-2;
    circle2.rotation.y=-11;
    circle2.rotation.x=1;
    circle2.rotation.z=3.29;
    circle2.callback = function() { alert("Open issues of Right Wing"); }
    scene.add( circle2 );
    controls.update();
    var loader = new THREE.FontLoader();
    loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
        var geometry = new THREE.TextGeometry( '1', {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
        } );
        var materials = [
            new THREE.MeshBasicMaterial( { color: 0xffffff } ),
            new THREE.MeshBasicMaterial( { color: 0x000000 } )
        ];
        var mesh = new THREE.Mesh( geometry, materials );
        //mesh.rotateX( 300 );
        mesh.position.y=6.4;
        mesh.position.x=9.1;
        mesh.position.z=-1.7;
        mesh.rotation.y=-11;
        mesh.rotation.x=10.2;
        mesh.rotation.z=2.3;
        scene.add( mesh );
    } );

    // Circle 3
    var geometry = new THREE.CircleGeometry( 0.5, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdf4b4e } );
    circle3 = new THREE.Mesh( geometry, material );
    //circle3.rotateX( 180 );
    circle3.position.y=6.2;
    circle3.position.x=7.1;
    circle3.position.z=-4.6;
    circle3.rotation.y=-13;
    circle3.rotation.x=3.1;
    circle3.rotation.z=-7.3;
    circle3.callback = function() { alert("Open issues of Left Engine"); }
    scene.add( circle3 );
    controls.update();
    var loader = new THREE.FontLoader();
    loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
        var geometry = new THREE.TextGeometry( '1', {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
        } );
        var materials = [
            new THREE.MeshBasicMaterial( { color: 0xffffff } ),
            new THREE.MeshBasicMaterial( { color: 0x000000 } )
        ];
        var mesh = new THREE.Mesh( geometry, materials );
        //mesh.rotateX( 300 );
        mesh.position.y=6;
        mesh.position.x=7.3;
        mesh.position.z=-4.8;
        mesh.rotation.y=10;
        mesh.rotation.x=0;
        mesh.rotation.z=0;

        // var box = gui.addFolder('number');
        // box.add(mesh.position, 'x', -10, 10).name('x').listen();
        // box.add(mesh.position, 'y', -10, 10).name('y').listen();
        // box.add(mesh.position, 'z', -10, 10).name('z').listen();
        // box.add(mesh.rotation, 'x', -20, 20).name('ro-x').listen();
        // box.add(mesh.rotation, 'y', -20, 20).name('ro-y').listen();
        // box.add(mesh.rotation, 'z', -20, 10).name('ro-z').listen();
        // box.open();

        scene.add( mesh );
    } );

    // Circle 4
    var geometry = new THREE.CircleGeometry( 0.5, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdf4b4e } );
    circle4 = new THREE.Mesh( geometry, material );
    //circle4.rotateX( 300 );
    circle4.position.y=8.9;
    circle4.position.x=-0.4;
    circle4.position.z=-5.3;
    circle4.rotation.y=-19;
    circle4.rotation.x=-3.1;
    circle4.rotation.z=-3.7;
    circle4.callback = function() { alert("Open issues of Right Wing"); }

    circle4.callback = function() { alert("Open issues of Right Engine"); }
    
    scene.add( circle4 );
    controls.update();
    var loader = new THREE.FontLoader();
    loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
        var geometry = new THREE.TextGeometry( '1', {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
        } );
        var materials = [
            new THREE.MeshBasicMaterial( { color: 0xffffff } ),
            new THREE.MeshBasicMaterial( { color: 0x000000 } )
        ];
        var mesh = new THREE.Mesh( geometry, materials );
        //mesh.rotateX( 300 );
        mesh.position.y=8.6;
        mesh.position.x=-0.21;
        mesh.position.z=-5.5;
        mesh.rotation.y=-13;
        mesh.rotation.x=-3.1;
        mesh.rotation.z=-3.3;
        
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