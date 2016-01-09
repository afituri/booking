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

  $('.deleteAuthor').on('click', function(){
    var authorId = $(this).val();
    $('#dId').val(authorId);
  });
  
  var msg = getUrlParameter('msg');
  if(msg==1){
    custNotify("success","نجح","تم التعديل بنجاح","ok-sign","bounceIn","bounceOut");
  } else if(msg==2){
    custNotify("danger","فشل","لم يتم التعديل","remove-sign","bounceIn","bounceOut");
  } else if(msg==3){
    custNotify("success","نجح","تم الحذف بنجاح","ok-sign","bounceIn","bounceOut");
  }
  /* add form validation*/
  jQuery.validator.addMethod("arabicLettersOnly", function(value, element) {
    return this.optional(element) || /^[أ-ي,ﻻ,ء]+$/i.test(value);
  }, "الرجاء ادخال حروف عربية فقط!");
  $("#addAuthor").validate({
    rules: {
      name: {
        required: true,
        arabicLettersOnly:true
      },
      birtday: "required"

    },
    messages: {
      name: {
        required : "الرجاء ادخال اسم المحرر",
        arabicLettersOnly : "الرجاء ادخال حروف عربية فقط"
      },
      birtday: "الرجاء ادخال مواليد المحرر",
    },
    highlight: function (element) {
      $(element).parent().addClass('error')
    },
    unhighlight: function (element) {
      $(element).parent().removeClass('error')
    }
  });
  // $(".selector").validate({
  //   rules: {
  //     name: "required",
  //     email: {
  //       required: true,
  //       email: true
  //     }
  //   },
  //   messages: {
  //     name: "Please specify your name",
  //     email: {
  //       required: "We need your email address to contact you",
  //       email: "Your email address must be in the format of name@domain.com"
  //     }
  //   }
  // });    
});

