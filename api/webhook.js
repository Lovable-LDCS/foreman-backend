import crypto from "crypto";
import fetch from "node-fetch";
import { handleForemanReview } from "../utils/foreman.js";

export default async function handler(req, res) {
  const signature = req.headers["x-hub-signature-256"];
  const event = req.headers["x-github-event"];

  const rawBody = JSON.stringify(req.body);

  // Verify webhook secret
  const expected = "sha256=" +
    crypto.createHmac("sha256", process.env.FOREMAN_WEBHOOK_SECRET)
      .update(rawBody)
      .digest("hex");

  if (signature !== expected) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  // Only process pull request events for now
  if (event === "pull_request") {
    const action = req.body.action;
    if (["opened", "synchronize", "reopened"].includes(action)) {
      await handleForemanReview(req.body);
    }
  }

  return res.status(200).json({ ok: true });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb"
    }
  }
};

