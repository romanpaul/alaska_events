function deleteEventClick(id) {
  if (confirm("Are you sure?")) {
    $.ajax({
      type: 'DELETE',
      url: '/events/' + id,
    })
  }
}

function editEventClick(id) {
  console.log("I will edit for you!", id)
}