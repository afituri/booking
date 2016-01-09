$(document).ready( function(){
  $('.editCustomer').on('click', function(){
    var customerId = $(this).val();
    var name = $('#customer-'+customerId).data("name"),
        email = $('#customer-'+customerId).data("email"),
        phone = $('#customer-'+customerId).data("phone"),
        idNumber = $('#customer-'+customerId).data("idNumber");
    $('#eName').val(name);
    $('#eId').val(customerId);
    $('#eEmail').val(email);
    $('#ePhone').val(phone);
    $('#eIdNmuber').val(idNumber);
  });
  
  var msg = getUrlParameter('msg');
  if(msg==1){
    custNotify("success","نجح","تم التعديل بنجاح","ok-sign","bounceIn","bounceOut");
  } else if(msg==2){
    custNotify("danger","فشل","لم يتم التعديل","remove-sign","bounceIn","bounceOut");
  }  
});
