function facebookLogin(appId, scopePermission, policy) {
  const fbUrl = "https://www.facebook.com/v3.1/dialog/oauth?";
  const rdr_uri =
    location.origin +
    (location.pathname.includes("v3.1") ? "/v3.1/login" : "/v3/login");
  // document.getElementById("loading").removeAttribute("hidden")

  const url = `${fbUrl}response_type=code&client_id=${appId}&redirect_uri=${rdr_uri}/facebook&state=${policy}&scope=${scopePermission}`;
  window.location = url;
}
