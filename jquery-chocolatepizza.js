$(function() {
    $( document ).tooltip();
  });

$(function () {
    $('input:checkbox').on('change', function () {
        var input = $(this).next('span');
        if (this.checked) {
            $(input).addClass('checked');
        } else { 
            $(input).removeClass('checked');
        }
    })
})
   


   

