var lion=0;
var cat=0;
var dog=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qcmWSuPiG/model.json",modelready)
}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("nameresult").innerHTML="detected voice is of- " + result[0].label;
        document.getElementById("resultcount").innerHTML="detected dog-"+ dog + " ,detected cat- " + cat + " ,detected lion- " + lion;
        document.getElementById("resultcount").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("nameresult").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img=document.getElementById("animalImage");
         
        if(result[0].label=="Dog"){
           
            img.src="https://gifimage.net/wp-content/uploads/2017/10/cute-transparent-gif-10.gif";
          dog= dog+1;
        }
        else if(result[0].label=="Cat"){
            img.src="https://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-25.gif";
            cat= cat+1;
        }

        else if(result[0].label=="Lion"){
           
            img.src="https://gifimage.net/wp-content/uploads/2018/04/lion-animated-gif-9.gif";
            lion= lion+1;
        }
         
        else{
            
            img.src="200w.gif"; 
        }

    }

}