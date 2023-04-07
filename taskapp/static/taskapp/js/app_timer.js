var timeLoggedIn = new Date('{{ user.last_login|date:"c" }}').getTime();
    
function calculateTimeOnSite() {
  var timeOnSite = Date.now() - timeLoggedIn;
  var timeInSeconds = (timeOnSite / 1000).toFixed(2);
  console.log("Time on site: " + timeInSeconds + " seconds");
}

window.addEventListener("beforeunload", calculateTimeOnSite);