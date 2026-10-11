# Miss Chatra

Miss Chatra is a WhatsApp group-management and AI bot by JusticeTech.
This repository contains only the **launcher**. On start it downloads the
latest verified bot from the JusticeTech update server, checks its signature,
and runs it. You never have to update files by hand, and there is nothing to
configure.

## Deploy

You need a Node.js 18+ server (for example a Pterodactyl panel with the
Node.js egg).

1. Upload this repository's files (`index.js`, `package.json`) to your server.
2. Set the startup file to **`index.js`** and start the server.
3. The first start takes a few minutes while the launcher registers itself,
   downloads the bot and installs its dependencies. After that the bot starts
   in seconds.
4. Open the onboarding link shown in the console and follow the steps.

That's it — no license key to request and no files to create.

## Updates

The launcher checks for new versions every few hours and restarts the bot on the
new version automatically. The bot owner can also send `/update confirm` on
WhatsApp to update immediately.

## What stays on your server

`database/`, `sessions/` (your WhatsApp login), installed marketplace plugins and
the launcher's own `.launcher/` folder live next to `index.js` and are never
touched by updates. Don't delete `.launcher/` — it holds this install's identity.

## Troubleshooting

| Console says | Meaning |
|---|---|
| `not accepting new installs right now` | the update server has paused sign-ups; try again later |
| `Too many installs from this address` | try again in an hour |
| `refused this instance` | this install was blocked by JusticeTech |
| `Continuing with the copy already on disk` | the update server was unreachable; the bot still runs the last good version |
| `Bad signature` / `hash mismatch` | the download was refused for safety; it will retry |

Advanced: if JusticeTech gave you a key by hand, put `LICENSE_KEY=your_key` in a
file named `.env` next to `index.js` and it will be used instead.
