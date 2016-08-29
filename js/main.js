$(document).ready(function() {
  var contactsList = [
  ];

  // Get field input values on form submit

  $("form").submit(function(event) {
    var first_name = $('#first-name').val();
    var last_name = $('#last-name').val();

    // Create an object for each contact
    var contact = { first_name: first_name, last_name: last_name }

    // add to global variable contactsList

    contactsList.push(contact)

    console.log(contactsList)
    event.preventDefault();
  });

});
