$('#update').click(function(){
  $(this).hide();
  $('.testing').attr('contenteditable', 'true'); 
  $('#save').show();
});

$('.save').click(function(){
  $(this).hide();
  $('.text').removeAttr('contenteditable');
  $('.edit').show();
});

function deleteEventClick(id) {
  if (confirm("Are you sure?")) {
    $.ajax({
      type: 'DELETE',
      url: '/events/' + id,
    })
  }
}

function editEventClick(id) {
  $.ajax({
    type: 'PUT',
    url: '/events/',
  })
  console.log("Edit function", id)
}