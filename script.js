window.onload = function () {
  $("#login-section").show();
  $("#register-section").hide();
};

function actSign() {
  $("#login-section").hide();
  $("#register-section").show();
  console.log("hiii");
}

function actLogin() {
  $("#login-section").show();
  $("#register-section").hide();
}
