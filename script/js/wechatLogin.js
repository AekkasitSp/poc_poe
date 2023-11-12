function wechatLogin (appId, scopePermission, policy) {
    // const we_chat = "https://open.weixin.qq.com/connect/oauth2/authorize?"
    // const url = `${we_chat}response_type=code&appid=${appId}&scope=snsapi_userinfo&state=${Math.floor(Math.random()*5)}&redirect_uri=https://iot-auth.siampiwat.in/v3/login/wechat#wechat_redirect`
    // document.getElementById("loading").removeAttribute("hidden")

    const  url = 'onesiam://login_wechat?url=' + encodeURI(window.location.origin+'?state='+policy)

    window.location = url
}
