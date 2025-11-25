import fetch from "node-fetch";
import { commentOnPR } from "./github.js";

export async function handleForemanReview(payload) {
  const repo = payload.repository.full_name;
  const prNumber = payload.number;
  const title = payload.pull_request.title;
  const diffUrl = payload.pull_request.diff_url;

  // Fetch the PR diff
  const diff = await fetch(diffUrl).then(r => r.text());

  const prompt = `
You are the Foreman overseeing this repository.
Your job: review the pull request for quality, safety, clarity,
architecture alignment, and correctness.

PR Title: ${title}

DIFF:
${diff}

Provide your review in clear bullet points and a final verdict:
- APPROVE
- REQUEST_CHANGES
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are the strict but fair Foreman." },
        { role: "user", content: prompt }
      ]
    })
  }).then(r => r.json());

  const foremanOutput = response.choices?.[0]?.message?.content;
  await commentOnPR(repo, prNumber, foremanOutput);
}

