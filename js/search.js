
//Search function for resource table
$(document).ready(function(){
  $("#searchResources").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#resourceTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
