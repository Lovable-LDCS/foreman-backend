import jwt from "jsonwebtoken";
import fetch from "node-fetch";

export function getGitHubJWT() {
  return jwt.sign(
    {
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (10 * 60),
      iss: process.env.FOREMAN_APP_ID
    },
    process.env.FOREMAN_PRIVATE_KEY,
    { algorithm: "RS256" }
  );
}

export async function getInstallationToken() {
  const jwtToken = getGitHubJWT();

  const res = await fetch(
    `https://api.github.com/app/installations/${process.env.FOREMAN_INSTALLATION_ID}/access_tokens`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        Accept: "application/vnd.github+json"
      }
    }
  );

  const json = await res.json();
  return json.token;
}

export async function commentOnPR(repoFullName, prNumber, body) {
  const token = await getInstallationToken();

  await fetch(
    `https://api.github.com/repos/${repoFullName}/issues/${prNumber}/comments`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ body })
    }
  );
}

