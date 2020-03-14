var stopVideo = function ( element ) {
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    if ( faces.size()==0 ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
        
    }
    else{
        video.pause();
    
    }
};
{/* <script async src="js/opencv.js" onload="openCvReady();"></script>
<script src="js/utils.js"></script> */}

//if (faces.size()==0){
  //  console.log("pause");
    //iframe.pause();
            

//}
//else{
  //  console.log("play");
    //iframe.play();