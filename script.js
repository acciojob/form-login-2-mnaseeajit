//your JS code here. If required.
function showAlert() {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value;

  alert(
    "localhost 3000 says\n" +
    "First Name: " + firstName + "\n" +
    "Last Name: " + lastName + "\n" +
    "Phone Number: " + phoneNumber + "\n" +
    "Email ID: " + email
  );
}
