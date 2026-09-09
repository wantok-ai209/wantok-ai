import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, direction = "en-pg" } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(200).json({
      text: "Demo mode: " + message,
      demo: true
    });
  }

  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const instruction =
      direction === "en-pg"
        ? "Translate the user's English into natural, respectful Solomon Islands Pijin. Do not invent translations. If uncertain, say so."
        : "Translate the user's Solomon Islands Pijin into clear natural English. Preserve the meaning and tone. If uncertain, say so.";

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions: instruction,
      input: message
    });

    return res.status(200).json({
      text: response.output_text,
      demo: false
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "AI request failed."
    });
  }
      }
