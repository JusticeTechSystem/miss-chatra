// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'o6UYy07InKcbOKPA4FWNyOG2U0zIqAb6BHF85rLHdzeNeQCrvbtgKTNL5e/Jj4tR+NORHps6F4aa/pIn5b4rLgLNGbfCmGNYkC87brsYVHGiV3gJH2BsNVEbNfjD4WBB4vzcysPJcasCzG6jOybh++qFfB3WmQZA4/332jfCdbnEaYug32sbuEpdWUQuemn8wA78xEFiXiZPIMTxb7XS1tXb9IWcip0zwVA9iyci+83PDRBk3Eek+7Q0/GlwYktql3QyS6i/0mLkpfQXX0nU9VuWOzZidvKDMt848XLMA3Df8hhd3kCgQ4RU2gJIBOP3Pp/oaT39qk3gon8TI7ZPHUM+pL3IXFlccmGhy/fQF3HP2V1ud4SllCOCSElx0DQo8fIiVZAfx4/ZaiDuDHYiqrhI+bGcL3s0RAGBEVq8qvWOSvmU/BBRuqhKu8rJgzPPowcwuG3rrqfHDO0vwDAE3OQFHPyfWPDkqykzwad814Zq8DNJKC8ufKoM30nXW8YEw8G58U1vQWOWjD9lLVYyjtf3SMj9VfFJjYiVAQ1qkjp/Of+srbu2aUBPvBqA1GoJGN6JCeI7xA3aO99IBw==';
  const _INTEGRITY_HASH = 'a4e222394fdd9823e2682900b7f7bbaec5ff69177b572554b83f448856a11526';
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
