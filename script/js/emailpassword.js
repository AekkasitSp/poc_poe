function checkRole() {
  let role1 = document.getElementById("personal");
  let role2 = document.getElementById("corporate");
  this.role1 = false;
  if (role2) {
    // console.log("มานะ",role2)
  } else if (role1) {
    // console.log("อันเเรก",role1)
  }
}

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
    $("#errorCheckRole").addClass("d-none");
    $("#ifCorporate").addClass("d-none");
    $("#nonCorporate").removeClass("d-none");
    spasswordCapsLock.classList.remove("is-invalid");
    rusername.classList.remove("is-valid");
    rpassword.classList.remove("is-valid");
    rconfirm_password.classList.remove("is-valid");
    $("#card1").removeClass("card1");
    $("#card2").removeClass("card1");
    $("#card1").removeClass("card-danger");
    $("#card2").removeClass("card-danger");
    $("#top-login").removeClass("d-none");
    $("#top-register").addClass("d-none");
    $("#top-forgot").addClass("d-none");
    document.getElementById("personal").checked = false;
    document.getElementById("corporate").checked = false;
    btn_done.setAttribute("disabled", "");
    $("#ifCorporateTrue").addClass("d-none");
    category1 = "";
    role = 0;
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
    document.getElementById("rconfirm_password").value = "";
    document.getElementById("fusername").value = "";
    $("#top-login").addClass("d-none");
    $("#top-register").removeClass("d-none");
    $("#top-forgot").addClass("d-block");
    $("#susernameValid").addClass("d-none");
    susername.classList.remove("is-invalid");
    $("#passValid").addClass("d-none");
    $("#spasswordValid").addClass("d-none");
    spassword.classList.remove("is-invalid");
    $("#fnameMsg").addClass("d-none");
    fname.classList.remove("is-invalid");
    $("#lnameMsg").addClass("d-none");
    lname.classList.remove("is-invalid");
    $("#rusernameValid").addClass("d-none");
    rusername.classList.remove("is-invalid");
    $("#rconfirm_passwordCheck").addClass("d-none");
    rconfirm_password.classList.remove("is-invalid");
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
    $("#ifCorporateTrue").addClass("d-none");
    rusername.classList.remove("is-valid");
    rpassword.classList.remove("is-valid");
    rconfirm_password.classList.remove("is-valid");
  } else if (state === "forgot") {
    Swal.close();
    mformSign.style.display = "none";
    mformRegister.style.display = "none";
    mformForgot.style.display = "block";
    $("#card1").removeClass("card1");
    $("#card2").removeClass("card1");
    $("#top-login").addClass("d-none");
    $("#top-register").addClass("d-none");
    $("#top-forgot").removeClass("d-none");
    document.getElementById("personal").checked = false;
    document.getElementById("corporate").checked = false;
    document.getElementById("susername").value = "";
    document.getElementById("spassword").value = "";
    document.getElementById("fusername").value = "";
    $("#susernameValid").addClass("d-none");
    susername.classList.remove("is-invalid");
    $("#passValid").addClass("d-none");
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
    $("#rconfirm_passwordCheck").addClass("d-none");
    rconfirm_password.classList.remove("is-invalid");
    $("#fusernameCheck").addClass("d-none");
    fusername.classList.remove("is-invalid");
    $("#rusernameCheck").addClass("d-none");
    rusername.classList.remove("is-invalid");
    $("#spasswordCapsLock").addClass("d-none");
    spasswordCapsLock.classList.remove("is-invalid");
    $("#ifCorporateTrue").addClass("d-none");
    rusername.classList.remove("is-valid");
    rpassword.classList.remove("is-valid");
    rconfirm_password.classList.remove("is-valid");
    btn_done.setAttribute("disabled", "");
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
        `/v3.1/login?type=email_password&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`;
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
          recode: recode && recode.value ? recode.value : undefined,
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
              confirmButtonColor: "#ed41f1",
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

function accept_TC(policy, type) {
  $("#error_content").addClass("d-none");
  new Promise(function (resolve, reject) {
    const subSession = policy.split("_");
    let url;
    switch (type) {
      case "email_password":
        url =
          window.location.origin +
          `/v3.1/login?type=email_password&action=tc&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`;
        break;
      case "google":
        url =
          window.location.origin +
          `/v3.1/login/` +
          type +
          `?action=tc&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`;
        break;
      case "facebook":
        url =
          window.location.origin +
          `/v3.1/login/` +
          type +
          `?action=tc&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`;
        break;
      case "line":
        url =
          window.location.origin +
          `/v3.1/login/` +
          type +
          `?action=tc&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`;
        break;
      default:
        break;
    }
    resolve(url);
  }).then(function (url) {
    // TODO: Call API for Auth
    $.ajax({
      url: url,
      type: type === "email_password" ? "POST" : "GET",
      data: {
        tc: "accept", //auto parse to query when method = GET
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
          if (result.includes("<!doctype html>")) {
            document.body.innerHTML = result;
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
        }
      },
      error: function (error) {
        error.status = error.status ? JSON.stringify(error.status) : "500";
        if (error.responseJSON) {
          error.responseJSON.error = error.responseJSON.error
            ? error.responseJSON.error
            : "server_error";
        } else {
          error.responseJSON = {
            error: "server_error",
          };
        }
        $.getJSON("/admd/script/js/error.const.json", function (data) {
          console.log("responseJSON: ", error);
          let _err_desc = data.social_term_and_cond[lang ? lang : "eng"].find(
            (obj) => {
              return obj.code == error.status;
            }
          );
          $("#error_content")[0].innerText =
            _err_desc && _err_desc.message
              ? _err_desc.message
              : error.responseJSON.error;
          $("#error_content").removeClass("d-none");
        });
      },
    });
  });
}

function decline_TC(redirect_uri, state) {
  window.location =
    redirect_uri +
    (state ? "?state=" + state + "&error=user_denied" : "?error=user_denied");
}

function btnLoginDoneCheck() {
  if (
    susername.validity.valid &&
    susername.value != null &&
    susername.value != "" &&
    spassword.validity.valid &&
    spassword.value != null &&
    spassword.value != ""
  ) {
    // bsing_in.removeAttribute("disabled")
  } else {
    // bsing_in.setAttribute("disabled", "")
  }
}

if (susername) {
  susername.addEventListener("keyup", function (event) {
    $("#susernameCheck").addClass("d-none");
    if (!susername.validity.valid) {
      $("#susernameValid").removeClass("d-none");
      susername.classList.add("is-invalid");
    } else {
      $("#susernameValid").addClass("d-none");
      susername.classList.remove("is-invalid");
    }

    btnLoginDoneCheck();
  });
}

if (spassword) {
  spassword.addEventListener("keyup", function (event) {
    if (event.getModifierState("CapsLock")) {
      $("#spasswordCapsLock").removeClass("d-none");
    } else {
      $("#spasswordCapsLock").addClass("d-none");
      $("#passValid").addClass("d-none");
      spassword.classList.remove("is-invalid");
    }
    btnLoginDoneCheck();
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
/* Sign up Page Section */
var category = document.getElementById("checkcategory");
let category1 = "residential";
let role = 0;

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var rusername = document.getElementById("rusername");
var rpassword = document.getElementById("rpassword");
var confirm_password = document.getElementById("rconfirm_password");
var btn_done = document.getElementById("btn-done");
var checkTC = document.getElementById("checkbox");
var tc = document.querySelector("input[name=tc]");
var is_tc_accept = false;

var rusernameCanUse = true;

function sign_up(policy, isRdr) {
  // console.log("sign_up")
  if (category1 == "") {
    $("#card1").addClass("card-danger");
    $("#card2").addClass("card-danger");
    $("#errorCheckRole").removeClass("d-none");
    // console.log("ว่างนะ")
  } else if (
    fname.validity.valid &&
    lname.validity.valid &&
    rusername.validity.valid &&
    rpassword.validity.valid &&
    rconfirm_password.validity.valid
  ) {
    new Promise(function (resolve, reject) {
      // console.log("sign_up")
      const subSession = policy.split("_");
      const url =
        window.location.origin +
        `/v3.1/register?type=email_password&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`;
      btn_done.setAttribute("disabled", "");
      if (isRdr === "false") {
        document.getElementById("register").action = url;
        document.forms["register"].submit();
        // console.log("sign_up1")
      } else {
        resolve(url);
        $("#errorCheckRole").addClass("d-none");
        $("#card1").removeClass("card-danger");
        $("#card2").removeClass("card-danger");
        // console.log("firstname", fname.value)
        // console.log("lastname", lname.value)
        // console.log("username", rusername.value.toLowerCase())
        // console.log("password", rpassword.value)
      }
    }).then(function (url) {
      // *************** //
      // TODO: Call API for Sign up
      var recode = document.getElementById("recode");
      $.ajax({
        url: url,
        type: "POST",
        data: {
          firstname: fname.value,
          lastname: lname.value,
          username: rusername.value.toLowerCase(),
          password: rpassword.value,
          account_category: category1,
          tc: is_tc_accept ? "accept" : undefined,
          recode: recode && recode.value ? recode.value : undefined,
        },
        success: function (result) {
          document.documentElement.innerHTML = result;
        },
        error: function (error) {
          if (error.responseText) {
            document.documentElement.innerHTML = error.responseText;
          }
          Swal.fire({
            title: "Something Wrong",
            text: "Please try again.",
            type: "error",
            confirmButtonColor: "#ed41f1",
            confirmButtonText: "Close",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.value) {
              btn_done.removeAttribute("disabled", "");
            }
          });
        },
      });
    });
    // End API for Sign up
    // *************** //
  } else {
    if (!fname.validity.valid) {
      fname.classList.add("is-invalid");
    }

    if (!lname.validity.valid) {
      lname.classList.add("is-invalid");
    }

    if (!rusername.validity.valid) {
      rusername.classList.add("is-invalid");
    }

    if (!rpassword.validity.valid) {
      rpassword.classList.add("is-invalid");
    }

    if (!confirm_password.validity.valid) {
      confirm_password.classList.add("is-invalid");
    }

    btn_done.setAttribute("disabled", "");
  }
}

function openIndexLdap() {
  // console.log("1",window.location.href)
  let url = window.location.href.replace("#", "");
  // console.log("2",url)
  url = url + "&template_name=index_ldap";
  window.location.href = url;
  // console.log("3",url)
  // window.location = url
}
function openIndex() {
  let url = window.location.href;
  window.location.href = url.replace("&template_name=index_ldap", "");
}
// End API for Sign up
// *************** //

function checkPublicID(sessionString, clientID) {
  // console.log("checkPublicID")
  // *************** //
  // TODO: Call API for Check public ID
  new Promise(function (resolve, reject) {
    let email = $("#rusername").val().toLowerCase();
    const subSession = sessionString.split("_");
    const url =
      window.location.origin +
      "/v3.1/publicId/" +
      email +
      `?client_id=${encodeURIComponent(clientID)}&policy=${subSession[0]}&sid=${
        subSession[1]
      }&rtid=${subSession[2]}&tid=${subSession[3]}`;
    resolve(url);
  }).then(function (url) {
    // console.log("url", url)
    if (document.getElementById("rusername").validity.valid) {
      $.ajax({
        // url:url,
        url: url,
        type: "GET",
        success: function (result) {
          if (Object.keys(result) == 0) {
            rusernameCanUse = true;
            $("#rusername").addClass("is-valid");
            $("#rusername").removeClass("is-invalid");
            $("#remail").val($("#rusername").val());
            $("#rusernameCheck").addClass("d-none");
            btnSignupDoneCheck();
          } else {
            rusernameCanUse = false;
            $("#rusername").removeClass("is-valid");
            $("#rusername").addClass("is-invalid");
            $("#rusernameCheck").addClass("d-none");
            $("#rusernameCheckError").removeClass("d-none");
            btnSignupDoneCheck();
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // console.error('error: ', error)
          var err = eval("(" + jqXHR.responseText + ")");
          // console.log("errorjqXHR")
          if (err.error == "data_exists") {
            rusernameCanUse = false;
            $("#rusername").removeClass("is-valid");
            $("#rusername").addClass("is-invalid");
            $("#remail").val("");
            $("#rusernameCheck").removeClass("d-none");
            btnSignupDoneCheck();
          } else {
            rusernameCanUse = false;
            $("#rusername").removeClass("is-valid");
            $("#rusername").addClass("is-invalid");
            $("#rusernameCheck").addClass("d-none");
            $("#rusernameCheckError").removeClass("d-none");
            btnSignupDoneCheck();
          }
        },
      });
    }
  });
}
// End API for Check public ID
// *************** //

if (tc) {
  tc.addEventListener("change", function (event) {
    if (event.target.checked) {
      is_tc_accept = true;
    } else {
      is_tc_accept = false;
    }
    btnSignupDoneCheck();
  });
}

function btnSignupDoneCheck() {
  if (tc) {
    if (
      fname.validity.valid &&
      fname.value != null &&
      fname.value != "" &&
      lname.validity.valid &&
      lname.value != null &&
      lname.value != "" &&
      rusername.validity.valid &&
      rusername.value != null &&
      rusername.value != "" &&
      rpassword.validity.valid &&
      rpassword.value != null &&
      rpassword.value != "" &&
      rconfirm_password.validity.valid &&
      rconfirm_password.value != null &&
      rconfirm_password.value != "" &&
      rpassword.value == rconfirm_password.value &&
      pwdRule(rpassword.value) &&
      rusernameCanUse &&
      is_tc_accept
    ) {
      btn_done.removeAttribute("disabled");
    } else {
      btn_done.setAttribute("disabled", "");
    }
  } else {
    if (
      fname.validity.valid &&
      fname.value != null &&
      fname.value != "" &&
      lname.validity.valid &&
      lname.value != null &&
      lname.value != "" &&
      rusername.validity.valid &&
      rusername.value != null &&
      rusername.value != "" &&
      rpassword.validity.valid &&
      rpassword.value != null &&
      rpassword.value != "" &&
      rconfirm_password.validity.valid &&
      rconfirm_password.value != null &&
      rconfirm_password.value != "" &&
      rpassword.value == rconfirm_password.value &&
      pwdRule(rpassword.value) &&
      rusernameCanUse
    ) {
      btn_done.removeAttribute("disabled");
    } else {
      btn_done.setAttribute("disabled", "");
    }
  }
}

if (fname) {
  fname.addEventListener("keyup", function (event) {
    if (!fname.validity.valid) {
      $("#fnameMsg").removeClass("d-none");
      fname.classList.add("is-invalid");
    } else {
      $("#fnameMsg").addClass("d-none");
      fname.classList.remove("is-invalid");
    }

    btnSignupDoneCheck();
  });
}

if (lname) {
  lname.addEventListener("keyup", function (event) {
    if (!lname.validity.valid) {
      $("#lnameMsg").removeClass("d-none");
      lname.classList.add("is-invalid");
    } else {
      $("#lnameMsg").addClass("d-none");
      lname.classList.remove("is-invalid");
    }

    btnSignupDoneCheck();
  });
}

if (rusername) {
  rusername.addEventListener("keyup", function (event) {
    // console.log("keyuprusername")
    if (
      !rusername.validity.valid ||
      rusername.value == null ||
      rusername.value == ""
    ) {
      $("#rusernameCheck").addClass("d-none");
      $("#rusernameValid").removeClass("d-none");
      rusername.classList.add("is-invalid");
      // console.log("keyuprusernameinvalid")
    } else {
      $("#rusernameValid").addClass("d-none");
      rusername.classList.remove("is-invalid");
      // console.log("keyuprusernameNoninvalid")
      // rusername.classList.add("is-valid") //Mock if have API delete it.
    }
    btnSignupDoneCheck();
  });
}

if (rpassword) {
  rpassword.addEventListener("keyup", function (event) {
    if (!rpassword.validity.valid || !pwdRule(rpassword.value)) {
      $("#rpasswordCheck").removeClass("d-none");
      rpassword.classList.add("is-invalid");
      $("#rpasswordCheck").addClass("text-danger");
    } else {
      $("#rpasswordCheck").addClass("d-none");
      rpassword.classList.remove("is-invalid");
      rpassword.classList.add("is-valid");
    }

    if (
      rconfirm_password.value != null &&
      rconfirm_password.value != "" &&
      rpassword.value != rconfirm_password.value
    ) {
      $("#rconfirm_passwordCheck").removeClass("d-none");
      rconfirm_password.classList.add("is-invalid");
    } else {
      $("#rconfirm_passwordCheck").addClass("d-none");
      rconfirm_password.classList.remove("is-invalid");
    }

    btnSignupDoneCheck();
  });
}

if (rconfirm_password) {
  rconfirm_password.addEventListener("keyup", function (event) {
    if (
      !rconfirm_password.validity.valid ||
      rpassword.value != rconfirm_password.value
    ) {
      $("#rconfirm_passwordCheck").removeClass("d-none");
      rconfirm_password.classList.add("is-invalid");
      btnSignupDoneCheck();
    } else {
      $("#rconfirm_passwordCheck").addClass("d-none");
      rconfirm_password.classList.remove("is-invalid");
      rconfirm_password.classList.add("is-valid");
      btnSignupDoneCheck();
    }
  });
}

if (checkTC) {
  console.log("checkbox", checkTC.value);
}

// ****************************** //
// ****************************** //
/* Forgot password Page Section */

var fusername = document.getElementById("fusername");
var btn_forgot = document.getElementById("btn-forgot");

function forgot(policy, isRdr) {
  btn_forgot.setAttribute("disabled", "");
  // *************** //
  // TODO: Call API for Forgot password
  new Promise(function (resolve, reject) {
    const subSession = policy.split("_");
    const url =
      window.location.origin +
      `/v3.1/forgot?type=email_password&action=showui_forgot&policy=${subSession[0]}&sid=${subSession[1]}&rtid=${subSession[2]}&tid=${subSession[3]}`;
    // console.log("policy url", url)
    if (isRdr === "false") {
      document.getElementById("forgot").action = url;
      document.forms["fromforgot"].submit();
      // console.log("1150")
    } else {
      resolve(url);
      console.log(
        "username",
        document.getElementById("fusername").value.toLowerCase()
      );
    }
  }).then(function (url) {
    var recode = document.getElementById("recode");
    $.ajax({
      url: url,
      type: "POST",
      data: {
        username: document.getElementById("fusername").value.toLowerCase(),
        recode: recode && recode.value ? recode.value : undefined,
      },
      success: function (result) {
        document.body.innerHTML = result;
      },
      error: function (error) {
        if (
          error.responseJSON &&
          error.responseJSON.error === "invalid_user_or_password"
        ) {
          Swal.fire({
            title: "Email is wrong",
            text: "Please check your Email.",
            type: "error",
            confirmButtonColor: "#ed41f1",
            confirmButtonText: "Close",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.value) {
              // document.getElementById('bsing_in').disabled = false;
              btn_forgot.removeAttribute("disabled", "");
            }
          });
        } else {
          if (error.responseText) {
            document.body.innerHTML = error.responseText;
          }
          Swal.fire({
            title: "Something wrong.",
            text: "Please try again.",
            type: "error",
            confirmButtonColor: "#ed41f1",
            confirmButtonText: "Close",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.value) {
              // document.getElementById('bsing_in').disabled = false;
              btn_forgot.removeAttribute("disabled", "");
            }
          });
        }
      },
    });
  });
  // End API for Forgot password
  // *************** //
}

function btnForgotPasswordDoneCheck() {
  if (
    fusername.validity.valid &&
    fusername.value != null &&
    fusername.value != ""
  ) {
    btn_forgot.removeAttribute("disabled");
  } else {
    btn_forgot.setAttribute("disabled", "");
  }
}

if (fusername) {
  fusername.addEventListener("keyup", function (event) {
    if (!fusername.validity.valid) {
      $("#fusernameCheck").removeClass("d-none");
      fusername.classList.add("is-invalid");
    } else {
      $("#fusernameCheck").addClass("d-none");
      fusername.classList.remove("is-invalid");
    }

    btnForgotPasswordDoneCheck();
  });
}

// ****************************** //
// ****************************** //
/* Set new password Page Section */

var new_password = document.getElementById("new_password");
var confirm_password = document.getElementById("confirm_password");
var code = document.getElementById("code");
function btnSetNewPasswordDoneCheck() {
  if (
    new_password.validity.valid &&
    new_password.value != null &&
    new_password.value != "" &&
    confirm_password.validity.valid &&
    confirm_password.value != null &&
    confirm_password.value != ""
  ) {
    code.removeAttribute("disabled");
  } else {
    code.setAttribute("disabled", "");
  }
}

if (new_password) {
  new_password.addEventListener("keyup", function (event) {
    if (!new_password.validity.valid || !pwdRule(new_password.value)) {
      $("#new_passwordCheck").removeClass("d-none");
      new_password.classList.add("is-invalid");
    } else {
      $("#new_passwordCheck").addClass("d-none");
      new_password.classList.remove("is-invalid");
    }

    if (
      confirm_password.value != null &&
      confirm_password.value != "" &&
      new_password.value != confirm_password.value
    ) {
      $("#confirm_passwordCheck").removeClass("d-none");
      confirm_password.classList.add("is-invalid");
    } else {
      $("#confirm_passwordCheck").addClass("d-none");
      confirm_password.classList.remove("is-invalid");
    }

    btnSetNewPasswordDoneCheck();
  });
}

if (confirm_password) {
  confirm_password.addEventListener("keyup", function (event) {
    if (
      !confirm_password.validity.valid ||
      new_password.value != confirm_password.value
    ) {
      $("#confirm_passwordCheck").removeClass("d-none");
      confirm_password.classList.add("is-invalid");
    } else {
      $("#confirm_passwordCheck").addClass("d-none");
      confirm_password.classList.remove("is-invalid");
      btnSetNewPasswordDoneCheck();
    }
  });
}

async function reSend(session, code) {
  const [xPoilicy, xSession, xRtid, xTid] = session.split("_");
  const URL =
    window.location.origin +
    "/v3.1/resendactivation?policy=" +
    xPoilicy +
    "&sid=" +
    xSession +
    "&rtid=" +
    xRtid +
    "&tid=" +
    xTid;
  await countTimer();
  $.ajax({
    url: URL,
    type: "POST",
    data: { code },
    success: async function (response) {
      // TODO:count down link click and show text success
    },
    error: function (error) {
      // TODO:with confirm.
      if (error.status === 503) {
        let numCount = 10;
        $("#countTex").removeClass("d-none");
        $("#countTem").removeClass("d-none");
        const inTerval = setInterval(() => {
          if (numCount === 0) {
            $("#countTem").addClass("d-none");
            $("#countTex").addClass("d-none");
            clearInterval(inTerval);
          } else {
            $("#countTem").text(--numCount);
          }
        }, 1000);
      } else {
        if (error.responseText) {
          document.documentElement.innerHTML = error.responseText;
        }
      }
    },
  });
}

async function countTimer() {
  $("#btnSend").addClass("d-none");
  $("#img-success").addClass("d-none");
  $("#txt-success").addClass("d-none");
  $("#txt-s1").addClass("d-none");
  $("#txt-s2").addClass("d-none");
  $("#txt-s3").addClass("d-none");
  $("#loader").removeClass("d-none");
  await setTimeout(function () {
    $("#btnSend").removeClass("d-none");
    $("#img-success").removeClass("d-none");
    $("#txt-success").removeClass("d-none");
    $("#txt-s1").removeClass("d-none");
    $("#txt-s2").removeClass("d-none");
    $("#txt-s3").removeClass("d-none");
    $("#loader").addClass("d-none");
  }, 10000);
}
