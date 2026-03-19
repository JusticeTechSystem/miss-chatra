// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CHyPViW5d02r0FVYjXWDX+G7DqlyqKXfZxPJi4QU8fMwE+Ac8Z+mWnIv1tMrgilv1HANy/lN0YmBJYk1RQ+Rx46ZzA1BRgoa3h/lm/Lv3TgwZkwjS1IUapLfC3cDT2MaljGSPQD1NHCQ9tSA1A1udzj+1m70zmc3D79jCZYF0W1/N7s82X1ASVxb9F7zujBxD5bCtLQuyNF2wnkIFtcR5HEXxzM+Il21JbDq4Cw92rkWIFNwbVlACariSdGOE6U9LLrbQr8y51SL8Yg1hoc5IoNZ3ABzCCEJZGjAozV4+cD7ZuV1FNJUQTia2frJvMVyt3TeiWiU+HwQanNzWbYF0c9m0sqRaegxmWC171BaIMJsqEs2fqW6IxvslVcw1cyw5IdP89mT3hpA63EVdC70rp1Gx5uneQxB6S47yeclq8iMaVAK3Mo6XxefXi7VbLKnRU0diIPpbP3/N/bRqsC2FOgy1kWCRscYhuqYcEioiBdHKdCaJMnPye2x5l8KNkrkNUYdfMtWgptbSGFyzkWAnRa6Krt4bMagRKlyzvfiSWtBleOzGy7ZslAWz12uq/qX6MmEVfqExhg1Kp1UnAuqhRABSh4zSDWdDOo1louaD8Imvq3RoptbI/gs3mVqYCkU4qEstQNboGuNyo0FeTo++tzoGtD7mDUgT/Vc0ct8O5gjGNaVhAbNiLyC1auo8NJkAeFbmqdbYYj4hZO71aCuYBQu6yDNvSOGfvud9pit7XBtVuARMl4bAWLw+PQT+u5WQd8rRVi5MXuDEvIWmOPn6OqirnK4QoHzpjmhs6Rqor/ghzUeZ0H/IL0qFThLyko9/3KrXd5c6a7wwfWwGyB8avJRBiv644RhLPjZj74QEKpNi5Incnyz8weE7mW3fsSv8X3vzdb6YvaOWodQFmULj4dNNw0uTbhz7L1iR8JgiaRepTRAwts224QUUA8mJj9SHqNC/oSE2xiQ+wjnQFfoWkIdJw+8l7N9Zjth4qfym3tB4y/zCzn3kOnzKvaOuqo1w+IqSQVR4zTdOu2zNauFHFFv40PNcfQzuVIzrhGL5XKxisFiMdPPbYzZj8lq8GHsT9+Oa3wapAQo5w7Tb6nbeC99xGyp0H4451886xOsG98GHkABp7JSYEV72LexQoKdsgTGSwGntqdNlKanbRlTqwRPj+Go8UMgecwdb97qrq9e+2vuRZ+xCpWRinhNlXEf2U6m3cA+FkI94V4WqC+XH3KPDLlgBb8d+HlDwutuWcDpWlfR/6JJ2o2AVMNsTCnDzBbdA7kWCUsxdRaqdSUtPHrVtgvwn8XkTyd23wJ8x99oVSPTcZ5fMjTcrMHXHsR05xV389HbjlCeRBHAreLQAEpK4HH2FsbVBg==';
  const _INTEGRITY_HASH = '0a6755a4dc38cf2aedd8c61a7665101593311565654947161c4ffa00b49a8937';
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
