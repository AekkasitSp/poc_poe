async function reSend(session, code) {
  const [xPoilicy, xSession, xRtid, xTid] = session.split('_')
  const URL = window.location.origin + '/auth/v3.1/resendactivation?policy=' + xPoilicy + '&sid=' + xSession + '&rtid=' + xRtid + '&tid=' + xTid
  await countTimer()
  $.ajax({
      url: URL,
      type: 'POST',
      data: { code },
      success: async function (response) {
          // TODO:count down link click and show text success
      },
      error: function (error) {
        // TODO:with confirm.
        if (error.status === 503) {
          let numCount = 10
          $('#countTex').removeClass("d-none")
          $('#countTem').removeClass("d-none")
          const inTerval = setInterval(() => {
            if (numCount === 0) {
              $('#countTem').addClass("d-none")
              $('#countTex').addClass("d-none")
              clearInterval(inTerval)
            } else {
              $('#countTem').text(--numCount)
              
            }
          }, 1000)
        } else {
          if (error.responseText) {
            document.documentElement.innerHTML = error.responseText
          }
        }
      }
  });
}

async function countTimer () {
  $('#btnSend').addClass("d-none")
  $('#img-success').addClass("d-none")
  $('#txt-success').addClass("d-none")
  $('#txt-s1').addClass("d-none")
  $('#txt-s2').addClass("d-none")
  $('#txt-s3').addClass("d-none")
  $('#loader').removeClass("d-none")
  await setTimeout(function() {
      $('#btnSend').removeClass("d-none")
      $('#img-success').removeClass("d-none")
      $('#txt-success').removeClass("d-none")
      $('#txt-s1').removeClass("d-none")
      $('#txt-s2').removeClass("d-none")
      $('#txt-s3').removeClass("d-none")
      $('#loader').addClass("d-none")
  }, 10000)
}