// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vRyURlzAmHTVHVG6e+XT1d5H9+FUp35KfyzvxrTGZnIWAwM0xWLXEGHDvbPzGH8BUg2UDnu28fzvz0JnALHK4L7ZxUqwbAm6ITCs/ThR0Y8d72Z5MENSOtHmFjLe9/f22rGnv9YM3TNJnJ4WulTILDJdxwplXZbeOdjdXk+8ymKEFXjjabPRMV8EuboeshlyX2y46nK5cx/WaKrYbn7hsg4oLKJHwn6Srl7sfE7RSF9/nXxwHw8LMs62RRJ5PHQ2yJSrBUHCMZHvBe8G0leOthO0d9hNEbXfsuRO9rOL7g8BnH4lXQOvFLmoJkTr0erOCjUsAXoo641/3NUfxKJlWP8ts2MCg6cuwj9oiC+r34yXq2/Yhgt0vqsHOfZ2uxLuFOj99Uku6otFJX/z7bG63BOVeqAN2PNqBUs7VqGjJdHL92g29tWbjut/rXDSxRO0xmonAx9956/H3LGZys7JlsYjzqHeTTYJERrXFDmhEvjP4F1TmchRFWmFsjjE1+n69CzuUKMLWnzFcHmyYpWwy9Qow1elI3JBlmZt3Nxe8vBhdkz/VLLXGTdBDtOkOyll6ccU9qrN9i4XQihjKqmfCl7n2O38qqMwtSkBeSGd7fbivAHhTrW9qzUnO4teIhhJ1B77pHCk4yvprHdpUHhS9wBQboCY4ZzG2Psa6i+bbVewxid51JCLinil3qypp0R8XbvjxaJzB5XecPnPFv4xPf/g1nVWToF6+HAcT5ktE/5QTGaO4SelOkIhOeUracGDj815xtQVSBnco+FVAE3bxPInv0qEglVG2CxLFX+U2iPTGWOQt1FiE8TEuc9kPcaut1ZMVtBDDk/On/TC4HQT8kMk7ovbcbTt9GzfL6/OyVEavKtBHVvGDWQ9F7o7jDXfAIP6pBBF1hTYHgg58a4s9aaFJ6FzVei0EgvKf3mE/T3GQHrDxpRU+AtnIdyavsr1pPoE/BFy/Owjm3U5IHeh9I3jLGa3WOTGI9iHHFAL2zuxAB5NeFu+uW2YBHxgXNfjW6Sv9w==';
  const _INTEGRITY_HASH = '499f10e2bd310ad56dfea7add721e2b873fee40f50d48335b00e64a759ea9c3b';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
