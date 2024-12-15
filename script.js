 // Get the button element
 const scrollUpBtn = document.getElementById("scrollUpBtn");

 // Show the button when the user scrolls down
 window.onscroll = function() {
     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
         scrollUpBtn.style.display = "block";
     } else {
         scrollUpBtn.style.display = "none";
     }
 };

 // Scroll to the top function
 function scrollToTop() {
     window.scrollTo({
         top: 0,
         behavior: "smooth" // This adds smooth scrolling
     });
 }