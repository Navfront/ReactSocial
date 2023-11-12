import axios from "axios";

import { ACCESS_TOKEN_ENDPOINT } from "../config";

export type AuthResponseType = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  refresh_token: string;
};

export const getToken = async (
  code: string,
  redirectUri: string,
  clientId: string,
  apiSecret: string
) => {
  return axios.post<AuthResponseType>(
    ACCESS_TOKEN_ENDPOINT,
    `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`,
    {
      auth: { username: clientId, password: apiSecret },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};
