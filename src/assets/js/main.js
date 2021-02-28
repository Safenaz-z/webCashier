$( document ).ready(function() {
//Avoid dropdown menu close on click inside
$("#Dropdown").click(function(e){
  e.stopPropagation();
})
//side menu overlay
    $('#navbarSideButton').on('click', function() {
      $('#navbarSide').addClass('reveal')
    });
      // Open navbarSide when button is clicked
      $('#navbarSideButton').on('click', function() {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
      });

      // Close navbarSide when the outside of menu is clicked
      $('.overlay').on('click', function(){
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
      });

  });

  //toggle favourite icon
  function swap(){
    let img1= document.getElementById('favauriteIcon1');
      img2= document.getElementById('favauriteIcon2');
      img1src=img1.src;
      img1.style.display='none'
      img2.style.display='block'
    // img1.src="imgs/client_icon.svg"
  }
  function Toggleswap(){
    let img1= document.getElementById('favauriteIcon1');
    img2= document.getElementById('favauriteIcon2');
    img1src=img1.src;
    img1.style.display='block'
    img2.style.display='none'
  }
