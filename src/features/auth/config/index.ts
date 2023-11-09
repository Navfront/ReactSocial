const CLIENT_ID = process.env.CLIENT_ID || "undefined";
const REDIRECT_URI = process.env.REDIRECT_URI || "http://localhost";
const RESPONSE_TYPE = "code";
const DURATION = "permanent";
const scope = ["read", "submit", "identity"];

console.log("Current client_id", CLIENT_ID);
console.log("Current redirect_uri", REDIRECT_URI);

export const REDDIT_AUTH_URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=random_string&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${scope.join(
  " "
)}`;
