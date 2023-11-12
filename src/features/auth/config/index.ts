const CLIENT_ID = process.env.CLIENT_ID || "";
const REDIRECT_URI = process.env.REDIRECT_URI || "";
const RESPONSE_TYPE = "code";
const DURATION = "permanent";
const scope = ["read", "submit", "identity"];

export const REDDIT_AUTH_URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=random_string&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${scope.join(
  " "
)}`;
