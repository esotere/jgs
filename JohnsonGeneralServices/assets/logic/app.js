$(function() {
   $("header").hide().slideDown(3000) 
   
   let video = $("#myVideo")
   let btn = $("myBtn")

  let myFunction = () => {
      
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
  }


    //==============================================================================
    //Slideshow
    //=======================
    let slideIndex = 0;
    let images = ["./assets/images/Construction-labor.jpg","./assets/images/jgsimage1.png", "./assets/images/johnsongeneralserviceslogo1.png", "./assets/images/jgsimageforgif.jpg", "./assets/images/jgsimageforplumber.jpg", "./assets/images/energy-download.jpg"];
    let t =  $("<img>").attr("src", images[0])
    // $("#left-img").append(t)

    let play = () => {
          let scroll = images.map(i => i);
          
          scroll.forEach(element => {
            $("#slideshow").empty()
            let r = $("<img>").attr("src", element).addClass("slides");
            // $("#left-content").append(r);
          r.appendTo("#slideshow")
          });
          slideIndex++;
          if (slideIndex > images.length) {
            slideIndex = 1
          } 
         let t = $("<img>").attr("src", images[slideIndex-1]).addClass("slides2");
        //  let t = $("<img>").attr("src", images[slideIndex-1]).css("display", "block");

         t.appendTo("#slideshow");
        //  x[myIndex-1].style.display = "block";  
          setTimeout(play, 45000); // Change image every 9 seconds

        //   setInterval(function() {
            // $('#slideshow > div:first')
            //   .fadeOut(8000)
            //   .next()
            //   .fadeIn(3000)
            //   .end()
            //   .appendTo('#slideshow');
        //   }, 3000);
          
        }
        play()

    //===================================================================================
    
})