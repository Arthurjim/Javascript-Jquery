$(document).ready(function(){

$(".categorias").click(function(){
  var nombreC = $(this).attr('category');
  console.log(nombreC)



  function ocultarMovies() {
    $(".card").hide();  
   }setTimeout(ocultarMovies,300)


   function mostrarMovies() {
    $('.card[category="'+nombreC+'"]').show();
  }setTimeout(mostrarMovies,400)




   });

$(".categoria[category='todos']").click(function() {
  $(".card").show();
  
})
   
/*Mostrar  Modal */
$(".card").click(function(){
  var nombreCard = $(this).attr('nombre');
  console.log(nombreCard);



  function mostrarModal(){
    $('.modal[nombre="'+nombreCard+'"]').css("display", "flex");
    $('.modal[nombre="'+nombreCard+'"]').fadeIn(600,.5);
    $('.card').css("opacity",".5");
    $('nav').css("opacity",".5")
    $("#cate").prop("disabled", "false");
  }setTimeout(mostrarModal,500);

  
    $('.ocultarModal').click(function ocultarModal(){
        
      $('.modal').css("display","none");
    $('.card').css("opacity","1");
    $('nav').css("opacity","1")
    })
      
  


})
});

