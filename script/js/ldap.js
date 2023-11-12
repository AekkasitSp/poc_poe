function getForm(state) {
  // console.log('state: ', state)
  var mformSign = document.getElementById("form-sign");
  var mformRegister = document.getElementById("form-register");
  var mformForgot = document.getElementById("form-forgot");

  if (state === "sign") {
    mformSign.style.display = "block";
    mformRegister.style.display = "none";
    mformForgot.style.display = "none";
    $("#rpasswordHint").addClass("d-none");
    rpassword.classList.remove("is-invalid");
    $("#spasswordCapsLock").addClass("d-none");
    spasswordCapsLock.classList.remove("is-invalid");
    rusername.classList.remove("is-valid");
    rpassword.classList.remove("is-valid");
  } else if (state === "register") {
    mformSign.style.display = "none";
    mformRegister.style.display = "block";
    mformForgot.style.display = "none";
    document.getElementById("susername").value = "";
    document.getElementById("spassword").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("rusername").value = "";
    document.getElementById("rpassword").value = "";
    document.getElementById("fusername").value = "";
    $("#susernameValid").addClass("d-none");
    susername.classList.remove("is-invalid");
    $("#spasswordValid").addClass("d-none");
    spassword.classList.remove("is-invalid");
    $("#fnameMsg").addClass("d-none");
    fname.classList.remove("is-invalid");
    $("#lnameMsg").addClass("d-none");
    lname.classList.remove("is-invalid");
    $("#rusernameValid").addClass("d-none");
    rusername.classList.remove("is-invalid");
    $("#fusernameCheck").addClass("d-none");
    fusername.classList.remove("is-invalid");
    $("#rusernameCheck").addClass("d-none");
    rusername.classList.remove("is-invalid");
    $("#rpasswordHint").removeClass("d-none");
    $("#rpasswordHint").removeClass("text-danger");
    $("#spasswordCapsLock").addClass("d-none");
    $("#rpasswordCheck").removeClass("d-none");
    $("#rpasswordCheck").removeClass("text-danger");
    spasswordCapsLock.classList.remove("is-invalid");
    rusername.classList.remove("is-valid");
    rpassword.classList.remove("is-valid");
  } else if (state === "forgot") {
    Swal.close();
    mformSign.style.display = "none";
    mformRegister.style.display = "none";
    mformForgot.style.display = "block";
    document.getElementById("susername").value = "";
    document.getElementById("spassword").value = "";
    document.getElementById("fusername").value = "";
    $("#susernameValid").addClass("d-none");
    susername.classList.remove("is-invalid");
    $("#spasswordValid").addClass("d-none");
    spassword.classList.remove("is-invalid");
    $("#fnameMsg").addClass("d-none");
    fname.classList.remove("is-invalid");
    $("#lnameMsg").addClass("d-none");
    lname.classList.remove("is-invalid");
    $("#rusernameValid").addClass("d-none");
    rusername.classList.remove("is-invalid");
    $("#rpasswordCheck").removeClass("d-none");
    rpassword.classList.remove("is-invalid");
    $("#fusernameCheck").addClass("d-none");
    fusername.classList.remove("is-invalid");
    $("#rusernameCheck").addClass("d-none");
    rusername.classList.remove("is-invalid");
    $("#spasswordCapsLock").addClass("d-none");
    spasswordCapsLock.classList.remove("is-invalid");
    rusername.classList.remove("is-valid");
    rpassword.classList.remove("is-valid");
  }
}
function pwdRule(pwd) {
  var pwdRule = 0;
  var isPassword = /^[\da-zA-Z@#]+$/.test(pwd);
  var isDecimal = /(?=.*[\d])/.test(pwd);
  var isLowercase = /(?=.*[a-z])/.test(pwd);
  var isUppercase = /(?=.*[A-Z])/.test(pwd);
  var isSymbols = /(?=.*[@#])/.test(pwd);
  if (isPassword && pwd.length >= 8) {
    if (isDecimal) {
      pwdRule++;
    }
    if (isLowercase) {
      pwdRule++;
    }
    if (isUppercase) {
      pwdRule++;
    }
    if (isSymbols) {
      pwdRule++;
    }
  }
  return pwdRule >= 3 ? true : false;
}
// var mouseClick = false;
// $(".toggle-password").mousedown(function () {
//     $(this).toggleClass("fa-eye fa-eye-slash");
//     var input = $($(this).attr("toggle"));
//     input.attr("type", "text");
//     mouseClick = true;
// })
//     .mouseleave(function () {
//         var input = $($(this).attr("toggle"));
//         if (mouseClick == true) {
//             $(this).toggleClass("fa-eye fa-eye-slash");
//             input.attr("type", "password");
//             mouseClick = false
//         }
//     })
//     .mouseup(function () {
//         $(this).toggleClass("fa-eye fa-eye-slash");
//         var input = $($(this).attr("toggle"));
//         input.attr("type", "password");
//         mouseClick = false;
//     });

var mouseClick = false;

$(".toggle-password").on("mousedown touchstart", function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  console.log(">>>>", input.attr("type"));
  input.attr("type", "text");
  mouseClick = true;
});

$(".toggle-password").on("mouseleave", function () {
  var input = $($(this).attr("toggle"));
  if (mouseClick == true) {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input.attr("type", "password");
    mouseClick = false;
  }
});
$(".toggle-password").on("mouseup touchend", function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  // console.log('>>>>', input.attr("type"))
  input.attr("type", "password");
  mouseClick = false;
});

// ****************************** //
// ****************************** //
/* Sign in Page Section */

let count = 0;
var susername = document.getElementById("susername");
var spassword = document.getElementById("spassword");
var bsing_in = document.getElementById("bsing_in");
var spasswordCapsLock = document.getElementById("spasswordCapsLock");
function sign_in(policy, isRdr) {
  if (susername.validity.valid && spassword.validity.valid) {
    new Promise(function (resolve, reject) {
      const subSession = policy.split("_");
      const url =
        window.location.origin +
        `/v3.1/login?type=ldap_employee&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`;
      if (isRdr === "false") {
        document.getElementById("login").action = url;
        document.forms["login"].submit();
      } else {
        resolve(url);
        console.log("Email", susername.value.toLowerCase());
      }
    }).then(function (url) {
      // *************** //
      // TODO: Call API for Auth
      var recode = document.getElementById("recode");
      $.ajax({
        url: url,
        type: "POST",
        data: {
          username: susername.value.toLowerCase(),
          password: spassword.value,
          recode: recode.value ? recode.value : undefined,
        },
        success: function (result) {
          if (result instanceof Object) {
            if (result.redirect_uri) {
              window.location =
                result.redirect_uri +
                "?code=" +
                result.code +
                (result.state ? "&state=" + result.state : "");
            }
          } else {
            const res = JSON.parse(result);
            if (res.redirect_uri) {
              window.location =
                res.redirect_uri +
                "?code=" +
                res.code +
                (res.state ? "&state=" + res.state : "");
            }
          }
        },
        error: function (error) {
          //If Auth failed more than or equal to 3 times.
          if (count >= 2) {
            Swal.fire({
              title: "Wrong E-mail or Password",
              html:
                "Please check your Email or Password. If you can't remember your email or password, you can go to the " +
                '<a href="#" onClick="getForm(\'forgot\')" >forgot password</a> ' +
                "page",
              imageUrl: "/idenpixel/images/ic-alert-142-px.svg",
              confirmButtonColor: "#b2d234",
              cancelButtonColor: "#d33",
              confirmButtonText: "close",
              allowOutsideClick: false,
            }).then((result) => {
              count = 0;
              spassword.value = "";
              // bsing_in.setAttribute("disabled", "")
            });
          } else {
            count++;
            // console.log('__dirname', document.location.href + "/../images/ic-alert-142-px.svg")
            Swal.fire({
              title: "Wrong E-mail or Password",
              html: "Please check your Email or Password.",
              imageUrl: "/idenpixel/images/ic-alert-142-px.svg",
              confirmButtonColor: "#ed41f1",
              cancelButtonColor: "#d33",
              confirmButtonText: "Close",
              allowOutsideClick: false,
            }).then((result) => {
              spassword.value = "";
              // bsing_in.setAttribute("disabled", "")
            });
          }
        },
      });
    });
    // End API for Auth
    // *************** //
  } else {
    if (susername.validity.valid) {
      susername.classList.remove("is-invalid");
      $("#susernameValid").addClass("d-none");
      // console.log("1")
    } else {
      susername.classList.add("is-invalid");
      $("#susernameValid").removeClass("d-none");
      // console.log("2")
    }
    if (spassword.validity.valid) {
      spassword.classList.remove("is-invalid");
      $("#passValid").addClass("d-none");
      // console.log("3")
    } else {
      spassword.classList.add("is-invalid");
      $("#passValid").removeClass("d-none");
      // console.log("4")
    }

    // bsing_in.setAttribute("disabled", "")
  }
}

if (susername) {
  susername.addEventListener("keyup", function (event) {
    if (!susername.validity.valid) {
      $("#susernameValid").removeClass("d-none");
      susername.classList.add("is-invalid");
    } else {
      $("#susernameValid").addClass("d-none");
      susername.classList.remove("is-invalid");
    }
  });
}
if (spassword) {
  spassword.addEventListener("keyup", function (event) {
    if (!spassword.validity.valid) {
      $("#passValid").removeClass("d-none");
      spassword.classList.add("is-invalid");
    } else {
      $("#passValid").addClass("d-none");
      spassword.classList.remove("is-invalid");
    }
  });
}

function capLock(e) {
  var kc = e.keyCode ? e.keyCode : e.which;
  var sk = e.shiftKey ? e.shiftKey : kc === 16;
  var visibility =
    (kc >= 65 && kc <= 90 && !sk) || (kc >= 97 && kc <= 122 && sk)
      ? "visible"
      : "hidden";
  document.getElementById("spasswordCapsLock").style.visibility = visibility;
}
// ****************************** //
// ****************************** //
/* Forgot password Page Section */

// ****************************** //
// ****************************** //
/* Set new password Page Section */

async function countTimer() {
  $("#btnSend").addClass("d-none");
  $("#img-success").addClass("d-none");
  $("#txt-success").addClass("d-none");
  $("#txt-s1").addClass("d-none");
  $("#txt-s2").addClass("d-none");
  $("#loader").removeClass("d-none");
  await setTimeout(function () {
    $("#btnSend").removeClass("d-none");
    $("#img-success").removeClass("d-none");
    $("#txt-success").removeClass("d-none");
    $("#txt-s1").removeClass("d-none");
    $("#txt-s2").removeClass("d-none");
    $("#loader").addClass("d-none");
  }, 10000);
}
