# Cloudflare Email Distribution Worker

This worker forwards every inbound email to a hardcoded distribution list.

## Hardcoded distribution list

The destinations currently live in `src/index.js`:

- `alice@example.com`
- `bob@example.com`
- `carol@example.com`

## Deploy

1. Install Wrangler: `npm install --global wrangler`
2. Authenticate: `wrangler login`
3. Deploy the worker: `wrangler deploy`
4. Configure your email route in Cloudflare Email Routing to invoke this worker.

## Behavior

- Every inbound message is forwarded to each hardcoded recipient.
- If a recipient matches the original `To` address, that recipient is skipped to avoid self-forward loops.
- If any forward operation fails, the message is rejected with an error describing the failed recipients.
