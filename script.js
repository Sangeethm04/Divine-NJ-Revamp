function myFunction2() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  console.log("%cContact schery004@gmail.com to report issues with the website.", "color:red; font-size:25px;")

  function myFunction3() {
    var x = document.getElementById("myTopnav5");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

   /*EVENT FLYERS SCRIPT*/

   function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Use the same src in the expanded image as the image being clicked on from the grid
  expandedImg.src=imgs.src;
    // Show the container element (hidden with CSS)
expandImg.parentElement.style.display="block";
  }

