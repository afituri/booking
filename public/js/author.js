$(document).ready( function(){
  $('.editAuthor').on('click', function(){
    var authorId = $(this).val();
    var name = $('#author-'+authorId).data("name"),
        bio = $('#author-'+authorId).data("bio"),
        country = $('#author-'+authorId).data("country"),
        birtday = $('#author-'+authorId).data("birtday");
    birtday = new Date(birtday);
    $('#eName').val(name);
    $('#eId').val(authorId);
    $('#eCountry').val(country);
    $('#eBirtday').val(birtday.getFullYear()+"-"+(birtday.getMonth()+1)+"-"+birtday.getDate());
    $('#eBio').val(bio);
    
  });
  
  var msg = getUrlParameter('msg');
  if(msg==1){
    custNotify("success","نجح","تم التعديل بنجاح","ok-sign","bounceIn","bounceOut");
  } else if(msg==2){
    custNotify("danger","فشل","لم يتم التعديل","remove-sign","bounceIn","bounceOut");
  }  
});

