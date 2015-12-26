$(document).ready( function(){
  //$flag = false;
  $('#newBook').on('click', function(){
    $('#categories').empty();
    $('#authors').empty();
    $.get('/author/getAll', function(result){
      //console.log(result);
      $.each(result, function(key, value) {
        console.log(value.name);   
        $('#authors').append($("<option></option>").attr("value",value.id).text(value.name)).selectpicker('refresh'); 
      });
    });
    $.get('/category/getAll', function(result){
      //console.log(result);
      $.each(result, function(key, value) {
        console.log(value.name);   
        $('#categories').append($("<option></option>").attr("value",value.id).text(value.name)).selectpicker('refresh'); 
      });
    });
  });  
  /* on show Details click*/
  $('.showDetails').on('click' , function(){
    var id = $(this).val();
    $.get('/book/getDetails/'+id, function(results){
      var rows = "";
      $('#authorNames').empty();
      for (index in results.Authors){
        rows += "<tr><td>"+results.Authors[index].name+"</td></tr>";
      }
      $(rows).appendTo($('#authorNames'));
      $('#bookModal').modal('show');
    })
  });
});

