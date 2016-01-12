window.onload=function() {
  var vid1 = document.getElementById("vid1");
  var vid2 = document.getElementById("vid2");
  var vid3 = document.getElementById("vid3");
  
  var buttonP1 = document.getElementById("playVid1");
  buttonP1.addEventListener("click", function(){vidplay(vid1, buttonP1)});

  var buttonS1 = document.getElementById("stopVid1");
  buttonS1.addEventListener("click", function(){vidStop(vid1, buttonP1)});


  var buttonP2 = document.getElementById("playVid2");
  buttonP2.addEventListener("click", function(){vidplay(vid2, buttonP2)});

  var buttonS2 = document.getElementById("stopVid2");
  buttonS2.addEventListener("click", function(){vidStop(vid2, buttonP2)});


  var buttonP3 = document.getElementById("playVid3");
  buttonP3.addEventListener("click", function(){vidplay(vid3, buttonP3)});

  var buttonS3 = document.getElementById("stopVid3");
  buttonS3.addEventListener("click", function(){vidStop(vid3, buttonP3)});


  function vidplay(videoID, buttonID) {
  
       if (videoID.paused) {
          videoID.play();
          buttonID.textContent = "❚❚";
       } else {
          videoID.pause();
          buttonID.textContent = "▶";
       }
    };

  function vidStop(videoID, playButtonID) {
    videoID.pause();
    videoID.currentTime = 0;
    playButtonID.textContent = "▶";
  };
};