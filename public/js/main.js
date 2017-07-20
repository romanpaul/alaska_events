//when the edit button is clicked
$('.update').click(function(){
//the entry fields become editable
  $(this).parent().find('.properties').attr('contenteditable', 'true');
//the edit button hides
  $(this).hide();
//the save button becomes visible
  $(this).parent().find('.save').show();
//.input is added for css styling
  $(this).parent().find('.properties').addClass('input');
});

//when save is clicked
$('.save').click(function(){
//the button hides
  $(this).hide();
//content becomes static
  $('.properties').removeAttr('contenteditable');
//.input is removed
  $(this).parent().find('.properties').removeClass('input');
//the update button returns
  $(this).parent().find('.update').show();
});

//function deletes the referenced id from the db
function deleteEventClick(id) {
  if (confirm("Are you sure?")) 
    {
    $.ajax({
      type: 'DELETE',
      url: '/events/' + id,
    })
  }
  location.reload();
}

//function edits the fields on the referenced id
function editEventClick(id) {
  const eventData = {
  title: $('#title-' + id).text(),
  time: $('#time-' + id).text(),
  date: $('#date-' + id).text(),
  price: $('#price-' + id).text(),
  capacity: $('#cap-' + id).text(), 
}; 
  $.ajax({
    type: 'PUT',
    url: '/events/' + id,
    data: JSON.stringify(eventData),
    dataType: 'json',
    contentType : 'application/json',
  });
}