$(document).ready(function() {
   $('.pancake').hide();
   $('.spaghetti').hide();
   $('.spicypork').hide();
   $('.pasta').hide();
   $('.chickenpotato').hide();
   $('.potatofrittata').hide();
   $('.pizzatomato').hide();
   $('.vanillamilkshake').hide();
});
$(document).ready(function(){
  $('.recipe-button').click(function(){
    $('.pancake').show();
    $('.spaghetti').show();
    $('.spicypork').show();
    $('.pasta').show();
    $('.chickenpotato').show();
    $('.potatofrittata').show();
    $('.pizzatomato').show();
    $('.vanillamilkshake').show();
  })});

$(document).ready(function(){
  $("#flour,#sugar,#egg,#milk,#oil").change(function() {
    if (this.checked){
  $(".recipe-button").click(function(){
      $('.pancake').show();
    })
  }})});

  $(document).ready(function(){
    $("#butter, #garlic, #oil").change(function() {
      if (this.checked){
    $(".recipe-button").click(function(){
        $('.spaghetti').show();
      })
    }})});

    $(document).ready(function(){
      $("#oil").change(function() {
        if (this.checked){
      $(".recipe-button").click(function(){
          $('.spicypork').show();
        })
      }})});

      $(document).ready(function(){
        $("#oil,#pasta,#garlic,#tomato").change(function() {
          if (this.checked){
        $(".recipe-button").click(function(){
            $('.pasta').show();
          })
        }})});

      $(document).ready(function(){
          $("#oil, #potato, #tomato").change(function() {
            if (this.checked){
          $(".recipe-button").click(function(){
              $('.chickenpotato').show();
            })
          }})});

      $(document).ready(function(){
              $("#potato,#egg").change(function() {
                if (this.checked){
              $(".recipe-button").click(function(){
                  $('.potatofrittata').show();
                })
              }})});
        $(document).ready(function(){
          $("#tomato").change(function() {
            if (this.checked){
              $(".recipe-button").click(function(){
                $('.pizzatomato').show();
            })
}})});

$(document).ready(function(){
  $("#milk").change(function() {
    if (this.checked){
      $(".recipe-button").click(function(){
        $('.vanillamilkshake').show();
    })
}})});
