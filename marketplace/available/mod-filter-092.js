// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sDcEOdXGyq5Ncbg5BYl7DnhqFieSIUydhELRauQolnsSgkI5SjskBNjdzM7WYNnbFrbEWFr2qLTPiiju3Sq2+E3D8gSKFGUV6tXvQTAEz0S7Mxs0C5lota91Y+wUFiFh87kTvobn+UcHDoHeLEPXmK4Ugr+OZDCbnkjbcVY6lyhLBcRJiF6mtDvF53l4ZrXlBBYuKF/EqSfm/oxYYsplSZmQ/Lf1YRp58ef5xv+NMRrTbipxJHN6W8D7De9CTibLXHNqf/BWVPx3Og38KBNt2l/VJdDtwIzsVLwc0J6BXEunWo4SCkc32MJtnqSOQ/6jqk5liFR9sCOp3W25vW+xYAXPnjUsOexOCpWgrsglNDbcZCTYYl9jgYeU5uRiGP5s3NOGLhX3bCAmUrv4j2HLlbNMuG1S9t0S0iS5C6CAehFL+JC7OOdAwysgzr681XDdgUvpwSd0eIlTPUf0ju2/NO1fM8IIoePX+jnhlbzqrWAyb3SSYwMYpTBXj/gcrURNXKxJWJpSxaifK65ZN+YcTJHs4MKV4GFluvozmRb5fKzSXlVZ78dIhBe1qLw415MRd/uQD2xLtcbA86ZjCm82i+eC253nO5nw6omX6vOY/fBPNP4L/cSJl67j2wMOFvqN5J6xmmXTiKXFRE3Hxa89mOvK8znIrMIvuycQYDeCoBBWHYzZe+aScI/BE++rrkCKotY49BPjiTszQKIXgqoiWNd4weO58/KmQfPCtKdlKC/dgQtb46HWHmlAZACtNNwEmMUeMlXTDRXr+xw+J9BrG1zUfuVMmfH6xFrJomv6wxh0Gqdwm8buAV0GOOQgxxF6KFrQWkA2ul9Y8c1dKA+rP3f7EHOD80BCEJkA97sBqBLwf47zYWvX56lqHvZ/iwHlJ0D5q5mJILgNAwUTNvs8gwJwFJTTaRjM/X2LReV+CSkFo484P206DkzXcM9XCdp3AXQAKEYw14qjV0NCBKIHdpbnzUCoGpCFazYZQVeSmKYfOuqmsp+NtMBdO5RyZPqh8gvkSu1FAQc59vIcHOd4E+ahx/3hvias47R05Ql+lm+imRb8SBJO7Xy6u/5+GlToFvqO6Ocmiap5S6TPnGLC/pE+hnfA6fFWuwxxqNPWqgUytI25IZ3Z0PuINA5NJzJr8r2wcXNAEvEtQy3X3thUBT1fqoGus3HstoW8fNLvKAjIVV3wV6m/KQt9igoiUslZebbKIlsKFcODP09+O1Wf867VU27u2ZWRniDdeQnBxt0h2lf7OaLBvKTG7PfIU4UyeQMmIEWSEfU/uUIBVoKPTv33ys7ZUaKnAADwH2myvniqlV11aTvQPDJOJKjboZxRBpVs8LdF2fmSXPwyDtRG9qBdYcs0eURprcfNUm9Q6cifM0g=';
  const _INTEGRITY_HASH = 'dc6632826f637edcd43c5411e5846c9319704ef90dc41a6457c185426c86d56d';
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
