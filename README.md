# Wantok AI V1 🇸🇧

**Talk local. Travel deeper.**

This is the phone-friendly V1 starter for Wantok AI:
- English ↔ Solomon Islands Pijin translation
- Pijin learning starter
- Phrasebook
- Culture guide
- Simple browser speech output
- Secure server-side OpenAI API connection

## Important security rule

Never put your OpenAI API key in `public/index.html`, client-side JavaScript, GitHub, or a `NEXT_PUBLIC_...` variable.

For Vercel, add the key as the server-side environment variable:

`OPENAI_API_KEY`

The API route in `api/chat.js` reads the key only on the server.

## Deploying with Vercel

1. Upload this project to a GitHub repository.
2. Import the GitHub repository into Vercel.
3. In Vercel: Project → Settings → Environment Variables.
4. Add:
   - Name: `OPENAI_API_KEY`
   - Value: your secret API key
   - Environment: Production (and Preview/Development if needed)
5. Redeploy.

Do not paste the key into the code.

## Billing

If the API account has no funded credits, the app uses a small demo fallback. Once the API account is funded and `OPENAI_API_KEY` is set on Vercel, the translation endpoint can make live OpenAI requests.

## Language quality

Pijin content should be reviewed by Solomon Islands Pijin speakers before public launch. Future Langalanga support should be built from community/native-speaker verified material rather than allowing the model to guess.
