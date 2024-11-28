// variable to hold a reference to our A-Frame world
let world;

// variables to hold our models
let robot, dog;

function setup() {
    // no canvas needed
    noCanvas();

    // construct the A-Frame world
    // this function requires a reference to the ID of the 'a-scene' tag in our HTML document
    world = new AFrameP5.World('VRScene');

    // set up a background color
    world.setBackground(0, 0, 0);

    // create a base plane
    let basePlane = new AFrameP5.Plane({
        x: 0, y: 0, z: 0, width: 100, height: 100, asset: 'stone', rotationX: -90, repeatX: 100, repeatY: 100
    });
   // world.add(basePlane);

    // add a Wavefront (OBJ) model
    // you need to make sure to reference both the OBJ and MTL file here (geometry & material are stored separately)
    // refer to the 'index.html' file to see how these were pre-loaded into the scene
    pumpkin = new AFrameP5.OBJ({
        asset: 'pumpkin_obj',
        mtl: 'pumpkin_mtl',
        x: 0,
        y: 0, //-0.05,
        z: 0,
      
        rotationX: 190, //might be the Y
        rotationY:266, //might be the X //270
        rotationZ: 250,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
    });
    world.add(pumpkin);

    // add a GL Tranmission Format (GLTF) model
    // this was also pre-loaded in the 'index.html' file
    // p5js online does not seem to like gltf files
}

function draw() {
    //pumpkin.spinY(0);
}
