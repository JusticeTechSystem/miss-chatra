// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J01siLgoAFJDj8yM22xC7vnMG6524C6pc3epB8WcrA6B0DLXxhfWN3rPH+0NNJA5Y61DFAYTPm9C7fJqZvhGnA78OVWsVmRVmQQ9KADKXmb0UlM4ZK4Trdp2akVe0F7HyhrUjVKjHrWtthHF3EisBZ5YvDfOmX2sfkSPGXK6CZxTHogYDQcePCBb65WQFBsCpdXwViip9kZWycyot6ikMHOqw5O6OAejzK/YH6h1v9Q0VvZaBULf4e+Pb5UH6i8IQ3KWJuCZCUwFrWCyXf3/h+cFK+8a7mmt0PiPcC9YpE/XPtrYwaDLvgoLCSOrZUIekhu1vsnUwDxTVbfo46iwt85bP7GZD6qdOQUikiQLRP/IzNmd01sEH+H+AuL9eXZfWt/EM4/H4ViZiKuu3jbqANSMpFDFquiJSTjW1Z8G2QbAWmE4FM9/QCy75QUVdLb6nWp7I692zSsvVsb5yZUtW8JjICKCwpbjlhZZEHu/O+N/6+vwVHIjwDAxI9r5bQmZUqTRXuE6jyRpWR1zz1ajDGhHsmAQ+Zf1dXzbSI+G2NHh066Qk79GkqHk+C0S1Qt0EbyAiZa8IHDpRLZyZUP/FvOxcDlR6VONL+w1JJ5xOi+o10GUhPdvklPQH7WhZdNVlAUSNlW3s0VCCkhXZqTuqZXA4XxxibbVe6OyWPEBRWE9pCKEjeBj6TeMIXa2iLsYmTh7c4PqALLNKcZESnzEwsdPwjTGPRR0i3X1JJNDjw5La4qBOxI5+QIlIsWni8iA2E2Y7eo7XybTMkv5q8ZN7J7BsEvwOrY3kV5mFwq36G4F/VvkEhVaGc0I2i+hZaQHcMPtwjo6PyJ0tRjidohg+Ot/MoyEvlrE3VyuAWCeYltrgUS0dlsolU2sQj5sbHt4YCr0yd5lTP/ksGILHh/cmk38sCzrGxOZm/EM4T0JkKPlRZpwizxPdd/EfcTyUSGX5OIa1riAtcsfcZU8qTVYG+jMHP6tbA82kw1DOcWx7QFY8jyFsDIWybi7Z/UeBu5QvWhogDQ60ChcaKxSKCY/lPWT';
  const _INTEGRITY_HASH = 'bc2b9d5b040122d2eaf43772051e4b6ab69663bf065a7b34f30732e8f419533c';
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
