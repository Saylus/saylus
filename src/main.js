var myNav = document.getElementById('navbar');
window.onscroll = function  scrollFunction() {
  var $nav = $("#navbar");
  var maincon=$('.centrr')
  $nav.toggleClass('div1', $(this).scrollTop() > maincon.height()+$nav.height());
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "white";
    items=document.getElementsByClassName("navlink");
    for (var i=0; i < items.length; i++) {
      items[i].style.color = "#BABABA";
    }
    
  } else {
    document.getElementById("navbar").style.backgroundColor = "";
    items=document.getElementsByClassName("navlink");
    for (var i=0; i < items.length; i++) {
      items[i].style.color = "white"; 
    }
  }
}
