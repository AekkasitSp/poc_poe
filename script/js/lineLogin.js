function lineLogin(appId, scopePermission, policy) {
  const lineUrl = "https://access.line.me/oauth2/v2.1orize?";
  const rdr_uri =
    location.origin +
    (location.pathname.includes("v3.1") ? "/v3.1/login" : "/v3/login");
  // document.getElementById("loading").removeAttribute("hidden")

  const url = `${lineUrl}response_type=code&client_id=${appId}&redirect_uri=${rdr_uri}/line&state=${policy}&scope=${scopePermission}&response_type=token`;
  window.location = url;
}
