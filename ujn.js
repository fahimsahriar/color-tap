console.log("connected");
let a = 'shishir';
console.log(a);
$("ul li a").css("font-size","1.3rem");
$(document).ready(function(){
        $("#Reset2").click(function(){
          //alert("Your name is "+$("#this").val());
          $("h1").toggleClass("newclass2");
        });
        $("input").on("keypress",function(){
          $("h1").toggleClass("newclass2");
        })
        $(".box").click(function(){
          $(".box").removeClass("newclass3");
          $(this).toggleClass("newclass");
        });
        $("#Reset1").click(function(){
          $(".box").addClass("newclass3");
        });
      });
