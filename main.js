noseX = ""
noseY = ""




function preload(){
       mustache = loadImage("https://i.postimg.cc/NfqxVZsj/mustacheimage.png")
       
}


function setup(){
mycanvas = createCanvas(700, 450)
mycanvas.position(350,175)
//mycanvas.center()

video = createCapture(VIDEO)
video.hide()

pN = ml5.poseNet(video,modalloaded)
pN.on('pose', gotPoses)

}


function draw(){
    image(video ,0,0,700,450)
    image(mustache , noseX+15, noseY-20,60,40) 
         
    //fill(255,0,0)
    //stroke(255,0,0)
    //circle(noseX,noseY,20) 
}

function modalloaded(){
   console.log("osnfodfbonposndponopnoanfnasodsofnosnfoasndfosaanfosdnsdfnsfdnbaBFosndosafosnsofnsnoasnf") 
}

function take_snapshot(){
    save("mustache.png")
}



function gotPoses(results){
console.log("prince")
    if(results.length > 0){
         console.log(results)
         noseX = results[0].pose.nose.x
         noseY = results[0].pose.nose.y
     
            }
}
 

