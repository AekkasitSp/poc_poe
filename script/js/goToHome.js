function goToHome() {
    window.location.href = "https://iot-apiv3.ais.co.th"
}
function back() {
    let url = window.location.href
    window.location.href = url.replace("&template_name=index_ldap", "");
}
function term_residential(){
    window.location.href = "https://iot-apiv3.ais.co.th/term/residential"
}
function term_business(){
    window.location.href = "https://iot-apiv3.ais.co.th/term/business"
}
