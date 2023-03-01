moustache_X=0;
moustache_Y=0;

function preload()
{
    moustache_image = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    Video = createCapture(VIDEO)
    Video.size(300, 300)
    Video.hide()

    poseNet = ml5.poseNet(Video, modelLoaded)
    poseNet.on('pose', gotPoses)
    
}

function draw()
{
    image(Video, 0, 0, 300, 300);
    image(moustache_image, moustache_X, moustache_Y, 30, 30);
}

function snapshot()
{
    save("Filter.png")
}

function modelLoaded()
{
    console.log("Model loaded")
}

function gotPoses(results)
{
    if( results.length > 0 )
    {
        console.log(results)
        moustache_X = results[0].pose.nose.x-14
        moustache_Y = results[0].pose.nose.y
        console.log("moustache_x = " + moustache_X);
        console.log("moustache_y =" + moustache_Y);
    }
}
