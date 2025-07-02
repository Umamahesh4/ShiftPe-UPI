function validateForm1() {
    
    var email = document.getElementById("email").value;
    var pno = document.getElementById("phoneno").value;
    var cno = document.getElementById("cno").value;
    var check = 1;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            var isValid = emailRegex.test(email);

            if (isValid) {
                
            } else {
                alert("Enter valid Email!");
                check = 0;
            }

            if (pno.length != 10) {
                alert("Enter valid phone number!");
                check = 0;
            
              }
            
            if (cno.length < 8) {
                alert("Enter valid card number!");
                check = 0;
            
            }  

            if (check = 1){
              alert("Account Settings has been updated!");
            }
}


function validateForm2() {
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var check = 1;
    
    if (newPassword.length < 6) {
      alert("Password should have at least 6 characters!");
      check = 0;
    }

    else if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      check = 0;
    }
    else{
      alert("Password Updated!!");
    }

    if (check = 1){
      alert("Password Settings has been updated!");
    }

    
  }

function validateForm3() {
    alert("Security Settings has been updated!");

}

function validateForm4(){
    alert("Privacy Settings has been updated!");
}

function validateForm5(){
    alert("Notification Settings has been updated!");
}



