$("form").on("submit", function(event){
    event.preventDefault();
    makeList(); 
  $('#title').val('');
  $("#rating").val('');
});

function makeList(){
    let $value = $("#title").val();
    let $rating = $("#rating").val();
    let $li = $("<li class = 'list'></li>").text($value);
    let $ratingDiv = $("<div class = 'ratingDiv'></div>").text("Stars \u2606 :" + " " + $rating);
    let $deleteBtn = ("<button class = 'del'>Delete</button>");
   
   $($li).append( $ratingDiv, $deleteBtn);
   $("#movies-ul").append($li);
  
}

$("#movies-ul").on("click", function(event){
  console.log(event.target);
  
if (event.target.tagName === 'BUTTON'){
  event.target.parentElement.remove();
}
})
